import axios from '../../utils/axios';

const getRelatedVideos = async ({ videoId, tags }) => {
  //   console.log(tags);
  // tags_like=react&tags_like=javascript&id_ne=1&_limit=1
  const limit = 5;
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join('&') +
        `&id_ne=${videoId}&_limit=${limit}`
      : `id_ne${videoId}&_limit=${limit}`;

  const response = await axios.get(`/videos?${queryString}`);
  return response.data;
};

export default getRelatedVideos;
