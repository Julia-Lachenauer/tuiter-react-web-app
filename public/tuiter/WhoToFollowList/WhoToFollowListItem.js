const WhoToFollowListItem = (who) => {
  return(`
    <a href="#" class="list-group-item">
      <div class="row">
        <div class="col-2">
          <img class="rounded-circle float-start wd-explore-avatar" src="../../images/${who.avatarIcon}"/>
        </div>
        <div class="col-8">
          <span class="fw-bold">${who.userName}</span>
          <i class="fa-solid fa-check-circle"></i>
          <p class="m-0">@${who.handle}</p>
        </div>
        <div class="col-2">
          <button type="button" class="mt-1 btn btn-primary rounded-pill float-end">Follow
          </button>
        </div>
      </div>
    </a>
  `)
};

export default WhoToFollowListItem