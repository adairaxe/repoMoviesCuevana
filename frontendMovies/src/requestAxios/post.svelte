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
</script>

