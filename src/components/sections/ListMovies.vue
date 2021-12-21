<template>
  <section class="movie-list">
      <ol>
            <li v-for="(movie,index) in dataShared.searchedMovies" :key="index">
                <MovieCard :info="movie"/>
            </li>
      </ol>
  </section>
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