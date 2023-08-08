<script>
    import axios from "axios";

    let moviesOfMongo = [];
    const url = "http://127.0.0.1:3000/api/movies/";

    const getMovies = async () => {
        try{
            let response = await axios.get(url)
            moviesOfMongo = response.data
            console.log(moviesOfMongo);
        }catch(e){
            console.log(e);
        }
    }

    const changeMovie = async (movieID) => {
        try{
            const updatedData = {
                title: "Nuevo título",
                Year: 2023
            };
            let response = await axios.put(url+`${movieID}` , updatedData);
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

    const deleteMovie = async (movieID) => {
        try {
            const response = await axios.delete(url+`${movieID}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    getMovies();

</script>

<main>
    <div class="container-movies">
        {#if moviesOfMongo !== undefined}
          {#each moviesOfMongo as movie}
          <div class="movie-card">
            <a href= "./movie/${movie.title}">
                <img alt="" src="{movie.Poster}">
                <h2>{movie.title}</h2>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
            </a> 
          </div>
          {/each}
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