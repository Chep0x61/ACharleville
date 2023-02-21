import {useState, useEffect} from 'react';
import Avatar from "./Avatar";
import Button from "./Button";

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
        <div className="hero min-h-screen bg-base-200 bg-[url('../public/oooscillate.svg')] bg-cover pb-20 md:pb-12 lg:pb-none">
            <div className="hero-content flex-col lg:flex-row">
            <Avatar />
            <div className="flex flex-col justify-center items-center lg:pl-8 lg:gap-2">
              <p className='text-2xl font-bold text-center md:text-4xl lg:text-5xl'>Salut, je suis Alizée!</p>
              <p className="text-2xl font-semibold text-center bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">Je suis un Sound Designer</p>
              <div className="p-8">
              <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-secondary">Retrouvez mon CV</button>
              </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Hero;