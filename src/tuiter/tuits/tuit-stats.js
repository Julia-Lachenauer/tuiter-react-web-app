import React from "react";
import {useDispatch} from "react-redux";
import {toggleTuitLiked} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
  const tuitLikesClass = tuit.liked ? "bi-heart-fill wd-liked-icon"
      : "bi-heart";

  const dispatch = useDispatch();

  const likeTuitHandler = (tuit) => {
    dispatch(toggleTuitLiked(tuit));
  };

  return (
      <div>
        <div className="row">
          <div className="col-3">
            <a href="#" className="wd-tuit-stats-link">
              <i className="bi bi-chat ps-1 pe-1"></i>
              <span>{tuit.replies}</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" className="wd-tuit-stats-link">
              <i className="bi bi-repeat ps-1 pe-1"></i>
              <span>{tuit.retuits}</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" onClick={() => likeTuitHandler(tuit)}
               className="wd-tuit-stats-link">
              <i className={`${tuitLikesClass} ps-1 pe-1`}></i>
              <span>{tuit.likes}</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" className="wd-tuit-stats-link">
              <i className="bi bi-share ps-1 pe-1"></i>
            </a>
          </div>
        </div>
      </div>
  );
};

export default TuitStats;