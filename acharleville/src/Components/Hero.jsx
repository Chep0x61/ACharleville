import { useTranslation } from 'react-i18next'
import Avatar from "./Avatar";

const Hero = () => {
    const { t } = useTranslation()

    return(
        <div className="hero min-h-screen bg-cover bg-left-top md:bg-center bg-[url('../public/images/decoration/oscillate.svg')] pb-20 md:pb-12 lg:pb-none bg-main">
            <div className="hero-content flex-col lg:flex-row text-flash pt-24 md:pt-12 md:gap-72">
            <Avatar />
            <div className="flex flex-col justify-center items-center lg:gap-2">
              <p className='text-2xl font-bold text-center md:text-4xl lg:text-5xl'>Salut c'est Alizée</p>
              <p className='text-test text-xl md:text-3xl lg:text-4xl'>{t('welcome')}</p>
              <div className="p-8">
              <a href="./documents/FR_CV_ACharleville.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-flash text-main hover:bg-orange">Retrouvez mon CV</button>
              </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Hero;