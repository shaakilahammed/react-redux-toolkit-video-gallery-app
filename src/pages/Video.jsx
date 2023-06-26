import { useDispatch, useSelector } from 'react-redux';
import Player from '../components/Description/Player';
import VideoDescription from '../components/Description/VideoDescription';
import RelatedVideoList from '../components/RelatedVideo/RelatedVideoList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchVideo } from '../features/video/videoSlice';
import Message from '../components/UI/Message';

const Video = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const { link, title, id, tags } = video;
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <Message>Loading....</Message>;
  if (!isLoading && isError) content = <Message>{error}</Message>;
  if (!isLoading && !isError && !video?.id)
    content = <Message>No videos found....</Message>;
  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />

          <VideoDescription video={video} />
        </div>

        <RelatedVideoList currentVideoId={id} tags={tags} />
      </div>
    );
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
