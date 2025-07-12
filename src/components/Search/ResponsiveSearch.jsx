import SearchIcon from "../../assets/icons/search-2-line.svg";
import { useSearch } from "../../contexts/SearchContext";

const ResponsiveSearch = () => {
  const { inputRef, onClick, onSearch } = useSearch();

  return (
    <div className="container sm:py-0 py-2">
      <div className="flex sm:hidden border border-gray-300 rounded-md">
        <input
          onChange={(e) => onSearch(e)}
          ref={inputRef}
          type="search"
          className="h-7 w-40 flex-1 px-2 py-0.5 text-xs outline-0 focus:outline-0 rounded-l-md "
          placeholder="Search..."
        />

        <button
          onClick={(e) => onClick(e)}
          type="submit"
          className="h-7 w-7 shrink-0 flex justify-center items-center bg-blue-400 rounded-r-md"
        >
          <img src={SearchIcon} className="h-5" alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSearch;
