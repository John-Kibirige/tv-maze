// https://api.tvmaze.com/seasons/1/episodes
import close from "../../images/close.png";
import getComment from "./getComment.js";
import counter from "./commentcounter.js";
import createFormContainer from "./commentform.js";

const main = document.querySelector("main");
const popup = document.querySelector(".popup-dialog");
const formContainer = document.createElement("form");
const body = document.querySelector("body");
const commentContainer = document.createElement("div");
commentContainer.className = "comment-container";

formContainer.className = "form";

const tv = [
  {
    id: 1,
    url: "https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
    name: "Pilot",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2013-06-24",
    airtime: "22:00",
    airstamp: "2013-06-25T02:00:00+00:00",
    runtime: 60,
    rating: {
      average: 7.7,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
    },
    summary:
      "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/1",
      },
    },
  },
];

const showPopupDialog = async () => {
  const commentCounter = document.createElement("h2");
  const newMovies = tv[0];
  const comments = await getComment(newMovies.id);
  const totalComment = await counter(newMovies.id);
  body.style.backgroundColor = "#2f2f2f";
  main.style.display = "none";
  popup.style.display = "block";
  popup.innerHTML = `
        <div class="popup-top">
            <img src="${newMovies.image.medium}" class='popup-image' alt="image">
             <img src="${close}" class='close-btn' alt="image">
        </div>
            <h2 class="title"> ${newMovies.name}</h2>
        <ul class="detail">
            <li>Type: ${newMovies.type}</li>
            <li>Air Date:  ${newMovies.airdate}</li>
            <li>Airtime: ${newMovies.airtime}</li>
            <li>Rating: ${newMovies.rating.average}</li>
        </ul>`;

  commentCounter.className = "title";
  commentCounter.innerHTML = `Comment (<span class='comment-count'>${totalComment}</span>)`;
  popup.appendChild(commentCounter);

  comments.forEach((movie) => {
    const para = document.createElement("p");
    para.className = "comment-list";
    para.innerHTML = `${movie.creation_date}  ${movie.username} : ${movie.comment}`;
    commentContainer.appendChild(para);
  });
  popup.appendChild(commentContainer);
  createFormContainer(newMovies.id);
};

export default showPopupDialog;
