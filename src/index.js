import './styles/tvmaze.css';
import logo from './assets/tv-maze-logo.svg';
import getData from './modules/data.js';
import generateSingleShow from './modules/show.js';

import { getLikes, addLike } from './modules/involvmentapi.js';
import showPopupDialog from './module/comment.js';
import addComment from './module/addcomment.js';
import Display from './module/display.js';

const popup = document.querySelector('.popup-dialog');
const body = document.querySelector('body');
const showItems = document.querySelector('.show-items');
const tvMazeLogo = document.querySelector('.logo');
const showCount = document.querySelector('.show-count');

tvMazeLogo.src = logo;

const renderLikes = async (listItem) => {
  const response = await getLikes();
  response.forEach((e) => {
    if (e.item_id === `${listItem.id}`) {
      listItem.querySelector('.num-likes').innerText = e.likes;
    }
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
        const id = e.target.dataset;
        showPopupDialog(id.id);
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

popup.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('add-comment')) {
    const userName = document.querySelector('input').value;
    const message = document.querySelector('textarea').value;
    const emptyUser = document.querySelector('.empty-name');
    const emptyComment = document.querySelector('.empty-comment');
    const { id } = e.target.dataset;
    if (userName === '' && message === '') {
      Display.blockComment(emptyComment);
      Display.blockUser(emptyUser);
    } else if (userName === '') {
      Display.blockUser(emptyUser);
      Display.noneComment(emptyComment);
    } else if (message === '') {
      Display.blockComment(emptyComment);
      Display.noneUser(emptyUser);
    } else {
      addComment(id, userName, message);
      Display.noneUser(emptyUser);
      Display.noneComment(emptyComment);
      document.querySelector('input').value = '';
      document.querySelector('textarea').value = '';
    }
  }
});

popup.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('close-btn')) {
    document.querySelector('main').style.display = 'flex';
    document.querySelector('.popup-dialog').style.display = 'none';
  }
});
