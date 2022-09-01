const getData = async () => {
  return Promise.resolve({
    id: 1,
    name: 'pilot',
    type: 'regular',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg',
  });
};

export default getData;
