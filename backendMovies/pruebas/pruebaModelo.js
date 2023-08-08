const mongoose = require("mongoose");
const Movie = require("../models/movie.model");

(async () => {
    await mongoose.connect("mongodb://127.0.0.1/repoMovie");
    const newMovie = await Movie.create({
        title: "El viento",
        Year: 2005,
        imdbID: "tt0318765",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTk5MjI5OTA5NF5BMl5BanBnXkFtZTcwNTg1MjA0MQ@@._V1_SX300.jpg"
    });

    console.log(newMovie);
})();

