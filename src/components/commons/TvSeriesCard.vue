<template>
    <!-- <div class="movie-card" v-for="(movie,index) in dataShared.searchedMovies" :key="index"> -->
    <div class="tv-series-card">
        <h1>TITOLO: {{info.name}}</h1>
        <h2>TITOLO ORIGINALE: {{info.original_name}}</h2>
        <!-- <h3>LINGUA: {{info.original_language}}</h3> -->
        <!-- nella lingua inserire la bandiera: se la lingua dell'oggetto è ingl metto la bandiera inglese -->
        <h3>LINGUA: </h3>

        <!-- <img src="../../assets/img/world.svg" alt="flag"> -->
        <h4>VOTO: {{info.vote_average}}</h4>
    </div>
</template>

<script>
import dataShared from '../../share/dataShared';

export default {
    name: 'MovieCard',
    data() {
        return {
            dataShared,
            flags: [

            ]
        }
    },
    props: {
        info: Object
    },

}
</script>

<style>

</style>