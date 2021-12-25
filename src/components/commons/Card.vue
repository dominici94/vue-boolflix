<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w342'+ info.poster_path" :alt="info.title ? info.title : info.name">
        <div id="inhover">
            <h2>TITOLO: {{info.title ? info.title : info.name}}</h2>
            <h2>TITOLO ORIGINALE: {{info.original_title ? info.original_title : info.original_name}}</h2>
            <h2>LINGUA: 
                <img v-if="flags.includes(info.original_language)" :src="require(`../../assets/img/${info.original_language}.png`)" :alt="info.original_language">
                <img v-else src="../../assets/img/world.svg" :alt="info.original_language">
            </h2>
            <h2>VOTO: {{info.vote_average}}/10</h2>
            <h2>voto: {{vote}}/5</h2>
            <h2>stelle dinamiche <span v-html=dataShared.getStar(vote)></span></h2>
            <p>overview: {{info.overview}}</p>
        </div>
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
    
<style lang="scss" scoped>

    .card{
        position: relative;

        img{
        width: 100%;
        height: 400px;
        }

        #inhover{
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 400px;
            padding: 20px 10px;
            background-color: rgba($color: #000000, $alpha: 0.7);
            color: white;
            overflow: auto;
            border: 1px solid red;
            img{
                height: 50%;
                width: 50%;
            }
            
        }
    }
    
    .card:hover #inhover{
        display: block;
        
    }
    

</style>