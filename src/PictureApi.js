import axios from "axios";

export default class PictureApi {
    constructor() {
        this.searchQueryPicture = '';
        this.page = 1;
        this.perPage = 40;
    }

    async fetchPictures() {
        const BASE_URL = "https://pixabay.com/api/";
        const MY_API_KEY = "28384939-76d0db34094acd1949cd365d2";
        
        const response = await 
        // return
        axios.get(`${BASE_URL}?key=${MY_API_KEY}&q=${this.searchQueryPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`)
            // .then(response => {
            //         this.incrementPage();

            //     return response.data;
            //     });    
    // }
                .then(response => {
                    this.incrementPage();
                    return response.data
                })
        return await response;
    }
// }
    get query() {
        return this.searchQueryPicture;
    }
    set query(newQuery) {
        this.searchQueryPicture = newQuery;
    }

    resetPage() {
        this.page = 1;
    }
    
    incrementPage() {
        this.page +=1;
    }
}