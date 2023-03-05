const PostSummaryItem = (post) => {

  let topicElem = "";
  if ("topic" in post && post.topic !== "") {
    topicElem = `<p class="m-0 text-muted">${post.topic}</p>`;
  }

  let usernameElem = "";
  if ("userName" in post && post.userName !== "") {
    usernameElem = `<span class="fw-bold">${post.userName}</span>`;
  }

  let timeElem = "";
  if ("time" in post && post.time !== "") {
    timeElem = `<span class="text-muted"> - ${post.time}</span>`;
  }

  let usernameTimeElem = "";
  if (usernameElem !== "" || timeElem !== "") {
    usernameTimeElem = `<p class="m-0 fs-6">
          ${usernameElem}
          <i class="fa-solid fa-check-circle"></i>
          ${timeElem}
        </p>`;
  }

  let titleElem = "";
  if ("title" in post && post.title !== "") {
    titleElem = `<p class="m-0 fw-bold">${post.title}</p>`;
  }

  let tuitsElem = "";
  if ("tuits" in post && post.tuits !== "") {
    tuitsElem = `<p class="m-0 text-muted">${post.tuits} Tuits</p>`;
  }

  let imageElem = "";
  if ("image" in post && post.image !== "") {
    imageElem = `<img class="wd-explore-tuit-icon rounded float-end"
             src="${post.image}"/>`;
  }

  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-9">
          ${topicElem}
          ${usernameTimeElem}
          ${titleElem}
          ${tuitsElem}
        </div>
        <div class="col-3">
          ${imageElem}
        </div>
    </div>
  </li>
  `);
};

export default PostSummaryItem;