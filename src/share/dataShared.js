import Vue from 'vue';

export default Vue.observable({
    movie: '',
    searchedMovies: null,
    searchedTvSeries: null,
    getStar(vote){
        let star = '';
        for(let i = 0; i < 5; i++){
            if(i < vote){
                star += '<i class="fas fa-star"></i>';
            }else{
                star += '<i class="far fa-star"></i>';
            }
        }
        return star;
    }
});