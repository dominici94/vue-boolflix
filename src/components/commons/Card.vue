<template>
  <div class="card">
    <img
      class="card__image"
      v-if="info.poster_path"
      :src="'https://image.tmdb.org/t/p/w342' + info.poster_path"
      :alt="info.title ? info.title : info.name"
    />
    <img
      class="card__image"
      v-else
      src="../../assets/img/film1.jpg"
      alt="image not in database"
    />

    <div class="card__overlay">
      <h4 class="card__title">{{ info.title ? info.title : info.name }}</h4>
      <h4 class="card__title--original">
        Original:
        {{ info.original_title ? info.original_title : info.original_name }}
      </h4>

      <img
        class="card__flag"
        v-if="flags.includes(info.original_language)"
        :src="require(`../../assets/img/${info.original_language}.png`)"
        :alt="info.original_language"
      />
      <img
        class="card__flag"
        v-else
        src="../../assets/img/world.svg"
        :alt="info.original_language"
      />

      <h4 class="card__vote" v-html="dataShared.getStar(vote)"></h4>
      <p class="card__overview" v-if="info.overview">{{ info.overview }}</p>
      <span class="card__overview" v-else>No overview available</span>
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
@import "../../assets/style/partials/variables.scss";

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #ccc;
}

::-webkit-scrollbar-thumb {
  background: $color-primary;
}

::-webkit-scrollbar-thumb:hover {
  background: $color-primary-dark;
}

.card {
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 0.5rem 4rem rgba($color-black, 0.8);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.8);
    transform: translateY(-1rem);
  }

  &__image {
    width: 100%;
    height: inherit;
    object-fit: cover;
    transition: all 0.3s;
  }

  &__overlay {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    background-color: rgba($color-black, 0.7);
    color: $color-primary-light;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  &:hover &__overlay {
    opacity: 1;
    visibility: visible;
  }

  &__title {
    font-size: 3rem;
    text-transform: uppercase;
    font-family: $font-logo;
    letter-spacing: 1.5px;

    &--original {
      font-size: 1.5rem;
    }
  }

  &__flag {
    height: 4rem;
    width: 5rem;
    border-radius: 50%;
  }

  &__vote {
    font-size: 1.6rem;
    color: #ffd32a;
  }

  &__overview {
    width: 90%;
    margin: 0 auto;
    font-size: 1.4rem;
    line-height: 1.2;
  }
}
</style>
