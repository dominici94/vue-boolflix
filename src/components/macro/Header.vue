<template>
  <header>

      <img src="../../assets/img/boolflix.png" alt="logo boolflix">
  
      <div class="searchbar">
        <form @submit.prevent="ricerca">
          <button>cerca film/telefilm</button>
          <input type="text" placeholder="scrivi qua cosa cercare" v-model="dataShared.movie">
        </form>
      </div>
  </header>
</template>

<script>
import axios from 'axios';
import dataShared from '../../share/dataShared';

export default {
  name: 'Header',
  data(){
      return{
        dataShared,
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
      .then((response) => {
        this.dataShared.searchedMovies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '9ec928ff51bdea15194ed01659cadfec',
          query: this.dataShared.movie,
          language: 'it-IT'
        }
      })
      .then((response) => {
        this.dataShared.searchedTvSeries = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: black;

    img{
      height: 70px;
    }

    .searchbar button, input{
      margin-right: 40px;
      padding: 5px 20px;
      border-radius: 20px;
      background-color: red;
    }

  }
</style>