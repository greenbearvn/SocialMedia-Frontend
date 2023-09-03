
import { useState, useEffect } from "react";
import LayoutBackend from "../Layout/LayoutBackend";
import PostTable from "./PostTable";

const PostIndex = () => {
  return (
    <>
      <LayoutBackend>
        <PostTable />
      </LayoutBackend>
    </>
  );
};
export default PostIndex;
