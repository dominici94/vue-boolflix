<template>
    <!-- <div class="movie-card" v-for="(movie,index) in dataShared.searchedMovies" :key="index"> -->
    <div class="movie-card">
        <h1>TITOLO: {{dataShared.movie.title}}</h1>
        <h2>TITOLO ORIGINALE: {{dataShared.movie.original_title}}</h2>
        <h3>LINGUA: {{dataShared.movie.original_language}}</h3>
        <h4>VOTO: {{dataShared.movie.vote_average}}</h4>
    </div>
</template>

<script>
import dataShared from '../../share/dataShared';

export default {
    name: 'MovieCard',
    data() {
        return {
            dataShared
        }
    }

}
</script>

<style>

</style>