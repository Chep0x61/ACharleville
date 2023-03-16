import Card from "./Card";

const Cards = () => {
    return (
        <section id="projects">
        <div>
            <h2 className="text-4xl font-bold text-center pt-8 pb-2 text-flash">Mes Projets</h2>
            <p className="text-md lg:text-lg text-center pb-8 text-test">Je vous recommande d'utiliser un casque pour une immersion complète lors de l'écoute de mes projets.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-none lg:grid-cols-3 place-content-center place-items-center gap-4">
                <Card w="48" id="12" title="Arcane - Trailer" date="Sound Design" cdesc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, musique édité, et doublage français en studio." desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, musique édité, et doublage français en studio." pic="./images/arcane1.jpg" alt="Projet1" ylink="https://www.youtube.com/embed/0C8mb2HJfl0" ytitle="ARCANE - Sound design • Charleville"/>

                <Card w="48" id="11" title="Court Métrage - Le caméléon" date="Ingénieur Son" cdesc="?" desc="Court-métrage soutenue par l'équipe pédagogique de l'école Cinécréatis. Prise en direct sur le lieu de tournage, puis responsable de la post-production sonore." pic="./acharlevilleart/images/cameleon.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/OA2onnhzWxc" ytitle="LE CAMELEON - Ingénieur son • Charleville"/>

                <Card w="48" id="10" title="Habitat Inédit" date="Bruitages" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, musique édité, et doublage français en studio." pic="./acharleville/images/bird.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/aWsqpFQNX5M" ytitle="HABITAT INEDIT - Sound Design • Charleville"/>

                <Card w="48" id="9" title="Court Métrage - Memphré" date="Doublage" cdesc="?" desc="Court-métrage d'animation en association externe avec l'école LISAA.  Enregistrement de foley, sound design, musique édité, et doublage français en studio. " pic="./acharleville.art/images/lisa.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/KrrrTvE6ccE" ytitle="Memphré | Film de diplôme Bachelor Animation 2D | 2022"/>

                <Card w="48" id="8" title="Un millimètre Audi" date="Sound Design" cdesc="?" desc="Workshop collaboré avec Manon Chapelière,  soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, création musical et mixage." pic="./acharleville.art/images/audi.png" alt="Projet2" ylink="https://www.youtube.com/embed/Mv2Ni31HSMw" ytitle=" AUDI - 1 millimètre - Sound Design • Chapelière&Charleville"/>

                <Card w="48" id="7" title="Mac'n'Cheese" date="Sound Design" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, musique édité, et doublage français en studio." pic="./acharleville.art/images/macncheese.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/ZcMTjbHfs4U" ytitle="Mac 'n' Cheese - Sound Design • Charleville"/>

                <Card w="48" id="6" title="Tiny World" date="Sound Design" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley et sound design." pic="./acharleville.art/images/tinyworld.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/6HV8vN10-io" ytitle="TINY WORLDS - Sound Design • CHARLEVILLE"/>

                <Card w="48" id="5" title="Arcane - Extrait S1 Ep4" date="Sound Design" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, musique édité, et doublage français en studio." pic="./acharleville.art/images/arcane.jpg" alt="Projet1" ylink="https://www.youtube.com/embed/9j9fcWYEEmI" ytitle="ARCANE - Sound design • Charleville"/>


                <Card w="48" id="4" title="Oktapodi" date="Sound Design" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, musique édité." pic="./acharleville.art/images/okto.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/R6sF4R_4lfo" ytitle="OKTAPODI - Sound Design • Charleville"/>

                <Card w="48" id="3" title="Court Métrage - Espérance" date="Ingénieur Son" cdesc="?" desc="Court-métrage pour le Nikon festival. Prise de son en extérieur sur plateau de tournage, sound design et mixage." pic="./acharleville.art/images/esperance.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/UTM-zQc1Kdk" ytitle="ESPERANCE - Court métrage • Charleville"/>

                <Card w="48" id="2" title="Habitat Inédit Castor" date="Bruitages" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. Enregistrement de foley, sound design, création et mixage musical, et doublage français en studio." pic="./acharleville.art/images/castor.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/n3ESj7TLkn4" ytitle="HABITAT INÉDIT - ARTE - Sound Design • Charleville"/>

                <Card w="48" id="1" title="Publicité Fubiz" date="Sound Design" desc="" pic="./acharleville.art/images/fubiz.gif" alt="Projet2" ylink="https://www.youtube.com/embed/slnDy3KtH9Y" ytitle=" FUBIZ - Sound Design • Charleville "/>

            </div>
        </div>
        </section>
    );
}

export default Cards;