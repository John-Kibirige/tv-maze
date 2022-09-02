import './styles/tvmaze.css';
import showPopupDialog from './module/comment.js';

document.querySelector('.all-comment').addEventListener('click', (e) => {
  const { id } = e.target.dataset;
  showPopupDialog(id);
});
