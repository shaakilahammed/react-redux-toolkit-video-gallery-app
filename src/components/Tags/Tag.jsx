import PropTypes from 'prop-types';
const Tag = ({ tag = {} }) => {
  return (
    <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
      {tag.title}
    </div>

    // <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
    //   redux
    // </div>
  );
};

Tag.propTypes = {
  tag: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default Tag;
