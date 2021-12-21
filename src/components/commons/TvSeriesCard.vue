<template>
    <!-- <div class="movie-card" v-for="(movie,index) in dataShared.searchedMovies" :key="index"> -->
    <div class="tv-series-card">
        <h1>TITOLO: {{info.name}}</h1>
        <h2>TITOLO ORIGINALE: {{info.original_name}}</h2>
        <h3>LINGUA: {{info.original_language}}</h3>
        <!-- nella lingua inserire la bandiera: se la lingua dell'oggetto è ingl metto la bandiera inglese -->
        <h3>LINGUA bandiera: {{selectFlag(info)}}{{info.original_language}}</h3>
        

        <!-- <img src="../../assets/img/world.svg" alt="flag"> -->
        <h4>VOTO: {{info.vote_average}}</h4>
    </div>
</template>

<script>
import dataShared from '../../share/dataShared';

export default {
    name: 'MovieCard',
    data() {
        return {
            dataShared,
            flags: [
                'en',
                'it',
                'fr',
                'ge',
                'es'
            ]
        }
    },
    methods:{
        selectFlag(item){
            if(this.flags.includes(item.original_language)){
                if(item.original_language == 'en'){
                    return item.original_language = '../../assets/img/uk.png'; 
                }else if(item.original_language == 'it'){
                    return item.original_language = '../../assets/img/italia.png';
                }else if(item.original_language == 'fr'){
                    return item.original_language = '../../assets/img/francia.png';
                }else if(item.original_language == 'de'){
                    return item.original_language = '../../assets/img/germania.png';
                }else if(item.original_language == 'es'){
                    return item.original_language = '../../assets/img/spagna.png';
                }
            }else{
                return item.original_language = '../../assets/img/world.svg';
            } 
        }
    },
    props: {
        info: Object
    },
    computed: {
        
    }

}
</script>

<style>

</style>