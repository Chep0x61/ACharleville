const Header = () => {
    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">ACharleville</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Mes Projets</a></li>
              <li><a>A Propos de moi</a></li>
              <li><a>Me contacter</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Insta</a>
            <a className="btn">LinkedIn</a>
            <a className="btn">Mail</a>
          </div>
        </div>
    );
}

export default Header;