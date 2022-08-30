//https://api.tvmaze.com/seasons/1/episodes
const btnClose = document.querySelector(".close-btn");
const addComment = document.querySelector(".add-comment");
const main = document.querySelector("main");
const popup = document.querySelector(".popup-dialog");
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

const showPopupDialog = (id) => {
//   document.querySelector(".all-comment").addEventListener("click", () => {
      main.style.display = "none";
      popup.style.display = 'block';
      

      popup.innerHTML = `
        <div class="popup-top">
            <img src="https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg" alt="">
            <svg class="close-btn" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="54px" height="54px">
                <path
                    d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z" />
            </svg>
        </div>
            <h2 class="title">Paliot</h2>
        <ul class="detail">
            <li>Type: Regular</li>
            <li>Air Date: 2013-06-24</li>
            <li>Airtime: 22:00</li>
            <li>Rating: 7.7</li>
        </ul>
        <h2 class="comment-count title">Comment (0)</h2>
        <p class="comment-list">I love it.</p>
        <p class="comment-list">Great work.</p>
        <p class="comment-list">amazing</p>
        <h2 class="title">Add Comment</h2>

        <form action="#" class="form">
            <input type="text" name="name" placeholder="Your name" class="your-name" id="your-name">
            <textarea name="message" class="message" placeholder="Your Insight" id="message" cols="30" rows="10">dsd</textarea>
            <button type="submit" class="add-comment">Comment</button>
        </form>`;
      
    
//   });
};

popup.addEventListener("click", (e) => {
    if (e.target.classList.contains('add-comment')) {
      alert('meshu')
  }
});

popup.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("close-btn")) {
      document.querySelector("main").style.display = "flex";
      document.querySelector(".popup-dialog").style.display = "none";
    }
});

module.exports = { tv, showPopupDialog };
