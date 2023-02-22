<template>
  <section class="movie-list">
    <div class="container">
      <h2 v-if="dataShared.searchedMovies" class="heading-primary">Movies</h2>
      <ul
        class="list-cards"
        :class="dataShared.searchedMovies.length < 5 ? 'list-small' : ''"
      >
        <li v-for="(movie, index) in dataShared.searchedMovies" :key="index">
          <Card :info="movie" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Card from "../commons/Card.vue";
import dataShared from "../../share/dataShared";

export default {
  name: "ListMovies",
  components: {
    Card,
  },
  data() {
    return {
      dataShared,
    };
  },
};
</script>
