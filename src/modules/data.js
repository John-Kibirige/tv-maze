const getData = async () => {
  let response = await fetch('https://api.tvmaze.com/seasons/1/episodes');
  response = await response.json();
  return response;
};

export default getData;
