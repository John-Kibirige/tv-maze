import { postLike, getLikes } from './involvmentapi.js';

const addLike = (id) => {
  const data = {
    item_id: `item${id}`,
  };
  postLike(data);
};

const fetchLikes = (id) => {
  getLikes().then((response) => {
    response.forEach((e) => {
      if (e['item_id'] === `item${id}`) {
        return e['likes'];
      }
    });
  });
};

export { addLike, fetchLikes };
