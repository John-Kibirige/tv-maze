//https://api.tvmaze.com/seasons/1/episodes

const main = document.querySelector("main");
const popup = document.querySelector(".popup-dialog");
const formContainer = document.createElement("form");
formContainer.className = "form";

const commenuURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wlzRuqIYJW5Ad0SE0h4v/comments";
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

const showPopupDialog = async (id) => {
  const newMovies = tv[0];
  const allComment = (await getComment(newMovies["id"])) ?? [];
  const commentCounter = document.createElement("h2");
  main.style.display = "none";
  popup.style.display = "block";

  popup.innerHTML = `
        <div class="popup-top">
            <img src="${newMovies["image"]["medium"]}" alt="image">
                <svg class="close-btn" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="54px" height="54px">
                    <path
                        d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z" />
                </svg>
        </div>
            <h2 class="title"> ${newMovies["name"]}</h2>
        <ul class="detail">
            <li>Type: ${newMovies["type"]}</li>
            <li>Air Date:  ${newMovies["airdate"]}</li>
            <li>Airtime: ${newMovies["airtime"]}</li>
            <li>Rating: ${newMovies["rating"]["average"]}</li>
        </ul>`;

  commentCounter.className = "comment-count title";
  commentCounter.innerHTML = `Comment (${allComment.length})`;
  popup.appendChild(commentCounter);

  allComment.forEach((movie) => {
    const para = document.createElement("p");
    para.className = "comment-list";
    para.innerHTML = `${movie["username"]} : ${movie["comment"]}`;
    popup.appendChild(para);
  });

  formContainer.innerHTML = `
            <h2 class="title">Add Comment</h2>
          <label>  <input type="text" name="name" required placeholder="Your name" class="your-name" id="your-name"> <span class='empty-name'> * Required</spa> </label>
         <label>   <textarea name="message" class="message" required placeholder="Your Insight" id="message" cols="30" rows="10"></textarea> <span class='empty-comment'> * Required</spa></label>
          <button type="submit" data-id='${newMovies["id"]}' class="add-comment">Comment</button>
       `;

  popup.appendChild(formContainer);
};

const isValid = (username, comment) => {};

popup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("add-comment")) {
    const userName = document.querySelector("input").value;
    const message = document.querySelector("textarea").value;
    const emptyUser = document.querySelector(".empty-name");
    const emptyComment = document.querySelector(".empty-comment");
    const id = e.target.dataset.id;
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
      addComment(id, userName, message);
      formContainer.clear();
      emptyComment.style.display = "none";
      emptyUser.style.display = "none";
    }
  }
});

popup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("close-btn")) {
    document.querySelector("main").style.display = "flex";
    document.querySelector(".popup-dialog").style.display = "none";
  }
});

const addComment = async (movieID, userName, message) => {
  try {
    await fetch(commenuURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: movieID,
        username: userName,
        comment: message,
      }),
    });
  } catch (error) {}
};

const getComment = async (id) => {
  const result = await fetch(commenuURL + `?item_id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await result.json();
};

module.exports = { tv, showPopupDialog };
