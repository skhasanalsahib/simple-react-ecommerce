import SearchIcon from "../../assets/icons/search-2-line.svg";
import SearchIconBlack from "../../assets/icons/search-2-line-black.svg";
import { useSearch } from "../../contexts/SearchContext";
import { useEffect, useRef } from "react";

const Search = () => {
  const { isSearch, onClick, onSearch } = useSearch();

  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearch) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  return (
    <div
      className={`hidden sm:flex ${
        isSearch ? "border border-gray-300" : "border-0"
      } rounded-md order-3 sm:order-1`}
    >
      <input
        onChange={(e) => onSearch(e)}
        ref={inputRef}
        type="search"
        className={`h-7 ${
          !isSearch
            ? "w-0"
            : "w-40 sm:w-60 md:w-80 px-2 py-.5 text-xs outline-0 focus:outline-0"
        }  rounded-l-md transition-all duration-300 ease-in-out`}
        placeholder="Search..."
      />
      {isSearch ? (
        <>
          <button
            onClick={(e) => onClick(e)}
            type="submit"
            className="h-7 w-7 shrink-0 flex justify-center items-center bg-blue-400 rounded-r-md"
          >
            <img src={SearchIcon} className="h-5" alt="search icon" />
          </button>
        </>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
            inputRef.current.focus();
          }}
          className="h-7 w-7 shrink-0 flex justify-center items-center"
        >
          <img src={SearchIconBlack} className="h-6" alt="search icon" />
        </button>
      )}
    </div>
  );
};

export default Search;
