import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <Link className="list-group-item">
          <i className="bi bi-twitter"></i>
        </Link>
        <Link className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} to="/tuiter">
          <i className="bi bi-house-fill"></i>
          <span className="d-none d-xl-inline ps-1">Home</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`} to="explore">
          <i className="bi bi-hash"></i>
          <span className="d-none d-xl-inline ps-1">Explore</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'labs' ? 'active' : ''}`} to="/">
          <i className="bi bi-asterisk"></i>
          <span className="d-none d-xl-inline ps-1">Labs</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
          <i className="bi bi-bell-fill"></i>
          <span className="d-none d-xl-inline ps-1">Notifications</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
          <i className="bi bi-envelope-fill"></i>
          <span className="d-none d-xl-inline ps-1">Messages</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
          <i className="bi bi-bookmark-fill"></i>
          <span className="d-none d-xl-inline ps-1">Bookmarks</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
          <i className="bi bi-list-task"></i>
          <span className="d-none d-xl-inline ps-1">Lists</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
          <i className="bi bi-person-fill"></i>
          <span className="d-none d-xl-inline ps-1">Profile</span>
        </Link>
        <Link className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
          <i className="bi bi-three-dots"></i>
          <span className="d-none d-xl-inline ps-1">More</span>
        </Link>
        <button type="button"
                className="mt-1 btn btn-primary rounded-pill">Tuit
        </button>
      </div>
  );
};
export default NavigationSidebar;