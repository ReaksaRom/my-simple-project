//top header
export const header = [
  `
    <div class="container d-flex justify-content-between">
          <div class="logo" id=logo"" style="width: 100px; height: auto">
            <img src="/image/netflix.png" alt="" class="w-100 h-100" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class=" offcanvas offcanvas-end text-bg-dark "
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="  offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 mt-3  " id="ul">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movie
                  </a>
                  
                  <ul class="dropdown-menu dropdown-menu-dark animate__bounceIn ">
                   <li><a class="dropdown-item" href="#drama">Drama Movie</a> </li>
                   <li><a class="dropdown-item" href="#action">Action Movie</a></li>
                    <li><a class="dropdown-item" href="#comedy">Comedy Movie</a></li>
                    <li><a class="dropdown-item" href="#horro">Horro Movie</a></li>
                    <li><a class="dropdown-item" href="#crime">Crime Movie</a></li>
                   <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
    `,
];
