 const CreatePost = () => (
    <div className="card lg:mx-0 p-4" uk-toggle="target: #create-post-modal">
      <div className="flex space-x-3">
        <img
          src="assets/images/avatars/avatar-2.jpg"
          className="w-10 h-10 rounded-full"
        />
        <input
          placeholder="What's Your Mind ? Hamse!"
          className="bg-gray-100 hover:bg-gray-200 flex-1 h-10 px-6 rounded-full"
        />
      </div>
      <div className="grid grid-flow-col pt-3 -mx-1 -mb-1 font-semibold text-sm">
        <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
          <svg
            className="bg-blue-100 h-9 mr-2 p-1.5 rounded-full text-blue-600 w-9 -my-0.5 hidden lg:block"
            data-tippy-placement="top"
            title="Tooltip"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Photo/Video
        </div>
        <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
          <svg
            className="bg-green-100 h-9 mr-2 p-1.5 rounded-full text-green-600 w-9 -my-0.5 hidden lg:block"
            uk-tooltip="title: Messages ; pos: bottom ;offset:7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            title=""
            aria-expanded="false"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          Tag Friend
        </div>
        <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
          <svg
            className="bg-red-100 h-9 mr-2 p-1.5 rounded-full text-red-600 w-9 -my-0.5 hidden lg:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Fealing /Activity
        </div>
      </div>
    </div>
  )
  export default CreatePost;