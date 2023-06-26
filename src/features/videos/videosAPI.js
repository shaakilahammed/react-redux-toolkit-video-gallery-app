import axios from '../../utils/axios';

const getVideos = async (tags, searchText) => {
  let queryString = '';
  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
  }
  if (searchText !== '') {
    queryString += `&q=${searchText}`;
  }
  const response = await axios.get(`/videos?${queryString}`);
  return response.data;
};

export default getVideos;
