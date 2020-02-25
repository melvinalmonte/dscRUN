import React, { useEffect } from "react";
import { groups } from "../../../models/groups";
import { firebaseDB } from "../../../firebase/config";

const CreateHandler = () => {
  const [group, setGroup] = React.useState([]);
  const [groupName, setGroupName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [meetTime, setMeetTime] = React.useState("");
  const [meetLocation, setMeetLocation] = React.useState("");

  const handleGroupName = e => setGroupName(e.target.value);
  const handleGroupDesc = e => setDescription(e.target.value);
  const handleMeetTime = e => setMeetTime(e.target.value);
  const handleMeetLocation = e => setMeetLocation(e.target.value);

  useEffect(() => {
    writeGroup();
  }, [group]);

  const writeGroup = () => {
    firebaseDB.ref("/").set(group);
    console.log("Group Saved");
  };

  const handleSubmit = () => {
    let createGroup = groups;
    createGroup = {
      name: groupName,
      description: description,
      time: meetTime,
      location: meetLocation
    };
    setGroup(state => [...state, createGroup]);
  };

  return {
    group,
    groupName,
    description,
    meetTime,
    meetLocation,
    handleGroupName,
    handleGroupDesc,
    handleMeetTime,
    handleMeetLocation,
    handleSubmit
  };
};

export default CreateHandler;