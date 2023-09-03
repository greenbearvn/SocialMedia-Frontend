const Notifications = () => (
    <a href="#birthdays" uk-toggle="">
      <div className="bg-white mb-5 px-4 py-3 rounded-md shadow">
        <h3 className="text-line-through font-semibold mb-1"> Birthdays </h3>
        <div className="-mx-2 duration-300 flex hover:bg-gray-50 px-2 py-2 rounded-md">
          <img
            src="assets/images/icons/gift-icon.png"
            className="w-9 h-9 mr-3"
            alt=""
          />
          <p className="line-clamp-2 leading-6">
            {" "}
            <strong> Jessica Erica </strong> and <strong> two others </strong>
            have a birthdays to day .
          </p>
        </div>
      </div>
    </a>
  )
