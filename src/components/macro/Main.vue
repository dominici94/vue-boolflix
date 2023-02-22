<template>
  <main class="main">
    <ListMovies class="list" />
    <ListTvSeries class="list" />
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

<style lang="scss">
@import "../../assets/style/partials/variables.scss";

.main {
  padding-top: 10rem;
  padding-bottom: 5rem;
  min-height: calc(100vh - 10rem);
  background-image: linear-gradient(
      to right bottom,
      rgba(176, 7, 16, 0.7),
      rgba(0, 0, 0, 0.8)
    ),
    url(https://cinemaserietv.it/wp-content/uploads/2022/08/netflix-ultime-uscite.jpg);
  background-color: #fff;
  background-size: 100%;
  background-repeat: repeat-y;

  .heading-primary {
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
    margin-bottom: 3rem;
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

  .list:not(:last-child) {
    margin-bottom: 10rem;
  }

  .list-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 6rem;
    grid-column-gap: 4.5rem;
    margin-top: 6rem;
  }

  .list-small {
    grid-template-columns: repeat(auto-fit, max(300px));
  }
}
</style>
