import './css/style.css'

// import axios from "axios";
import Notiflix from 'notiflix';
import PictureApi from "./PictureApi";
// import loadMoreBtn from "./loadMoreBtn";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

const pictureApi = new PictureApi();
let countPictures = 0;

let lightbox = new SimpleLightbox('.photo-card a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

form.addEventListener("submit", onFormSearch);

function onFormSearch(event) {
    event.preventDefault();

    resetGallery()

    // const searchForm = form.elements.searchQuery.value.trim();
    // console.log(searchForm);
    pictureApi.query = event.currentTarget.elements.searchQuery.value.trim();
    console.log(pictureApi.query);
    pictureApi.resetPage();
    // fetchPictures(searchForm).then(pictures => console.log(pictures));
    pictureApi.fetchPictures().then(data => {
        if (pictureApi.query === "") {
            notiflixFailure();
        } else {
            appendPicture(data.hits);
            countPictures = data.hits.length;
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} pictures.`);
            lightbox.refresh();
        }
        if (data.totalHits > perPage) {
        loadMoreBtn.classList.remove('is-hidden')
        }
    }).catch(() => notiflixFailure());
};

loadMoreBtn.addEventListener("click", onLoadMore);

function onLoadMore(event) {
    event.preventDefault();

    pictureApi.fetchPictures().then(data => {
        appendPicture(data.hits);
        countPictures += data.hits.length;
        console.log(countPictures);
        lightbox.refresh();
        
        if (countPictures > data.totalHits) {
            loadMoreBtn.classList.add('is-hidden');
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        }
    })

}


function createPictureCard(data) {
    return data.map(picture =>  `<div class="photo-card">
        <a href="${picture.largeImageURL}">
    <img class="photo-card__picture" src="${picture.webformatURL}" alt="${picture.tags}" loading="lazy" />
        </a>
    <div class="info">
        <p class="info-item">
        <b>Likes: </b>${picture.likes}
        </p>
        <p class="info-item">
        <b>Views: </b>${picture.views}
        </p>
        <p class="info-item">
        <b>Comments: </b> ${picture.comments}
        </p>
        <p class="info-item">
        <b>Downloads: </b>${picture.downloads}
        </p>
    </div>
</div>`).join("");
}

function appendPicture(data) {
    gallery.insertAdjacentHTML('beforeend',createPictureCard(data));
}
function notiflixFailure() {
    return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');
}
function resetGallery() {
    gallery.innerHTML= '';
}
