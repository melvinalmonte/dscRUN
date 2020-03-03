import React from "react";
import { db } from "../../../firebase/config";

const SearchHandler = () => {
  const [groupName, setGroupName] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);

  const handleSearch = e => setGroupName(e.target.value);

  const handleSubmit = () => {
    // todo: input validation and on key press.
    // todo: error handling to when database returns null.
    db.collection("groups")
      .where("name", "==", groupName)
      .get()
      .then(response => {
        response.forEach(doc => {
          setSearchData(state => [...state, doc.data()]);
        });
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
