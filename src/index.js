// import axios from "axios";
// import Notiflix from 'notiflix';
import PictureApi from "./PictureApi";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

const pictureApi = new PictureApi();

form.addEventListener("submit", onFormSearch);

function onFormSearch(event) {
    event.preventDefault();

    // const searchForm = form.elements.searchQuery.value.trim();
    // console.log(searchForm);
    pictureApi.query = event.currentTarget.elements.searchQuery.value.trim();
    console.log(pictureApi.query);
    
    // fetchPictures(searchForm).then(pictures => console.log(pictures));
    pictureApi.fetchPictures().then(data => console.log(data));
};

// function createPictureCard(data) {
//     return data.map(picture =>  `<div class="photo-card">
//     <img src="${picture.webformatURL}" alt="${picture.tags}" loading="lazy" />
//     <div class="info">
//         <p class="info-item">
//         <b>${picture.likes}</b>
//         </p>
//         <p class="info-item">
//         <b>${picture.views}</b>
//         </p>
//         <p class="info-item">
//         <b>${picture.comments}</b>
//         </p>
//         <p class="info-item">
//         <b>${picture.downloads}</b>
//         </p>
//     </div>
// </div>`).join("");
// }

// function appendPicture(data) {
//     gallery.insertAdjacentHTML('beforeend',createPictureCard(data));
// }
// function notiflixFailure() {
//     return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');
// }