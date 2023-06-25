import Player from '../components/Description/Player';
import VideoDescription from '../components/Description/VideoDescription';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import RelatedVideoList from '../components/RelatedVideo/RelatedVideoList';

const Video = () => {
  return (
    <>
      <Navbar />
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />

              <VideoDescription />
            </div>

            <RelatedVideoList />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Video;
