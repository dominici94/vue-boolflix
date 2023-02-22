<template>
  <section class="tv-series-list">
    <div class="container">
      <h2 v-if="dataShared.searchedTvSeries" class="heading-primary">
        TV Shows
      </h2>
      <ul
        class="list-cards"
        :class="dataShared.searchedTvSeries.length < 5 ? 'list-small' : ''"
      >
        <li v-for="(movie, index) in dataShared.searchedTvSeries" :key="index">
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
  name: "ListTvSeries",
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
