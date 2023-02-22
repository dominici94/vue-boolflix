<template>
  <section class="tv-series-list">
    <div class="container">
      <h2 v-if="dataShared.searchedTvSeries">SERIE TV</h2>
      <ul>
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

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";

h2 {
  font-size: 5rem;
  text-transform: uppercase;
  background: linear-gradient(
    to bottom left,
    $color-primary-light,
    $color-primary-dark
  );
  letter-spacing: 0.5rem;
  display: table;
  margin: 3rem auto;
  padding: 0.5rem 5rem;
  border-top-left-radius: 7px;
  border-bottom-right-radius: 7px;
  transform: skewX(-15deg);
  box-shadow: 0 0.8rem 1rem rgba($color-black, 0.75);
  text-shadow: 2px 2px white;
  cursor: pointer;

  color: $color-black;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05) skewX(-15deg);
    box-shadow: 0 1.3rem 1rem rgba($color-black, 0.75);
  }
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    width: calc(100% / 4 - 20px);
    margin: 20px 10px;
  }
}
</style>
