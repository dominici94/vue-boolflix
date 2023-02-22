<template>
  <main class="main">
    <ListMovies class="movies" />
    <ListTvSeries class="series" />
  </main>
</template>

<script>
import ListMovies from "../sections/ListMovies.vue";
import ListTvSeries from "../sections/ListTvSeries.vue";
import dataShared from "../../share/dataShared";

export default {
  name: "Main",
  components: {
    ListMovies,
    ListTvSeries,
  },
  data() {
    return {
      dataShared,
    };
  },
  mounted() {
    dataShared.ricerca("harry potter");
  },
};
</script>

<style>
.main {
  padding-top: 100px;
  min-height: calc(100vh - 100px);
  background-image: url(https://cinemaserietv.it/wp-content/uploads/2022/08/netflix-ultime-uscite.jpg);
  background-size: 100%;
  background-repeat: repeat-y;
}

/* .movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
} */
</style>
