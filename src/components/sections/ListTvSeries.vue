<template>
  <section class="movie-list">
      <TvSeriesCard v-for="(tvSeries,index) in dataShared.searchedTvSeries" :key="index" :info="tvSeries"/>
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