import './styles/tvmaze.css';
import showPopupDialog from './module/comment.js';
import addComment from './module/addcomment.js';
import Display from './module/display.js';

const popup = document.querySelector('.popup-dialog');
const body = document.querySelector('body');

document.querySelector('.all-comment').addEventListener('click', (e) => {
  const { id } = e.target.dataset;
  showPopupDialog(id);
});

popup.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('add-comment')) {
    const userName = document.querySelector('input').value;
    const message = document.querySelector('textarea').value;
    const emptyUser = document.querySelector('.empty-name');
    const emptyComment = document.querySelector('.empty-comment');

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
      addComment(e.target.dataset.id, userName, message);
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
    body.style.backgroundColor = '#fff';
  }
});
