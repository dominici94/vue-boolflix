<template>
    <!-- <div class="movie-card" v-for="(movie,index) in dataShared.searchedMovies" :key="index"> -->
    <div class="movie-card">
        <h1>TITOLO {{info.index}}: {{info.title}}</h1>
        <h2>TITOLO ORIGINALE: {{info.original_title}}</h2>
        <h3>LINGUA: {{info.original_language}}</h3>
        <h4>VOTO: {{info.vote_average}}</h4>
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
    },
    props: {
        info: Object
    }

}
</script>

<style>

</style>