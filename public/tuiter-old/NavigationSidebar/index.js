const NavigationSidebar = () => {
  return(`
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="../home.html" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-home"></i>
        <span class="d-none d-xl-inline">Home</span>
      </a>
      <a href="index.html" class="list-group-item list-group-item-action active">
        <i class="fa-solid fa-hashtag"></i>
        <span class="d-none d-xl-inline">Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-bell"></i>
        <span class="d-none d-xl-inline">Notifications</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-envelope"></i>
        <span class="d-none d-xl-inline">Messages</span>
      </a>
      <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-bookmark"></i>
        <span class="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-list"></i>
        <span class="d-none d-xl-inline">Lists</span>
      </a>
      <a href="../profile.html" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-user"></i>
        <span class="d-none d-xl-inline">Profile</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-solid fa-ellipsis-h"></i>
        <span class="d-none d-xl-inline">More</span>
      </a>
      <button type="button" class="mt-1 btn btn-primary rounded-pill">Tuit</button>
    </div>
 `);
}

export default NavigationSidebar;