import './styles/tvmaze.css';
import logo from './assets/tv-maze-logo.svg';
import getData from './modules/data.js';
import generateSingleShow from './modules/show.js';
import { addLike, fetchLikes } from './modules/like.js';

const showItems = document.querySelector('.show-items');
const tvMazeLogo = document.querySelector('.logo');
const showCount = document.querySelector('.show-count');

tvMazeLogo.src = logo;

// fetch data and display it on the ui
const displayMovies = () => {
  getData()
    .then((responses) => {
      showCount.innerText = `${responses.length}`;
      responses.forEach((response) => {
        let {
          id,
          image: { original: imageUrl },
          name,
        } = response;

        const singleItem = generateSingleShow(imageUrl, name, id);
        showItems.appendChild(singleItem);
      });
    })
    .finally(() => {
      //   add listener to the like icon
      const likeIcons = document.querySelectorAll('.like-icon');
      likeIcons.forEach((icon) => {
        icon.addEventListener('click', (e) => {
          e.target.classList.add('active');
          console.log('this is quite interesting');
        });
      });
    });
};

window.addEventListener('load', () => {
  displayMovies();
});
