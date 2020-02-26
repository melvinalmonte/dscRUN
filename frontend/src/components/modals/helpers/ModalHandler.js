import React from "react";

const ModalHandler = () => {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const showCreate = () =>
    openCreate ? setOpenCreate(false) : setOpenCreate(true);
  const showSearch = () =>
    openSearch ? setOpenSearch(false) : setOpenSearch(true);

  return {
    openCreate,
    openSearch,
    showCreate,
    showSearch
  };
};

export default ModalHandler;
