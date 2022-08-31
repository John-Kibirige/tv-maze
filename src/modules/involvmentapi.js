const postLike = async (data) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UPEvCwsPcVAVY9nzsrMT/likes/',
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
};

const getLikes = async () => {
  let response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UPEvCwsPcVAVY9nzsrMT/likes/'
  );
  response = await response.json();
  return response;
};

export { postLike, getLikes };
