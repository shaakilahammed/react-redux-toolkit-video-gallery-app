import Footer from '../components/Footer';
import VideoGrid from '../components/Grid/VideoGrid';
import Navbar from '../components/Navbar/Navbar';
import TagList from '../components/Tags/TagList';
import Pagination from '../components/UI/Pagination';

const Home = () => {
  return (
    <>
      <Navbar />
      <TagList />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
