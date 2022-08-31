import likeIcon from '../assets/heart-icon.svg';

const generateSingleShow = (imageUrl, name) => {
  const li = document.createElement('li');
  li.classList.add('show');
  li.innerHTML = `
        <img src="${imageUrl}" alt="${name}" />
        <div class="title-like">
            <h3 class="movie-title">${name}</h3>
            <img src="${likeIcon}" alt="like" />
        </div>
        <p class="like-text">${likes}likes</p>
        <button class="comment-btn">Comments</button>
    `;
  return li;
};

export default generateSingleShow;
