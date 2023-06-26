import { useDispatch, useSelector } from 'react-redux';
import Video from './Video';
import { useEffect } from 'react';
import { fetchVideos } from '../../features/videos/videosSlice';
import Message from '../UI/Message';

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { isLoading, videos, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search: searchText } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, searchText }));
  }, [dispatch, tags, searchText]);

  let content;
  isLoading && (content = <Message>Loading...</Message>);

  !isLoading && isError && (content = <Message>{error}</Message>);

  !isLoading &&
    !isError &&
    videos?.length === 0 &&
    (content = <Message>No Videos Found....</Message>);

  !isLoading &&
    !isError &&
    videos?.length > 0 &&
    (content = videos.map((video) => <Video key={video.id} video={video} />));
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
