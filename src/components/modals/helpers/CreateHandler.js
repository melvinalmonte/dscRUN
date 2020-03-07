import React, { useEffect, useState } from "react";
import { groups } from "../../../models/groups";
import { db } from "../../../firebase/config";

const CreateHandler = () => {
  const [show, setShow] = React.useState(false);
  const [createGroupErr, setCreateGroupErr] = useState(false);
  const [group, setGroup] = React.useState({});
  const [groupName, setGroupName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [meetTime, setMeetTime] = React.useState("");
  const [meetLocation, setMeetLocation] = React.useState("");

  const handleGroupName = e => setGroupName(e.target.value);
  const handleGroupDesc = e => setDescription(e.target.value);
  const handleMeetTime = e => setMeetTime(e.target.value);
  const handleMeetLocation = e => setMeetLocation(e.target.value);
  const handleModal = () => (show ? setShow(false) : setShow(true));

  useEffect(() => {
    if (Object.entries(group).length === 0 && group.constructor === Object) {
      return console.log("empty request");
    } else {
      writeGroup();
    }
  }, [group]);

  const writeGroup = () => {
    db.collection("groups").add(group);
  };

  const handleSubmit = () => {
    // todo: Serious input validation. handle keypress and look into adding a proper time to meeting.
    // todo: add error handling if user leaves fields empty, find a way to display group name without being concerned with letter casing.
    // todo: find a way to handle duplicate entry to db. Maybe use group name as unique name?...idk perhaps.
    let createGroup = groups;
    if (
      groupName !== "" &&
      description !== "" &&
      meetTime !== "" &&
      meetLocation !== ""
    ) {
      createGroup = {
        name: groupName.toLowerCase(),
        description: description,
        time: meetTime,
        location: meetLocation
      };
      setGroup(createGroup);
      setShow(false);
    } else {
      setCreateGroupErr(true);
    }
  };

  const handleKeyPress = e => {
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      handleSubmit();
    }
  };

  return {
    show,
    createGroupErr,
    group,
    groupName,
    description,
    meetTime,
    meetLocation,
    handleGroupName,
    handleGroupDesc,
    handleMeetTime,
    handleMeetLocation,
    handleSubmit,
    handleKeyPress,
    handleModal
  };
};

export default CreateHandler;
