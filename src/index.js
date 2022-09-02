import './styles/tvmaze.css';
import * as dialog from './module/comment';


document.querySelector(".all-comment").addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    dialog.showPopupDialog(id)
});



