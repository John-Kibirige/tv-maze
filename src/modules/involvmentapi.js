const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UPEvCwsPcVAVY9nzsrMT/likes/';

const postLike = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const getLikes = async () => {
  let response = await fetch(url);
  response = await response.json();
  return response;
};

const addLike = (id) => {
  const data = {
    item_id: `${id}`,
  };
  postLike(data);
};

export { getLikes, addLike, postLike };
