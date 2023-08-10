<script context="module">

    import axios from "axios";

    let movieSelect;
    async function getMoviesByTitle(movieTitle) {
        let url = "http://127.0.0.1:3000/api/movies/";
        try{
            let response = await axios.get(url+`${movieTitle}`);
            movieSelect = response.data;
            console.log(movieSelect);
        }catch(e){
            console.log(e);
        }
    }
    
</script>