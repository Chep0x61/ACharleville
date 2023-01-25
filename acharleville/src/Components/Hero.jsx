import Avatar from "./Avatar";
import Button from "./Button";

const Hero = () => {
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <Avatar />
            <div>
              <h1 className="text-4xl font-bold py-2">Salut, moi c'est Alizée !</h1>
                <div class="text-5xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">Je suis Sound Designeuse</div>
                <div className="pt-12">
                    <Button txt="Retrouvez mon CV"/>
                </div>
              </div>
            </div>
          </div>
    );
}

export default Hero;