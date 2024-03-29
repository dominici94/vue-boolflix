import Vue from "vue";
import axios from "axios";

export default Vue.observable({
  movie: "",
  searchedMovies: {},
  searchedTvSeries: {},
  getStar(vote) {
    let star = "";
    for (let i = 0; i < 5; i++) {
      if (i < vote) {
        star += '<i class="fas fa-star"></i>';
      } else {
        star += '<i class="far fa-star"></i>';
      }
    }
    return star;
  },
  ricerca(search) {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "9ec928ff51bdea15194ed01659cadfec",
          query: search,
          language: "it-IT",
        },
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.results.length === 0) return;
        this.searchedMovies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "9ec928ff51bdea15194ed01659cadfec",
          query: search,
          language: "it-IT",
        },
      })
      .then((response) => {
        if (response.data.results.length === 0) return;
        this.searchedTvSeries = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
