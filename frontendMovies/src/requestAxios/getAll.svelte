<script context="module">

    import axios from "axios";
    export let moviesOfMongo = [];

    

    async function getMovies() {
        let url = "http://127.0.0.1:3000/api/movies/";
        try{
            let response = await axios.get(url)
            moviesOfMongo = response.data
            console.log(moviesOfMongo);
        }catch(e){
            console.log(e);
        }
    }
    
    //getMovies();

    async function getMovies2() {
        let url = "https://3vvjcrolq0.execute-api.us-east-1.amazonaws.com/movies";
        try{
            const headers = {
            'Content-Type': 'application/json', // Especificar el tipo de contenido
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5173' // Cambiar a tu dominio de frontend
            };

            let response = await axios.get(url , { headers })
            moviesOfMongo = response.data
            console.log(moviesOfMongo);
        }catch(e){
            console.log(e);
        }
    }

    getMovies2();
</script>