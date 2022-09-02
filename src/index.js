import './styles/tvmaze.css';
import logo from './assets/tv-maze-logo.svg';
import getData from './modules/data.js';
import generateSingleShow from './modules/show.js';
import { getLikes, addLike } from './modules/involvmentapi.js';

const showItems = document.querySelector('.show-items');
const tvMazeLogo = document.querySelector('.logo');
const showCount = document.querySelector('.show-count');

tvMazeLogo.src = logo;

const renderLikes = (listItem) => {
  getLikes().then((response) => {
    response.forEach((e) => {
      if (e.item_id === `${listItem.id}`) {
        listItem.querySelector('.num-likes').innerText = e.likes;
      }
    });
  });
};

// fetch data and display it on the ui
const displayMovies = async () => {
  try {
    const responses = await getData();
    showCount.innerText = `${responses.length}`;

    responses.forEach((response) => {
      const {
        id,
        image: { original: imageUrl },
        name,
      } = response;

      const singleItem = generateSingleShow(imageUrl, name, id);
      showItems.appendChild(singleItem);
    });
  } finally {
    // add listener to like icon
    const likeIcons = document.querySelectorAll('.like-icon');
    likeIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const listItem = e.target.parentElement.parentElement;
        addLike(listItem.id);
        const spanEle = e.target.parentElement.nextElementSibling.children[0];
        const prevLikes = +spanEle.innerText;
        spanEle.innerText = prevLikes + 1;
      });
    });

    // implement the comment feature
    document.querySelector('.show-items').addEventListener('click', (e) => {
      if (e.target.classList.contains('comment-btn')) {
        // code
      }
    });

    document.querySelectorAll('.show').forEach((show) => {
      renderLikes(show);
    });
  }
};

window.addEventListener('load', () => {
  displayMovies();
});
