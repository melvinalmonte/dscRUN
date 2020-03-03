import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Sections from "../components/sections";
import { CreateStudyGroup, SearchStudyGroup } from "../components/modals";
import { CreateHandler, SearchHandler } from "../components/modals/helpers";
import { Auth } from "../utils/Auth";

export const Groups = () => {
  const { auth } = Auth();
  const {
    show,
    createGroupErr,
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
  } = CreateHandler();
  const {
    showSearch,
    searchTerm,
    searchData,
    handleSearch,
    handleSubmitSearch,
    handleSearchModal,
    handleKeyPressSearch
  } = SearchHandler();
  return (
    <Layout login={auth}>
      <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Study Groups</h1>
          </div>
        </div>
      </section>
      <Sections
        description="Get the opportunity to create your own study group and others
                can join as well!"
        btnTitle="Create a Study Group"
        btnAction={handleModal}
      />
      <CreateStudyGroup
        open={show}
        close={handleModal}
        groupName={groupName}
        groupDescription={description}
        meetUpTime={meetTime}
        meetUpLocation={meetLocation}
        groupNameHandler={handleGroupName}
        groupDescriptionHandler={handleGroupDesc}
        meetUpTimeHandler={handleMeetTime}
        meetUpLocationHandler={handleMeetLocation}
        submitHandler={handleSubmit}
        keyPressHandler={handleKeyPress}
        createErr={createGroupErr}
      />
      <Sections
        description="Discover study groups and join if you would like."
        btnTitle="Find Study Groups"
        btnAction={handleSearchModal}
      />
      <SearchStudyGroup
        open={showSearch}
        group={searchTerm}
        searchData={searchData}
        close={handleSearchModal}
        handleSearch={handleSearch}
        handleSubmit={handleSubmitSearch}
        keyPressHandler={handleKeyPressSearch}
      />
      <Footer />
    </Layout>
  );
};
