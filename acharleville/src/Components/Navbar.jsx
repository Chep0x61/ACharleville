const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">ACharleville</a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal">
              <li><a>A Propos de moi</a></li>
              <li><a>Mes Projets</a></li>
              <li><a>Me contacter</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn btn-circle" href="https://www.instagram.com/pellarinalizee" target="_blank" rel="noreferrer">
              <img className="h-8 w-8" src="/images/instagram.png"></img>
            </a>
            <a className="btn btn-circle" href="https://www.linkedin.com/in/alizée-charleville-4a1227185" target="_blank" rel="noreferrer">
              <img className="h-8 w-8" src="/images/linkedin.png"></img>
            </a>
            <a className="btn btn-circle" href="mailto:ac.charleville@gmail.com" target="_blank" rel="noreferrer">
              <img className="h-8 w-8" src="/images/mail.png"></img>
            </a>
          </div>
        </div>
    );
}

export default Navbar;