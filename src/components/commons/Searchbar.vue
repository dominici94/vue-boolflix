<template>
    <div class="searchbar">
        <button @click="ricerca">clicca per cercare</button>
        <input type="text" placeholder="scrivi qua cosa cercare" v-model="dataShared.movie">
    </div>
</template>

<script>
import axios from 'axios';
import dataShared from '../../share/dataShared';

export default {
    name : 'Searchbar',
    data(){
        return{
            dataShared
        }
    },
    methods: {
    ricerca(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '9ec928ff51bdea15194ed01659cadfec',
          query: this.dataShared.movie,
          language: 'it-IT'
        }
      })
      .then((response) =>{
        console.log(response.data.results);
        this.dataShared.searchedMovies = response.data.results;
        console.log(this.dataShared.searchedMovies);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>