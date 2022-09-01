import likeIcon from '../assets/heart-icon.svg';

const generateSingleShow = (imageUrl, name, id) => {
  const li = document.createElement('li');
  li.classList.add('show');
  li.id = id;
  li.innerHTML = `
        <img class="show-image" src="${imageUrl}" alt="${name}" />
        <div class="title-like">
            <h3 class="movie-title">${name}</h3>
            <img class="like-icon" src="${likeIcon}" alt="like" />
        </div>
       <p class="like-text"><span id="span${id}" class="num-likes">0</span> like(s)</p>
        <button class="comment-btn" id="comm${id}" >Comments</button>
    `;

  return li;
};

export default generateSingleShow;
