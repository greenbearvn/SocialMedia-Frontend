 const UserStories = () => (
    <div className="user_story grid md:grid-cols-5 grid-cols-3 gap-2 lg:-mx-20 relative">
      <a href="#create-post" uk-toggle="target: body ; cls: story-active">
        <div className="single_story">
          <img src="assets/images/avatars/avatar-lg-1.jpg" alt="" />
          <div className="story-avatar">
            {" "}
            <img src="assets/images/avatars/avatar-6.jpg" alt="" />
          </div>
          <div className="story-content">
            {" "}
            <h4>Erica Jones </h4>{" "}
          </div>
        </div>
      </a>
      <a href="#" uk-toggle="target: body ; cls: story-active">
        <div className="single_story">
          <img src="assets/images/avatars/avatar-lg-2.jpg" alt="" />
          <div className="story-avatar">
            {" "}
            <img src="assets/images/avatars/avatar-2.jpg" alt="" />
          </div>
          <div className="story-content">
            {" "}
            <h4> Dennis Han</h4>{" "}
          </div>
        </div>
      </a>
      <a href="#" uk-toggle="target: body ; cls: story-active">
        <div className="single_story">
          <img src="assets/images/avatars/avatar-lg-3.jpg" alt="" />
          <div className="story-avatar">
            {" "}
            <img src="assets/images/avatars/avatar-3.jpg" alt="" />
          </div>
          <div className="story-content">
            {" "}
            <h4> Alex Mohani</h4>{" "}
          </div>
        </div>
      </a>
      <a href="#" uk-toggle="target: body ; cls: story-active">
        <div className="single_story">
          <img src="assets/images/avatars/avatar-lg-4.jpg" alt="" />
          <div className="story-avatar">
            {" "}
            <img src="assets/images/avatars/avatar-4.jpg" alt="" />
          </div>
          <div className="story-content">
            {" "}
            <h4> Jonathan </h4>{" "}
          </div>
        </div>
      </a>
      <a href="#" uk-toggle="target: body ; cls: story-active">
        <div className="single_story">
          <img src="assets/images/avatars/avatar-lg-5.jpg" alt="" />
          <div className="story-avatar">
            {" "}
            <img src="assets/images/avatars/avatar-5.jpg" alt="" />
          </div>
          <div className="story-content">
            {" "}
            <h4> Stella Johnson</h4>{" "}
          </div>
        </div>
      </a>
      <span
        className="absolute bg-white lg:flex items-center justify-center p-2 rounded-full 
                        shadow-md text-xl w-9 z-10 uk-position-center-right -mr-4 hidden"
        uk-toggle="target: body ; cls: story-active"
      >
        <i className="icon-feather-chevron-right" />
      </span>
    </div>
  )
  export default UserStories;