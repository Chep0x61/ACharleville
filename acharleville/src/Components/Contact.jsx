import Footer from "./Footer";

const Contact = () => {
    return (
        <section id="contact">
          <div className="hero h-[40rem] bg-[url('../public/ffflurry.svg')] bg-cover">
            <div className="hero-content text-center text-neutral-content">
              <div className="card w-[80%] max-w-xl md:max-w-2xl lg:max-w-2xl bg-secondary shadow-xl border-8 border-secondary text-white">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Me Contacter</h1>
                <p className="mt-5 text-md md:text-lg lg:text-xl">Mon profil vous intéresse ?</p>
                <p className="text-md md:text-lg lg:text-xl">Vous avez une idée de Projet ?</p>
                <p className="text-md md:text-lg lg:text-xl">Envie de discuter du monde de la création sonore ?</p>
                <p className="mb-5 text-md md:text-lg lg:text-xl">Je suis ouverte à toute opportunité ! N'hésitez pas à me contacter sur un de mes réseaux.</p>
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