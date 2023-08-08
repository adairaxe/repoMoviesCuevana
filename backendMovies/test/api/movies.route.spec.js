const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");
const Movie = require("../../models/movie.model");

describe("Pruebas sobre la api MovieRepo" , () => {

    beforeEach(async() => {
        await mongoose.connect("mongodb://127.0.0.1/repoMovie");
    });

    afterAll(async() => {
        await mongoose.disconnect();
    });
    
    describe("GET /api/movies", () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get("/api/movies").send();
        });
        
        it("La ruta funciona", async () => {
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        })

        it("La peticion nos devuelve un array de movies", async () => {
            expect(response.body).toBeInstanceOf(Array);
            console.log(response);
        });
    });

    describe("POST /api/movies", () => {

        let response;
        let newMovie = {title: "Interestelar", Year: "2015", imdbID: "asy45", Type: "movie", Poster: "url"};
        beforeEach(async () => {
            response = await request(app).post("/api/movies").send(newMovie);
        });

        afterAll(async () => {
            await Movie.deleteMany({title: "Interestelar"});
        });

        it("La ruta funciona" , async () => {
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        });

        it("Inserccion exitosa", async () => {
            expect(response.body._id).toBeDefined();
            expect(response.body.title).toBe(newMovie.title);
        });

        it("Inserccion fallida", async () => {
            const wrongMovie = {title: "noExiste"}
            response = await request(app).post("/api/movies").send(wrongMovie);
            expect(response.status).toBe(500);
            expect(response.body.error).toBeDefined();
        });
    });

    describe("PUT /api/movies", () => {

        let response;
        let movie;
        let newMovie = {title: "Interestelar", Year: "2015", imdbID: "asy45", Type: "movie", Poster: "url"};
        beforeEach(async () => {
            movie = await Movie.create(newMovie);
            response = await request(app).put(`/api/movies/${movie._id}`).send({title: "Dunkirk"});
        });

        afterEach(async () => {
            await Movie.findByIdAndDelete(newMovie._id);
        });

        it("La ruta funciona", async () => { 
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        });

        it("Se actualiza correctamente", async () => {
            expect(response.body.title).toBe("Dunkirk")
        });
    });

    describe("DELETE /api/movies", () => {
        
        let movie;
        let response;
        let newMovie = {title: "Interestelar", Year: "2015", imdbID: "asy45", Type: "movie", Poster: "url"};
        beforeEach(async () => {
            movie = await Movie.create(newMovie);
            response = await request(app).delete(`/api/movies/${movie._id}`).send();
        });
        
        it("La ruta funciona", async () => { 
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        });

        it("Se borra correctamente", async () => {
            const foundMovie = await Movie.findById(movie._id);
            expect(foundMovie).toBeNull();
        });
    });

});