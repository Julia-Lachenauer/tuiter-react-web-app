import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
          <div class="row">
            <div class="col-11 position-relative">
              <i class="fa-solid fa-search position-absolute wd-search-icon"></i>
              <input type="text" class="form-control ps-5 rounded-pill wd-search-bar"
                     placeholder="Search Tuiter">
            </div>
            <a class="col-1" href="explore-settings.html">
              <i class="fa-solid fa-2x pt-1 fa-gear wd-gear-icon position-relative"></i>
            </a>
          </div>

          <!-- Nav tabs -->
          <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
              <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="d-none d-md-block nav-item">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
          </ul>

          <!-- Card with Image and Explore Tuits -->
          <div class="mt-2 card rounded-0 rounded-bottom">
            <!-- Image with text -->
            <img class="card-img-top rounded-0" src="../../images/spacex.png" alt="SpaceX Rocket">
            <h2 class="card-title ms-2 position-absolute wd-card-title-over-image text-white fw-bold">
              SpaceX's Starship
            </h2>
            
            <!-- List of posts -->
           ${PostSummaryList()}
           </div>
    `);
};
export default ExploreComponent;
