import Footer from "./Footer";

const Contact = () => {
    return (
        <section id="contact">
          <div className="hero h-[40rem] bg-[url('../public/ffflurry.svg')] bg-cover">
            <div className="hero-content text-center text-neutral-content">
              <div className="card w-[80%] max-w-xl md:max-w-2xl lg:max-w-2xl bg-blue-500 shadow-xl border-8 border-blue-500">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Me Contacter</h1>
                <p className="mb-5 text-md md:text-lg lg:text-xl">Mon profil vous intéresse ? Vous avez une idée de Projet ? On une simple envie de discuter du monde de la création sonore ? Je suis activement à la recherche de travail alors n'hésitez pas !</p>
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