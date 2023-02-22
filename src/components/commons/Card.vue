<template>
  <div class="card">
    <img
      v-if="info.poster_path"
      :src="'https://image.tmdb.org/t/p/w342' + info.poster_path"
      :alt="info.title ? info.title : info.name"
    />
    <img v-else src="../../assets/img/film1.jpg" alt="image not in database" />
    <div id="inhover">
      <h2>Titolo: {{ info.title ? info.title : info.name }}</h2>
      <h2>
        Titolo originale:
        {{ info.original_title ? info.original_title : info.original_name }}
      </h2>
      <h2 id="lang">
        Lingua:
        <img
          v-if="flags.includes(info.original_language)"
          :src="require(`../../assets/img/${info.original_language}.png`)"
          :alt="info.original_language"
        />
        <img
          v-else
          src="../../assets/img/world.svg"
          :alt="info.original_language"
        />
      </h2>
      <!-- <h2>VOTO: {{info.vote_average}}/10</h2>
            <h2>voto: {{vote}}/5</h2> -->
      <h2>Voto: <span v-html="dataShared.getStar(vote)"></span></h2>
      <p v-if="info.overview">overview: {{ info.overview }}</p>
      <span v-else>No overview</span>
    </div>
  </div>
</template>

<script>
import dataShared from "../../share/dataShared";

export default {
  name: "Card",
  data() {
    return {
      dataShared,
      flags: ["it", "en", "fr", "de", "es"],
    };
  },
  props: {
    info: Object,
  },
  computed: {
    vote() {
      return Math.ceil(this.info.vote_average / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  #inhover {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    padding: 20px 10px;
    background-color: rgba($color: #000000, $alpha: 0.7);
    color: orange;
    overflow: auto;
    border: 1px solid red;
    transition: 1s;

    #lang {
      display: flex;
      align-items: center;
    }

    img {
      height: 2em;
      width: 3em;
    }
  }
}

.card:hover #inhover {
  display: block;
}
</style>
