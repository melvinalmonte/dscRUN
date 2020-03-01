import React from "react";
import { db } from "../../../firebase/config";

const SearchHandler = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);

  const handleSearchModal = () =>
    showSearch ? setShowSearch(false) : setShowSearch(true);
  const handleSearch = e => setSearchTerm(e.target.value);

  const handleSubmitSearch = () => {
    // todo: input validation and on key press.
    // todo: error handling to when database returns null.
    db.collection("groups")
      .where("name", "==", searchTerm)
      .get()
      .then(response => {
        response.forEach(doc => {
          setSearchData(state => [...state, doc.data()]);
        });
      });
  };

  const handleKeyPressSearch = e => {
    if (e.keyCode === 13) {
      handleSubmitSearch();
    }
  };

  return {
    showSearch,
    searchTerm,
    searchData,
    handleSearch,
    handleSubmitSearch,
    handleSearchModal,
    handleKeyPressSearch
  };
};

export default SearchHandler;
