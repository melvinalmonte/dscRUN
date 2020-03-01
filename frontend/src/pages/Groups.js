import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Sections from "../components/sections";
import { CreateStudyGroup, SearchStudyGroup } from "../components/modals";
import {
  ModalHandler,
  CreateHandler,
  SearchHandler
} from "../components/modals/helpers";
import { Auth } from "../utils/Auth";

export const Groups = () => {
  const { auth } = Auth();
  const modal = ModalHandler();
  const createGroup = CreateHandler();
  const searchGroup = SearchHandler();
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
        btnAction={modal.showCreate}
      />
      <CreateStudyGroup
        open={modal.openCreate}
        close={modal.showCreate}
        groupName={createGroup.groupName}
        groupDescription={createGroup.description}
        meetUpTime={createGroup.meetTime}
        meetUpLocation={createGroup.meetLocation}
        groupNameHandler={createGroup.handleGroupName}
        groupDescriptionHandler={createGroup.handleGroupDesc}
        meetUpTimeHandler={createGroup.handleMeetTime}
        meetUpLocationHanlder={createGroup.handleMeetLocation}
        submitHandler={createGroup.handleSubmit}
      />
      <Sections
        description="Discover study groups and join if you would like."
        btnTitle="Find Study Groups"
        btnAction={modal.showSearch}
      />
      <SearchStudyGroup
        open={modal.openSearch}
        close={modal.showSearch}
        group={searchGroup.groupName}
        handleSearch={searchGroup.handleSearch}
        handleSubmit={searchGroup.handleSubmit}
        searchData={searchGroup.searchData}
      />
      <Footer />
    </Layout>
  );
};
