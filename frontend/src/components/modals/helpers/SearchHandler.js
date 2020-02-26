import React from "react";
import { firebaseDB } from "../../../firebase/config";

const SearchHandler = () => {
  const [groupName, setGroupName] = React.useState("");
  const [searchData, setSearchData] = React.useState();

  const handleSearch = e => setGroupName(e.target.value);

  const handleSubmit = () => {
    // todo: input validation and on key press.
    firebaseDB.ref("/").on("value", snapshot => {
      const dbData = snapshot.val();
      const searchResult = dbData.filter(data => {
        return data.name === groupName;
      });
      setSearchData(searchResult);
    });
  };

  return {
    groupName,
    searchData,
    handleSearch,
    handleSubmit
  };
};

export default SearchHandler;
