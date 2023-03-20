import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const tuitLikesClass = tuit.liked ? "bi-heart-fill wd-liked-icon"
      : "bi-heart";

  const toggleTuitLiked = () => {
    if (tuit.liked) {
      return {...tuit, likes: tuit.likes - 1, liked: false};
    } else {
      return {...tuit, likes: tuit.likes + 1, liked: true};
    }
  };

  const dispatch = useDispatch();

  return (<div>
    <div className="row">
      <div className="col-3">
        <a className="wd-tuit-stats-link">
          <i className="bi bi-chat ps-1 pe-1"></i>
          <span>{tuit.replies}</span>
        </a>
      </div>
      <div className="col-3">
        <a className="wd-tuit-stats-link">
          <i className="bi bi-repeat ps-1 pe-1"></i>
          <span>{tuit.retuits}</span>
        </a>
      </div>
      <div className="col-3">
        <a onClick={() => dispatch(updateTuitThunk(toggleTuitLiked()))}
           className="wd-tuit-stats-link">
          <i className={`${tuitLikesClass} ps-1 pe-1`}></i>
          <span>{tuit.likes}</span>
        </a>
      </div>
      <div className="col-3">
        <a className="wd-tuit-stats-link">
          <i className="bi bi-share ps-1 pe-1"></i>
        </a>
      </div>
    </div>
  </div>);
};

export default TuitStats;