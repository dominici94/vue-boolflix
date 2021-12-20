<template>
  <div class="hello">
    <button @click="ricerca">clicca per cercare</button>
    <input type="text" placeholder="scrivi qua cosa cercare" v-model="movie">
    <div class="film-card" v-for="(movie,index) in searchedMovies" :key="index">
      <h1>TITOLO {{index+1}}: {{movie.title}}</h1>
      <h2>TITOLO ORIGINALE: {{movie.original_title}}</h2>
      <h3>LINGUA: {{movie.original_language}}</h3>
      <h4>VOTO: {{movie.vote_average}}</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data(){
    return{
      movie: '',
      searchedMovies: []
    }
  },
  methods: {
    ricerca(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '9ec928ff51bdea15194ed01659cadfec',
          query: this.movie,
          language: 'it-IT'
        }
      })
      .then((response) =>{
        console.log(response.data.results);
        this.searchedMovies = response.data.results;
        console.log(this.searchedMovies);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
