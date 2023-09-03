import UserTable from "./UserTable";
import { useState, useEffect } from "react";
import LayoutBackend from "../Layout/LayoutBackend";

const UserIndex = () => {
  return (
    <>
      <LayoutBackend>
        <UserTable />
      </LayoutBackend>
    </>
  );
};
export default UserIndex;
