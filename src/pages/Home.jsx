import VideoGrid from '../components/Grid/VideoGrid';
import TagList from '../components/Tags/TagList';
import Pagination from '../components/UI/Pagination';

const Home = () => {
  return (
    <>
      <TagList />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
