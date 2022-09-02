const postLike = async (data) => data && Promise.resolve('Created');

const getLikes = async () => Promise.resolve([
  {
    likes: 5,
    item_id: '1',
  },
]);

const addLike = (id) => {
  const data = {
    item_id: `${id}`,
  };
  postLike(data);
};

export { getLikes, addLike, postLike };
