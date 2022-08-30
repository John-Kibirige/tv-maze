import './styles/tvmaze.css';
import * as dialog from './module/comment';


const addComment = document.querySelector(".add-comment");
document.querySelector(".all-comment").addEventListener('click', (e) => {
    const id = e.target.dataset.id;
dialog.showPopupDialog(0)
});

addComment.addEventListener('click', () => {
    alert('add comment');
})

