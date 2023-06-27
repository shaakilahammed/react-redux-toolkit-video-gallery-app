import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentPage,
  tagAdded,
  tagRemoved,
} from '../../features/filter/filterSlice';
const Tag = ({ tag = {} }) => {
  const dispatch = useDispatch();
  const { title } = tag;
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(title);
  const style = isSelected
    ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
    : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';
  const handleClick = () => {
    isSelected ? dispatch(tagRemoved(title)) : dispatch(tagAdded(title));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={style} onClick={handleClick}>
      {title}
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
