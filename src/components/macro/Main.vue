<template>
  <main>
      <ListMovies/>
      <ListTvSeries/>
  </main>
</template>

<script>
import ListMovies from '../sections/ListMovies.vue';
import ListTvSeries from '../sections/ListTvSeries.vue';

export default {
    name: 'Main',
    components : {
        ListMovies,
        ListTvSeries
    }
}
</script>

<style>

</style>