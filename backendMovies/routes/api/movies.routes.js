const router = require("express").Router();

const Movie = require("../../models/movie.model");

//Se coloca el async porque todos los metodos de mongoose usan promesas
router.get("/", async (req, res) => {
    try{
        const movies = await Movie.find();
        res.json(movies);
    }catch(error){
        res.status(200).json({error: "Ha fallado"});
    }
});

router.get("/:movieTitle", async (req, res) => {
    try{
        console.log(req.params.movieTitle);
        const movies = await Movie.find({
            title: req.params.movieTitle
        });
        res.json(movies);
    }catch(error){
        res.status(500).json({error: "Ha fallado al inserccion"});
    }
});

router.post("/", async (req, res) => {
    try{
        const newMovie = await Movie.create(req.body);
        res.json(newMovie);
    }catch(error){
        res.status(500).json({error: "Ha fallado al inserccion"});
    }
});

router.put("/:movieId", async (req, res) => {
    try{
        const movieupdated = await Movie.findByIdAndUpdate(
            req.params.movieId , req.body , {new : true}
        );
        res.json(movieupdated);
    }catch(error){
        res.status(500).json({error: "Ha fallado la actualización"});
    }
});

router.delete("/:movieId", async (req, res) => {
    try{
        const movieDeleted = await Movie.findByIdAndDelete(req.params.movieId);
        res.json(movieDeleted);
    }catch(error){
        res.status(500).json({error: "Ha fallado el borrado"});
    }
})

module.exports = router;