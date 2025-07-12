import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const clickHandler = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
  };

  //   SearchQuery State
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = (e) => {
    if (location.pathname !== "/") navigate("/");
    setSearchQuery(e.target.value);
  };

  return (
    <SearchContext
      value={{
        isSearch,
        navigate,
        onClick: clickHandler,
        searchQuery,
        onSearch: searchHandler,
      }}
    >
      {children}
    </SearchContext>
  );
};

export const useSearch = () => useContext(SearchContext);
