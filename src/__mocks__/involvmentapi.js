const postLike = async (data) => {
  if (data) {
    return Promise.resolve('Created');
  }
};

const getLikes = async () => {
  return Promise.resolve([
    {
      likes: 5,
      item_id: '1',
    },
  ]);
};

const addLike = (id) => {
  const data = {
    item_id: `${id}`,
  };
  postLike(data);
};

export { getLikes, addLike, postLike };
