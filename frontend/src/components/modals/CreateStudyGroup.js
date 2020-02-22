import React from "react";

const CreateStudyGroup = props => {
  if (!props.open) {
    return null;
  }
  return (
    <div className={"modal is-active"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title modal-head-content">
            Create a Study Group
          </p>
          <button className="delete" aria-label="close" onClick={props.close} />
        </header>
        <section className="modal-card-body">
          <p>TODO: Add form create a study group.</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button btn-modal" onClick={props.close}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CreateStudyGroup;
