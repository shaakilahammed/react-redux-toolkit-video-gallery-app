import searchImage from '../../assets/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { searched, setCurrentPage } from '../../features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';
const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const match = useMatch('/');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!match) {
      navigate('/');
    }
  };
  const handleOnChange = (e) => {
    dispatch(searched(e.target.value));
    dispatch(setCurrentPage(1));
  };
  // const [input, setInput] = useState('');
  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={submitHandler}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={search}
          onChange={handleOnChange}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
};

export default Search;
