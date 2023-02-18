<template>
  <main class="main">
    <ListMovies />
    <ListTvSeries />
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
    dataShared.ricerca("batman");
  },
};
</script>

<style>
.main {
  padding-top: 100px;
  min-height: calc(100vh - 100px);
  background-image: url(https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200);
  background-size: 100%;
  /* background-repeat: no-repeat; */
}
</style>
