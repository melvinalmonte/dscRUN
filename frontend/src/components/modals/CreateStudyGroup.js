import React from "react";
import PropTypes from "prop-types";

const CreateStudyGroup = props => {
  const { open, close } = props;

  if (!open) {
    return null;
  }
  return (
    <div className={"modal is-active"}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title modal-head-content">
            Create a Study Group
          </p>
          <button className="delete" aria-label="close" onClick={close} />
        </header>
        <section className="modal-card-body">
          <p>TODO: Add form create a study group.</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button btn-modal" onClick={close}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CreateStudyGroup;

CreateStudyGroup.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.bool
};
