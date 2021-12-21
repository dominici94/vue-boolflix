<template>
  <header>
      <img src="" alt="logo boolflix da inserire">
      <Searchbar/>
      <!-- <div class="searchbar">
        <button @click="ricerca">clicca per cercare</button>
        <input type="text" placeholder="scrivi qua cosa cercare" v-model="movie">
        <div class="movie-card" v-for="(movie,index) in searchedMovies" :key="index">
            <h1>TITOLO {{index+1}}: {{movie.title}}</h1>
            <h2>TITOLO ORIGINALE: {{movie.original_title}}</h2>
            <h3>LINGUA: {{movie.original_language}}</h3>
            <h4>VOTO: {{movie.vote_average}}</h4>
        </div>
      </div> -->
  </header>
</template>

<script>
import Searchbar from '../commons/Searchbar.vue';
import dataShared from '../../share/dataShared';

export default {
  name: 'Header',
  components: {
      Searchbar
  },
  data(){
    return{
      dataShared
    }
  }
}
</script>

<style>

</style>