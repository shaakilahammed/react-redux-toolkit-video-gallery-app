import PropTypes from 'prop-types';
import LikeUnlike from './LikeUnlike';

const VideoDescription = ({ video }) => {
  const { title, date, likes, unlikes, description } = video;
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <LikeUnlike likes={likes} unlikes={unlikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

VideoDescription.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    unlikes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default VideoDescription;
