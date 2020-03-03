import React from "react";
import PropTypes from "prop-types";

const CreateStudyGroup = props => {
  const {
    open,
    createErr,
    close,
    groupName,
    groupDescription,
    meetUpTime,
    meetUpLocation,
    groupNameHandler,
    groupDescriptionHandler,
    meetUpTimeHandler,
    meetUpLocationHandler,
    submitHandler,
    keyPressHandler
  } = props;
  return (
    <div className={open ? "modal is-active" : "modal"}>
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
                onChange={meetUpLocationHandler}
                onKeyDown={keyPressHandler}
              />
            </div>
            {createErr ? (
              <p className="has-text-danger">
                Invalid input, please fill all empty fields.
              </p>
            ) : null}
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
  createErr: PropTypes.bool,
  close: PropTypes.func,
  groupName: PropTypes.string,
  groupNameHandler: PropTypes.func,
  groupDescription: PropTypes.string,
  groupDescriptionHandler: PropTypes.func,
  meetUpTime: PropTypes.string,
  meetUpTimeHandler: PropTypes.func,
  meetUpLocation: PropTypes.string,
  meetUpLocationHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  keyPressHandler: PropTypes.func
};
