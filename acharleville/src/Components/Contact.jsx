import Footer from "./Footer";

const Contact = () => {
    return (
        <section id="contact">
          <div className="h-36 lg:h-96 bg-[url('../public/wave-haikei.svg')] bg-cover"></div>
          <div className="hero bg-flash">
            <div className="hero-content text-center">
              <div className="card w-[80%] max-w-xl md:max-w-2xl lg:max-w-2xl shadow-2xl text-main">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Me Contacter</h1>
                <p className="text-md md:text-lg lg:text-xl">Je suis ouverte à toute opportunité !</p>
                <p className="mb-5 text-md md:text-lg lg:text-xl">N'hésitez pas à me contacter sur l'un de mes réseaux.</p>
                  <div className="flex justify-center gap-2">
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
          <Footer />

              </div>
            </div>
          </div>
        </section>
    );
}

export default Contact;