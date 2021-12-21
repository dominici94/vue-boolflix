<template>
  <div class="movie-list">
      <MovieCard v-for="(movie,index) in dataShared.searchedMovies" :key="index"/>
  </div>
</template>

<script>
import MovieCard from '../commons/MovieCard.vue';
import dataShared from '../../share/dataShared';

export default {
    name: 'ListMovies',
    components: {
        MovieCard
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