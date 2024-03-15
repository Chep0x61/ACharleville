import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()
    return (
        <div className="navbar bg-flash">
          <div className="navbar-start">
            <div className="btn normal-case text-base bg-flash text-main hover:bg-flash border-none lg:text-2xl font-sawai">
            {t('catchphrase1')}<br className="lg:hidden"/>{t('catchphrase2')}
            </div>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-2 font-medium">
              <li><a className="btn normal-case text-lg bg-main rounded-md text-test hover:text-yellow" href="#about" onClick={() => document.getElementById('about')}>{t('aboutme')}</a></li>
              <li><a className="btn normal-case text-lg bg-main rounded-md text-test hover:text-yellow hover:bg-main" href="#projects" onClick={() => document.getElementById('projects')}>{t('myprojects')}</a></li>
              <li><a className="btn normal-case text-lg bg-main rounded-md text-test hover:text-yellow hover:bg-main" href="#contact" onClick={() => document.getElementById('contact')}>{t('contactme')}</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn btn-circle bg-main" href="https://www.instagram.com/pellarinalizee" target="_blank" rel="noreferrer">
              <img className="h-8 w-8" src="./images/socials/instagram.png" alt="instagram"></img>
            </a>
            <a className="btn btn-circle bg-main" href="https://www.linkedin.com/in/alizée-charleville-4a1227185" target="_blank" rel="noreferrer">
              <img className="h-8 w-8" src="./images/socials/linkedin.png" alt="linkedin"></img>
            </a>
            <a className="btn btn-circle bg-main" href="mailto:ac.charleville@gmail.com" target="_blank" rel="noreferrer">
              <img className="h-8 w-8" src="./images/socials/mail.png" alt="mail"></img>
            </a>
          </div>
        </div>
    );
}

export default Navbar;