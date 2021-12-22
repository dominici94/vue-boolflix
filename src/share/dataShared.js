import Vue from 'vue';

export default Vue.observable({
    movie: '',
    searchedMovies: [],
    searchedTvSeries: [],
    star: '',
    getStar(vote){
        for(let i = 0; i < 5; i++){
            if(i < vote){
                this.star += '<i class="fas fa-star"></i>';
            }else{
                this.star += '<i class="far fa-star"></i>';
            }
        }
        console.log(this.star);
        return this.star;
    }
});