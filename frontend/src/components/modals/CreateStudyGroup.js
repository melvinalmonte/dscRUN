import React from "react";
import PropTypes from "prop-types";

const CreateStudyGroup = props => {
  const {
    open,
    close,
    groupName,
    groupDescription,
    meetUpTime,
    meetUpLocation,
    groupNameHandler,
    groupDescriptionHandler,
    meetUpTimeHandler,
    meetUpLocationHanlder,
    submitHandler
  } = props;

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
          <div className="field">
            <div className="control">
              <p>Group Name:</p>
              <input
                className="input"
                type="text"
                value={groupName}
                onChange={groupNameHandler}
              />
              <p>Group Description: </p>
              <textarea
                className="textarea"
                value={groupDescription}
                onChange={groupDescriptionHandler}
              />
              <p>Meetup Time:</p>
              <input
                className="input"
                type="text"
                value={meetUpTime}
                onChange={meetUpTimeHandler}
              />
              <p>Meeting Location:</p>
              <input
                className="input"
                type="text"
                value={meetUpLocation}
                onChange={meetUpLocationHanlder}
              />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button btn-modal" onClick={submitHandler}>
            Save
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CreateStudyGroup;

CreateStudyGroup.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  groupName: PropTypes.string,
  groupNameHandler: PropTypes.func,
  groupDescription: PropTypes.string,
  groupDescriptionHandler: PropTypes.func,
  meetUpTime: PropTypes.string,
  meetUpTimeHandler: PropTypes.func,
  meetUpLocation: PropTypes.string,
  meetUpLocationHanlder: PropTypes.func,
  submitHandler: PropTypes.func
};
