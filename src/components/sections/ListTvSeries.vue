<template>
  <section class="movie-list">
      <ol>
          <li v-for="(tvSeries,index) in dataShared.searchedTvSeries" :key="index">
            <TvSeriesCard :info="tvSeries"/>
          </li>
      </ol>
  </section>
</template>

<script>
import TvSeriesCard from '../commons/TvSeriesCard.vue';
import dataShared from '../../share/dataShared';

export default {
    name: 'ListTvSeries',
    components: {
        TvSeriesCard
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