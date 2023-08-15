<script context="module">
    
    import axios from "axios";

    export const loadMovie = async (titleOfMovie , moviesCharged = []) => {
        try{
            const url = "http://127.0.0.1:3000/api/movies/";
            let movieToSave = moviesCharged.find((element) =>  element.Title == titleOfMovie);

            const body = {
                title:movieToSave.Title,
                Year:movieToSave.Year,
                imdbID:movieToSave.imdbID,
                Type:movieToSave.Type,
                Poster:movieToSave.Poster
            }
            console.log(body);
            let response = await axios.post(url, body);
            console.log(response);
        }catch(e){
            console.log(e);
        }   
    }


    export const loadMovie2 = async (titleOfMovie , moviesCharged = []) => {
        try{
            const url = "https://3vvjcrolq0.execute-api.us-east-1.amazonaws.com/movies";
            let movieToSave = moviesCharged.find((element) =>  element.Title == titleOfMovie);

            const body = {
                title:movieToSave.Title,
                year:movieToSave.Year,
                imdbID:movieToSave.imdbID,
                type:movieToSave.Type,
                poster:movieToSave.Poster
            }

            const headers = {
            'Content-Type': 'application/json', // Especificar el tipo de contenido
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5173' // Cambiar a tu dominio de frontend
            // Agregar más encabezados CORS si es necesario
            };

            console.log(body);
            let response = await axios.post(url, body, { headers });
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }
</script>

