<template>
    <div class="searchbar">
      <form @submit.prevent="ricerca">
        <button>clicca per cercare film</button>
        <input type="text" placeholder="scrivi qua cosa cercare" v-model="dataShared.movie">
      </form>
      <form @submit.prevent="ricercaSerie">
        <button>clicca per cercare serie TV</button>
        <input type="text" placeholder="scrivi qua cosa cercare" v-model="dataShared.tvSeries">
      </form>
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
          query: dataShared.movie,
          language: 'it-IT'
        }
      })
      .then((response) => {
        dataShared.searchedMovies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    ricercaSerie(){
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '9ec928ff51bdea15194ed01659cadfec',
          query: dataShared.tvSeries,
          language: 'it-IT'
        }
      })
      .then((response) => {
        dataShared.searchedTvSeries = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>