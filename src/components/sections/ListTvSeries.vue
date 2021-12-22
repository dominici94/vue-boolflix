<template>
  <section class="movie-list">
      <ol>
          <li v-for="(tvSeries,index) in dataShared.searchedTvSeries" :key="index">
            <Card :info="tvSeries"/>
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