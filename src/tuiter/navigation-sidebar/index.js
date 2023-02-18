import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a className="list-group-item">
          <i className="bi bi-twitter"></i>
        </a>
        <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
          <i className="bi bi-house-fill"></i>
          <span className="d-none d-xl-inline ps-1">Home</span>
        </a>
        <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
          <i className="bi bi-hash"></i>
          <span className="d-none d-xl-inline ps-1">Explore</span>
        </a>
        <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
          <i className="bi bi-bell-fill"></i>
          <span className="d-none d-xl-inline ps-1">Notifications</span>
        </a>
        <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
          <i className="bi bi-envelope-fill"></i>
          <span className="d-none d-xl-inline ps-1">Messages</span>
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
          <i className="bi bi-bookmark-fill"></i>
          <span className="d-none d-xl-inline ps-1">Bookmarks</span>
        </a>
        <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
          <i className="bi bi-list-task"></i>
          <span className="d-none d-xl-inline ps-1">Lists</span>
        </a>
        <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
          <i className="bi bi-person-fill"></i>
          <span className="d-none d-xl-inline ps-1">Profile</span>
        </a>
        <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
          <i className="bi bi-three-dots"></i>
          <span className="d-none d-xl-inline ps-1">More</span>
        </a>
        <button type="button"
                className="mt-1 btn btn-primary rounded-pill">Tuit
        </button>
      </div>
  );
};
export default NavigationSidebar;