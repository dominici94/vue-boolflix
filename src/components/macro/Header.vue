<template>
  <header>
      <img src="" alt="logo boolflix da inserire">
      <Searchbar/>
  </header>
</template>

<script>
import Searchbar from '../commons/Searchbar.vue';
// import dataShared from '../../share/dataShared';

export default {
  name: 'Header',
  components: {
      Searchbar
  },
  // data(){
  //   return{
  //     dataShared
  //   }
  // }
}
</script>

<style>

</style>