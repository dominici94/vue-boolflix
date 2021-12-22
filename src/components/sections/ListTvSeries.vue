<template>
  <section class="tv-series-list">
      <h2>SERIE TV</h2>
      <ol>
          <li v-for="(movie, index) in dataShared.searchedTvSeries" :key="index">
            <Card :info="movie"/>
          </li>
      </ol>
  </section>
</template>

<script>
import Card from '../commons/Card.vue';
import dataShared from '../../share/dataShared';

export default {
    name: 'ListTvSeries',
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