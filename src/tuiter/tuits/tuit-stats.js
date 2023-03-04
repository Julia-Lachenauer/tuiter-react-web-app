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
            <i className="bi bi-chat ps-1 pe-1"></i>
            <span>{tuit.replies}</span>
          </div>
          <div className="col-3">
            <i className="bi bi-repeat ps-1 pe-1"></i>
            <span>{tuit.retuits}</span>
          </div>
          <div className="col-3">
            <i onClick={() => likeTuitHandler(tuit)}
               className={`${tuitLikesClass} ps-1 pe-1`}></i>
            <span>{tuit.likes}</span>
          </div>
          <div className="col-3">
            <i className="bi bi-share ps-1 pe-1"></i>
          </div>
        </div>
      </div>
  );
};

export default TuitStats;