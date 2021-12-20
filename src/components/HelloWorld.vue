<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="ricerca">clicca qui</button>
    <input type="text" placeholder="scrivi qua cosa cercare" v-model="movie">

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      movie: ''
    }
  },
  methods: {
    ricerca(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '9ec928ff51bdea15194ed01659cadfec',
          query: this.movie,
          language: 'it-IT'
        }
      })
      .then(function (response) {
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
