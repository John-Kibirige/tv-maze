const postLike = async (data) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UPEvCwsPcVAVY9nzsrMT/likes/',
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  );

  return response;
};

const getLikes = async () => {
  let response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UPEvCwsPcVAVY9nzsrMT/likes/'
  );
  response = await response.json();
  return response;
};

export { postLike, getLikes };
