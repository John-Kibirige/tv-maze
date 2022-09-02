import './styles/tvmaze.css';
import showPopupDialog from './module/comment.js';
import addComment from "./module/addcomment.js";

const popup = document.querySelector(".popup-dialog");
const body = document.querySelector("body");

document.querySelector('.all-comment').addEventListener('click', (e) => {
  const { id } = e.target.dataset;
  showPopupDialog(id);
});

popup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("add-comment")) {
    const userName = document.querySelector("input").value;
    const message = document.querySelector("textarea").value;
    const emptyUser = document.querySelector(".empty-name");
    const emptyComment = document.querySelector(".empty-comment");
    if (userName === "" && message === "") {
      emptyComment.style.display = "block";
      emptyUser.style.display = "block";
    } else if (userName === "") {
      emptyUser.style.display = "block";
      emptyComment.style.display = "none";
    } else if (message === "") {
      emptyComment.style.display = "block";
      emptyUser.style.display = "none";
    } else {
      const { id } = e.target.dataset.id;
      addComment(id, userName, message);
      emptyComment.style.display = "none";
      emptyUser.style.display = "none";
      document.querySelector("input").value = "";
      document.querySelector("textarea").value = "";
    }
  }
});

popup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("close-btn")) {
    document.querySelector("main").style.display = "flex";
    document.querySelector(".popup-dialog").style.display = "none";
    body.style.backgroundColor = "#fff";
  }
});