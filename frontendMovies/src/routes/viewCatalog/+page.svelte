<script>

  import requestAxios , { moviesOfMongo } from "../../requestAxios/getAll.svelte"

</script>

<main>
  <button><a href="/">Volver</a></button>
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