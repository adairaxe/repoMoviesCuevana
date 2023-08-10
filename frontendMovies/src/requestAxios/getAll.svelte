<script context="module">

    import axios from "axios";
    export let moviesOfMongo = [];

    let url = "http://127.0.0.1:3000/api/movies/";

    async function getMovies() {
        try{
            let response = await axios.get(url)
            moviesOfMongo = response.data
            console.log(moviesOfMongo);
        }catch(e){
            console.log(e);
        }
    }
    
    getMovies();
</script>