import PropTypes from 'prop-types';
import RelatedVideoItem from './RelatedVideoItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Message from '../UI/Message';
const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  useEffect(() => {
    dispatch(fetchRelatedVideos({ videoId: currentVideoId, tags }));
  }, [dispatch, currentVideoId, tags]);

  let content = null;
  if (isLoading) content = <Message>Loading....</Message>;
  if (!isLoading && isError) content = <Message>{error}</Message>;
  if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <Message>No videos found....</Message>;
  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((item) => (
      <RelatedVideoItem key={item.id} video={item} />
    ));
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};
RelatedVideoList.propTypes = {
  currentVideoId: PropTypes.number,
  tags: PropTypes.array,
};

export default RelatedVideoList;
