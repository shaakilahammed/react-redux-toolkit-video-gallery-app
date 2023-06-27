import axios from '../../utils/axios';

const getVideos = async (tags, searchText, page) => {
  const limit = 5;
  let queryString = '';
  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
  }
  if (searchText !== '') {
    queryString += `&q=${searchText}`;
  }
  const totalPages = Math.ceil(
    (await axios.get(`/videos?${queryString}`)).data.length / limit
  );
  if (page) {
    queryString += `&_page=${page}&_limit=${limit}`;
  }

  const response = await axios.get(`/videos?${queryString}`);
  return { videos: response.data, totalPages };
};

export default getVideos;
