import React from "react";

const SearchStudyGroup = props => {
  if (!props.open) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title modal-head-content">
            Search for a Study Group.
          </p>
          <button className="delete" aria-label="close" onClick={props.close} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Study Group Name..."
              />
            </div>
          </div>
          <div className="column has-text-centered">
            <button className="button btn-modal">Search</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchStudyGroup;
