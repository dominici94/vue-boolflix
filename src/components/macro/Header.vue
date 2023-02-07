<template>
  <header class="header">
    <div class="header__left">
      <img src="../../assets/img/boolflix.png" alt="logo boolflix" />

      <nav class="header__nav">
        <ul class="header__nav--list">
          <li class="header__nav--el">Home</li>
          <li class="header__nav--el">TV Shows</li>
          <li class="header__nav--el">Movies</li>
          <li class="header__nav--el">Recently Added</li>
          <li class="header__nav--el">My List</li>
        </ul>
      </nav>
    </div>

    <div class="header__right">
      <div class="searchbar">
        <form @submit.prevent="dataShared.ricerca(dataShared.movie)">
          <!-- <button>cerca film/telefilm</button> -->
          <input
            type="text"
            placeholder="Cerca film o telefilm"
            v-model="dataShared.movie"
          />
        </form>
      </div>
    </div>
  </header>
</template>

<script>
// import axios from "axios";
import dataShared from "../../share/dataShared";

export default {
  name: "Header",
  data() {
    return {
      dataShared,
    };
  },
  methods: {
    // ricerca(query) {
    //   axios
    //     .get("https://api.themoviedb.org/3/search/movie", {
    //       params: {
    //         api_key: "9ec928ff51bdea15194ed01659cadfec",
    //         query: query,
    //         language: "it-IT",
    //       },
    //     })
    //     .then((response) => {
    //       this.dataShared.searchedMovies = response.data.results;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   axios
    //     .get("https://api.themoviedb.org/3/search/tv", {
    //       params: {
    //         api_key: "9ec928ff51bdea15194ed01659cadfec",
    //         query: this.dataShared.movie,
    //         language: "it-IT",
    //       },
    //     })
    //     .then((response) => {
    //       this.dataShared.searchedTvSeries = response.data.results;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  // background-color: black;

  &__left,
  &__right {
    display: flex;
    align-items: center;
    width: 50%;
  }

  &__right {
    flex-direction: row-reverse;
  }

  &__nav--list {
    list-style: none;
    display: flex;
  }

  &__nav--el {
    margin-left: 15px;
  }

  img {
    height: 70px;
  }

  .searchbar button,
  input {
    margin-right: 40px;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: red;
  }
}
</style>
