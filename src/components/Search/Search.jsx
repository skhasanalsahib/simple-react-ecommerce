import { useRef, useState } from "react";
import SearchIcon from "../../assets/icons/search-2-line.svg";
import SearchIconBlack from "../../assets/icons/search-2-line-black.svg";
import { useLocation, useNavigate } from "react-router";

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);

  const inputRef = useRef(null);

  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
    !isSearch && inputRef.current.focus();
  };

  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    } else if (location.pathname == "/") {
      navigate("/");
    }
  };

  return (
    <form className="flex border border-gray-300 rounded-md order-3 sm:order-1">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
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
            type="submit"
            onClick={(e) => searchTermHandler(e)}
            className="h-7 w-7 shrink-0 flex justify-center items-center bg-blue-400 rounded-r-md"
          >
            <img src={SearchIcon} className="h-5" alt="search icon" />
          </button>
        </>
      ) : (
        <button
          onClick={(e) => searchHandler(e)}
          className="h-7 w-7 shrink-0 flex justify-center items-center"
        >
          <img src={SearchIconBlack} className="h-6" alt="search icon" />
        </button>
      )}
    </form>
  );
};

export default Search;
