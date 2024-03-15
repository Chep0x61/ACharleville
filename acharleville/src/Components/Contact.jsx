import { useTranslation } from 'react-i18next'
import Footer from "./Footer";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact">
          <div className="h-36 lg:h-96 bg-[url('../public/images/decoration/wave.svg')] bg-cover"></div>
          <div className="hero bg-flash">
            <div className="hero-content text-center">
              <div className="card w-[80%] max-w-xl md:max-w-2xl lg:max-w-2xl shadow-2xl text-main">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">{t('contactme')}</h1>
                <p className="text-md md:text-lg lg:text-xl">{t('contactdescription1')}</p>
                <p className="mb-5 text-md md:text-lg lg:text-xl">{t('contactdescription2')}</p>
                  <div className="flex justify-center gap-2">
                    <a className="btn btn-circle" href="https://www.instagram.com/pellarinalizee" target="_blank" rel="noreferrer">
                      <img className="h-8 w-8" src="./images/socials/instagram.png" alt="instagram"></img>
                    </a>
                    <a className="btn btn-circle" href="https://www.linkedin.com/in/alizée-charleville-4a1227185" target="_blank" rel="noreferrer">
                      <img className="h-8 w-8" src="./images/socials/linkedin.png" alt="linkedin"></img>
                    </a>
                    <a className="btn btn-circle" href="mailto:ac.charleville@gmail.com" target="_blank" rel="noreferrer">
                      <img className="h-8 w-8" src="./images/socials/mail.png" alt="mail"></img>
                    </a>
                </div>
          <Footer />
              </div>
            </div>
          </div>
        </section>
    );
}

export default Contact;