export const FriendStatus = () => (
    <>
      <h3 className="text-xl font-semibold"> Contacts </h3>
      <div className="" uk-sticky="offset:80">
        <nav className="responsive-nav border-b extanded mb-2 -mt-2">
          <ul uk-switcher="connect: #group-details; animation: uk-animation-fade">
            <li className="uk-active">
              <a className="active" href="#0">
                {" "}
                Friends <span> 310 </span>{" "}
              </a>
            </li>
            <li>
              <a href="#0">Groups</a>
            </li>
          </ul>
        </nav>
        <div className="contact-list">
          <a href="#">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-1.jpg" alt="" />
              <span className="user_status status_online" />
            </div>
            <div className="contact-username"> Dennis Han</div>
          </a>
          <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
            <div className="contact-list-box">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="user_status status_online" />
              </div>
              <div className="contact-username"> Dennis Han</div>
              <p>
                <ion-icon name="people" className="text-lg mr-1" /> Become friends
                with
                <strong> Stella Johnson </strong> and <strong> 14 Others</strong>
              </p>
              <div className="contact-list-box-btns">
                <button
                  type="button"
                  className="button primary flex-1 block mr-2"
                >
                  <i className="uil-envelope mr-1" /> Send message
                </button>
                <button
                  type="button"
                  href="#"
                  className="button secondary button-icon mr-2"
                >
                  <i className="uil-list-ul"> </i>{" "}
                </button>
                <button
                  type="button"
                  a=""
                  href="#"
                  className="button secondary button-icon"
                >
                  <i className="uil-ellipsis-h"> </i>
                </button>
              </div>
            </div>
          </div>
          <a href="#">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" />
              <span className="user_status" />
            </div>
            <div className="contact-username"> Erica Jones</div>
          </a>
          <div uk-drop="pos: left-center ;animation: uk-animation-slide-left-small">
            <div className="contact-list-box">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                <span className="user_status" />
              </div>
              <div className="contact-username"> Erica Jones </div>
              <p>
                <ion-icon name="people" className="text-lg mr-1" /> Become friends
                with
                <strong> Stella Johnson </strong> and <strong> 14 Others</strong>
              </p>
              <div className="contact-list-box-btns">
                <button
                  type="button"
                  className="button primary flex-1 block mr-2"
                >
                  <i className="uil-envelope mr-1" /> Send message
                </button>
                <button
                  type="button"
                  href="#"
                  className="button secondary button-icon mr-2"
                >
                  <i className="uil-list-ul"> </i>{" "}
                </button>
                <button
                  type="button"
                  a=""
                  href="#"
                  className="button secondary button-icon"
                >
                  <i className="uil-ellipsis-h"> </i>
                </button>
              </div>
            </div>
          </div>
          <a href="timeline.html">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-5.jpg" alt="" />
              <span className="user_status status_online" />
            </div>
            <div className="contact-username">Stella Johnson</div>
          </a>
          <a href="timeline.html">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-6.jpg" alt="" />
            </div>
            <div className="contact-username"> Alex Dolgove</div>
          </a>
          <a href="timeline.html">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-1.jpg" alt="" />
              <span className="user_status status_online" />
            </div>
            <div className="contact-username"> Dennis Han</div>
          </a>
          <a href="timeline.html">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" />
              <span className="user_status" />
            </div>
            <div className="contact-username"> Erica Jones</div>
          </a>
          <a href="timeline.html">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-7.jpg" alt="" />
            </div>
            <div className="contact-username">Stella Johnson</div>
          </a>
          <a href="timeline.html">
            <div className="contact-avatar">
              <img src="assets/images/avatars/avatar-4.jpg" alt="" />
            </div>
            <div className="contact-username"> Alex Dolgove</div>
          </a>
        </div>
      </div>
    </>
  )
  