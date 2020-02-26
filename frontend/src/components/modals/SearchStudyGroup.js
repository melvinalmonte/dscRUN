import React from "react";
import PropTypes from "prop-types";

const SearchStudyGroup = props => {
  const { open, close, handleSubmit, handleSearch, group, searchData } = props;

  if (!open) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title modal-head-content">
            Search for a Study Group.
          </p>
          <button className="delete" aria-label="close" onClick={close} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Study Group Name..."
                onChange={handleSearch}
                value={group}
              />
            </div>
          </div>
          <div className="column has-text-centered">
            <button className="button btn-modal" onClick={handleSubmit}>
              Search
            </button>
          </div>
          {searchData
            ? searchData.map((data, index) => {
                return (
                  <div className="card" key={index}>
                    <header className="card-header">
                      <p className="card-header-title">{data.name}</p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          <strong>Description:</strong>
                        </p>
                        <p>{data.description}</p>
                        <p>
                          <strong>Meeting Times:</strong>
                        </p>
                        <p>{data.time}</p>
                        <p>
                          <strong>Meeting Location:</strong>
                        </p>
                        <p>{data.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </section>
      </div>
    </div>
  );
};

export default SearchStudyGroup;

SearchStudyGroup.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  handleSearch: PropTypes.func,
  group: PropTypes.string,
  handleSubmit: PropTypes.func,
  searchData: PropTypes.array

};
