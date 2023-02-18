<template>
  <header class="header">
    <div class="header__left">
      <img
        src="../../assets/img/boolflix.png"
        alt="logo boolflix"
        class="header__logo"
      />

      <nav class="header__nav">
        <ul class="header__nav--list">
          <li class="header__nav--el">
            <a href="#" class="header__nav--link active">Home</a>
          </li>
          <li class="header__nav--el">
            <a href="#" class="header__nav--link"> TV Shows</a>
          </li>
          <li class="header__nav--el">
            <a href="#" class="header__nav--link"> Movies</a>
          </li>
          <li class="header__nav--el">
            <a href="#" class="header__nav--link"> Recently Added</a>
          </li>
          <li class="header__nav--el">
            <a href="#" class="header__nav--link">My List</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="header__right">
      <div class="searchbar">
        <form @submit.prevent="dataShared.ricerca(dataShared.movie)">
          <!-- <button>cerca film/telefilm</button> -->
          <input
            type="text"
            placeholder="Cerca..."
            v-model="dataShared.movie"
            class="searchbar__input"
          />
          <button class="searchbar__button">
            <i class="fas fa-search"></i>
          </button>
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
@import "../../assets/style/partials/variables.scss";

.header {
  height: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  // color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-image: linear-gradient(
    to bottom,
    rgba($color-black, 1),
    rgba($color-black, 0.8)
  );

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__nav--list {
    list-style: none;
    display: flex;
  }

  &__nav--el {
    margin-left: 1.5rem;
  }

  &__nav--link:link,
  &__nav--link:visited {
    padding: 0.5rem 0;
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    transition: all 0.6s;
  }

  &__nav--link:hover,
  &__nav--link:active,
  .active {
    color: $color-primary;
    // border-bottom: 1px solid $color-primary-dark;
    transform: translateY(-3px);
  }

  &__logo {
    height: 7rem;
    margin-right: 2rem;
  }

  .searchbar {
    color: white;

    &__input {
      background-color: $color-primary;
      color: white;
      border: none;
      margin-right: 3rem;
      // outline: $color-primary-dark;
      // display: inline-block;
      padding: 0.5rem 2rem;
      border-radius: 20px;
      &::placeholder {
        color: white;
      }
    }

    &__button {
      background-color: $color-primary;
      padding: 0.6rem 0.8rem;
      border-radius: 7px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: $color-primary-dark;
      }

      & > * {
        width: 1.5rem;
        height: 1.2rem;
        color: white;
      }
    }
  }

  // .searchbar button,
  // input {
  //   margin-right: 40px;
  //   padding: 5px 20px;
  //   border-radius: 20px;
  //   background-color: $color-primary-dark;
  // }
}
</style>
