import React from "react";
import "./index.css";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
      tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  return (<li className="list-group-item">
    <div className="row">
      <div className="col-2">
        <img width={48} className="float-end rounded-circle"
             src={`/images/${tuit.image}`}/>
      </div>
      <div className="col-10">
        <div>
          <span className="fw-bold">{tuit.userName}</span>
          <i className="bi bi-patch-check-fill ps-1 pe-1 wd-verified-icon"></i>
          <span>{tuit.handle}</span>
          <span> • {tuit.time}</span></div>
        <div>{tuit.tuit}</div>
        <TuitStats tuit={tuit}/>
      </div>
    </div>

  </li>);
};

export default TuitItem;