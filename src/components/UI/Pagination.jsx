import { useSelector } from 'react-redux';
import PageItem from './PageItem';
// import PageItem from './PageItem';

const Pagination = () => {
  const { totalPages } = useSelector((state) => state.videos);
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pages.map((page, index) => (
          <PageItem key={index} page={page} />
        ))}
      </div>
    </section>
  );
};

export default Pagination;
