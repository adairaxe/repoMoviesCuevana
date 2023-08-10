<script>
// @ts-nocheck

    import axios from "axios";
    import { page } from '$app/stores';

    let movieSelect = []
    let title = ($page.params.title).slice(1);

    async function getMoviesByTitle(movieTitle) {
        let url = "http://127.0.0.1:3000/api/movies/";
        try{
            let response = await axios.get(url+`${movieTitle}`);
            movieSelect = response.data[0];
            console.log(movieSelect);
        }catch(e){
            console.log(e);
        }
    }
    getMoviesByTitle(title);

</script>


<main>
    <div class="container-movies">
        {#if movieSelect !== undefined}
          <div class="movie-card">
            <img alt="" src="{movieSelect.Poster}">
            <h2>{movieSelect.title}</h2>
            <p>{movieSelect.Year}</p>
            <p>{movieSelect.Type}</p>
          </div>
        {:else}
            <h4>No hay resultados</h4>
        {/if}
      </div>
</main>


<style>
    main {
      font-family: Arial, sans-serif;
    }

    .container-movies{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
    }
  
    .movie-card {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 10px;
      padding: 10px;
      width: 250px;
      text-align: center;
    }
  
    h2 {
      font-size: 18px;
      margin: 5px 0;
    }
  
    p {
      margin: 5px 0;
      color: #666;
    }
</style>
