<template>
  <section class="movie-list">
      <div class="container">
        <h2>Film</h2>
        <ul>
            <li v-for="(movie, index) in dataShared.searchedMovies" :key="index">
                <Card :info="movie"/>
            </li>
        </ul>
      </div>

  </section>
</template>

<script>
import Card from '../commons/Card.vue';
import dataShared from '../../share/dataShared';

export default {
    name: 'ListMovies',
    components: {
        Card
    },
    data(){
        return{
            dataShared
        }
    }
}
</script>

<style lang="scss" scoped>

    section{
        background-color: rgb(255, 102, 0)
    }

    h2{
        text-transform: uppercase;
        font-size: 50px;
        text-align: center;
        color: white;
    }
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li{
            width: calc(100% / 6 - 20px);
            margin: 20px 10px;
        }
    }
</style>