import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentPage } from '../../features/filter/filterSlice';
const PageItem = ({ page }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter);
  const isCurrentPage = currentPage === page;
  const style = isCurrentPage
    ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-not-allowed'
    : 'bg-blue-200 text-black px-4 py-1 rounded-full cursor-pointer';
  const handlePageChange = () => {
    !isCurrentPage && dispatch(setCurrentPage(page));
  };
  return (
    <div className={style} onClick={handlePageChange}>
      {page}
    </div>
  );
};

PageItem.propTypes = {
  page: PropTypes.number.isRequired,
};

export default PageItem;
