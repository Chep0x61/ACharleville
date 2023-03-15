import {useState, useEffect} from 'react';
import Avatar from "./Avatar";

const Hero = () => {
    const [index, setIndex] = useState(0);
    const texts = ["Sound Designer", "Perchman", "Mixeur"];
    const [text, setText] = useState(texts[index]);

    useEffect(() => {
      const interval = setInterval(() => {
        setText(texts[index]);
        setIndex((index + 1) % texts.length);
      }, 2000);
      return () => clearInterval(interval);
    });

    return(
        <div className="hero min-h-screen bg-cover bg-left-top md:bg-center bg-[url('../public/oooscillate.svg')] pb-20 md:pb-12 lg:pb-none bg-main">
            <div className="hero-content flex-col lg:flex-row text-flash pt-24 md:pt-12 md:gap-72">
            <Avatar />
            <div className="flex flex-col justify-center items-center lg:gap-2">
              <p className='text-2xl font-bold text-center md:text-4xl lg:text-5xl'>Salut c'est Alizée</p>
              <p className='text-test text-xl md:text-3xl lg:text-4xl'>Bienvenue sur mon site !</p>
              <div className="p-8">
              <a href="/documents/CV_ACharleville.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-flash text-main hover:bg-orange">Retrouvez mon CV</button>
              </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Hero;