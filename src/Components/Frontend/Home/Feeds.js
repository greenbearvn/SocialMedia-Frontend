import UserStories from "./UserStories";
import CreatePost from "./CreatePostModal";
import Post from "./Post";
import LoadMore from "./LoadMore";

const Feeds = () => {
  return (
    <div className="lg:flex lg:space-x-10">
      <div className="lg:w-3/4 lg:px-20 space-y-7"> 
        <UserStories/>
        <CreatePost/>
        <Post/>
        <LoadMore/>
      </div>
    </div>
  );
};

export default Feeds;