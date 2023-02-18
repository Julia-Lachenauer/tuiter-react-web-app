import React from "react";

const WhoToFollowListItem = (
    {
      who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {
  return (
      <a href="#" className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" height={48}
                 src={`/images/${who.avatarIcon}`}/>
          </div>
          <div className="col-8">
            <div className="fw-bold">
              <span>{who.userName}</span>
              <i className="bi bi-check-circle-fill ps-1 pe-1"></i>
            </div>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary rounded-pill float-end">Follow
            </button>
          </div>
        </div>
      </a>
  );
};
export default WhoToFollowListItem;