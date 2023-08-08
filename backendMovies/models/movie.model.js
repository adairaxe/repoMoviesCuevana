const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    Year: {type: Number},
    imdbID: {type: String, required: true},
    Type: {type: String , maxlength: 10},
    Poster: {type: String}
});

module.exports = mongoose.model("movie" , movieSchema);