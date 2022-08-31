import likeIcon from '../assets/heart-icon.svg';

const experiment = () => {
  const li = document.createElement('li');
  li.classList.add('expe');
  li.innerHTML = ` <img class="expe-image" src="${likeIcon}" alt="like">`;
  return li;
};

export default experiment;
