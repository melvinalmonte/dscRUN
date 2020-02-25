import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Sections from "../components/sections";
import { CreateStudyGroup, SearchStudyGroup } from "../components/modals";

import ModalHandler from "../components/modals/helpers";
import CreateHandler from "../components/modals/helpers/CreateHandler";

export const Groups = () => {
  const modal = ModalHandler();
  const createGroup = CreateHandler();
  return (
    <Layout>
      {console.log(createGroup.group)}
      <Sections
        title="Study Groups"
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
      <SearchStudyGroup open={modal.openSearch} close={modal.showSearch} />
      <Footer />
    </Layout>
  );
};
