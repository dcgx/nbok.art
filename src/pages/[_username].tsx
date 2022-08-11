import React from "react";
import Tabs from "../components/Tabs/Tabs";
import UserGallery from "../components/UserGallery";
import UserInfo from "../components/UserInfo";

const UsernamePage = () => {
  return (
    <>
      <Tabs />
      <UserInfo />
      <UserGallery />
    </>
  );
};

export default UsernamePage;
