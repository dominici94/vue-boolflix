<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w342'+ info.poster_path" :alt="info.title ? info.title : info.name">
        <h1>TITOLO: {{info.title ? info.title : info.name}}</h1>
        <h2>TITOLO ORIGINALE: {{info.original_title ? info.original_title : info.original_name}}</h2>
        <h3>LINGUA: 
            <img v-if="flags.includes(info.original_language)" :src="require(`../../assets/img/${info.original_language}.png`)" :alt="info.original_language" height="30">
            <img v-else src="../../assets/img/world.svg" :alt="info.original_language" height="30">
        </h3>
        <h4>VOTO: {{info.vote_average}}</h4>
        <h4>voto computed: {{vote}}</h4>
    </div>
</template>

<script>
import dataShared from '../../share/dataShared';

export default {
    name: 'Card',
    data() {
        return {
            dataShared,
            flags: [
                'it',
                'en',
                'fr',
                'de',
                'es'
            ]
        }
    },
    props: {
        info: Object
    },
    computed: {
        vote(){
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>

<style>

</style>