<template>
  <section class="movie-list">
      <h2>FILM</h2>
      <ol>
            <li v-for="(movie,index) in dataShared.searchedMovies" :key="index">
                <Card :info="movie"/>
            </li>
      </ol>
  </section>
</template>

<script>
import Card from '../commons/Card.vue';
import dataShared from '../../share/dataShared';

export default {
    name: 'ListMovies',
    components: {
        Card
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