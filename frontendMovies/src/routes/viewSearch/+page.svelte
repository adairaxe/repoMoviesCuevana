<script>
  import Post , { loadMovie } from "../../requestAxios/post.svelte";

  let requed_films = [];
  let input_word;
  const url = "http://127.0.0.1:3000/api/movies/";

  async function pullMoviesRequired(){
    const url = `http://www.omdbapi.com/?s=${input_word}&apikey=3e208a57`;
    try{
        await fetch(url)
          .then(res => res.json())
          .then(response => {
              requed_films = response.Search;
          });
    }catch(e){
        console.error(e);
    }
  }
</script>


<main>
  <div>
    <button><a href="/">Volver</a></button>
    <input id="input_film" type="text" placeholder="Nombre de pelicula" bind:value={input_word}>
    <button on:click={pullMoviesRequired}>Buscar</button>
  </div>

  <div class="container-movies">
    {#if requed_films !== undefined}
      {#each requed_films as movie}
      <div class="movie-card">
        <img alt="" src="{movie.Poster}">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
        <button on:click={() => loadMovie(`${movie.Title}` , requed_films)}>Guardar a repositorio</button>
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