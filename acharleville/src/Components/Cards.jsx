import Card from "./Card";

const Cards = () => {
    return (
        <section id="projects">
        <div>
            <h2 className="text-4xl font-bold text-center pt-8 pb-2 text-flash">Mes Projets</h2>
            <p className="text-md lg:text-lg text-center pb-8 text-test">Je vous recommande d'utiliser un casque pour une immersion complète lors de l'écoute de mes projets.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-none lg:grid-cols-3 place-content-center place-items-center gap-4">
                <Card w="48" id="12" title="Arcane - Trailer" date="Sound Design" desc="Court-métrage soutenue par l'équipe pédagogique de l'école Cinécréatis. La prise de son à été prit en direct sur le lieu de tournage, puis j'ai été responsable de la post-production sonore. Cela a été un de mes premiers projets aussi volumineux, et j'en garde une bonne expérience." pic="./images/arcane1.jpg" alt="Projet1" ylink="https://www.youtube.com/embed/0C8mb2HJfl0" ytitle="ARCANE - Sound design • Charleville"/>

                <Card w="48" id="11" title="Court Métrage - Le caméléon" date="Ingénieur Son" desc="Court-métrage soutenue par l'équipe pédagogique de l'école Cinécréatis. La prise de son à été prit en direct sur le lieu de tournage, puis j'ai été responsable de la post-production sonore. Cela a été un de mes premiers projets aussi volumineux, et j'en garde une bonne expérience." pic="./images/cameleon.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/OA2onnhzWxc" ytitle="LE CAMELEON - Ingénieur son • Charleville"/>

                <Card w="48" id="10" title="Habitat Inédit - Fournier Roux" date="Bruitages" desc="Un workshop ou sound design et bruitage se scinde, ou l'objectif est de coller parfaitement à l'image. Tromper alors le spectateur avec inventivité est un jeu créatif et manuel, dont on s'inspire des plus grands d'Hollywood." pic="./images/bird.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/aWsqpFQNX5M" ytitle="HABITAT INEDIT - Sound Design • Charleville"/>

                <Card w="48" id="9" title="Court Métrage - Memphré" date="Doublage" desc="Collaboration avec des élèves de l'école LISAA, pour créer ce court-métrage dont l'amitié est l'aventure font son charme. Il a fallu aller chercher des comédiennes, puis travailler ensemble dans une démarche artistique pour y trouver la même harmonie qu'Alma et Sylvie." pic="./images/lisa.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/KrrrTvE6ccE" ytitle="Memphré | Film de diplôme Bachelor Animation 2D | 2022"/>

                <Card w="48" id="8" title="Un millimètre Audi" date="Sound Design" desc="Du sound design pur et futuriste, en collaboration avec Manon Chapelière,  soutenue par l'équipe pédagogique de l'école. Le fait d'être plusieurs sur le sound design oblige à trouver un terrain d'entente, et nous avons choisi un son des plus texturés et authentiques possible.  La musique a été créée pour la publicité aussi." pic="./images/audi.png" alt="Projet2" ylink="https://www.youtube.com/embed/Mv2Ni31HSMw" ytitle=" AUDI - 1 millimètre - Sound Design • Chapelière&Charleville"/>

                <Card w="48" id="7" title="Mac'n'Cheese" date="Sound Design" desc="Projet de fin de première année à Studio M, dont le bruitage a été en grande partie enregistré en studio, excepté les voitures. Il a été pensé en amont pour définir les besoins, autant en FX, qu'en doublage, et a suivi l'exemple du cartoon jusqu'au bout." pic="./images/macncheese.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/ZcMTjbHfs4U" ytitle="Mac 'n' Cheese - Sound Design • Charleville"/>

                <Card w="48" id="6" title="Tiny World" date="Sound Design" desc="Tiny Words est un de ces petits projets avec des délais serrés et dont les Foley's sont entièrement maison. À base de jouets et de machines de cuisine, on obtient un monde aux enjeux subtils dont les traits d'humour ne manquent pas." pic="./images/tinyworld.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/6HV8vN10-io" ytitle="TINY WORLDS - Sound Design • CHARLEVILLE"/>

                <Card w="48" id="5" title="Arcane - Extrait S1 Ep4" date="Sound Design" desc="Projet au Walla* multiples, dont l'équipe et moi-même sommes amusés à produire. J'ai mis un trait d'honneur à la voix dans l'extrait, au centre de l'attention ou comme arrière-plan d'ambiance. La mise aux normes était ambitieuse, mais chaque détail a fini par trouver sa place." pic="./images/arcane.jpg" alt="Projet1" ylink="https://www.youtube.com/embed/9j9fcWYEEmI" ytitle="ARCANE - Sound design • Charleville"/>

                <Card w="48" id="4" title="Oktapodi" date="Sound Design" desc="Un des premiers gros projets de sound design, son principal défi était les bruitages d'eau. De l'enregistrement grandeur nature, à la post production, qui demande beaucoup de resynchronisation.  Merci au soutien de l'équipe pédagogique de l'école et à l'investissement de la classe." pic="./images/okto.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/R6sF4R_4lfo" ytitle="OKTAPODI - Sound Design • Charleville"/>

                <Card w="48" id="3" title="Court Métrage - Espérance" date="Ingénieur Son" desc="Court-métrage pour le Nikon festival, j'ai était à la prise de son en extérieur sur plateau de tournage, aidé d'une perchwoman. Puis à la post-production  sonore, mixage et sound design compris." pic="./images/esperance.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/UTM-zQc1Kdk" ytitle="ESPERANCE - Court métrage • Charleville"/>

                <Card w="48" id="2" title="Habitat Inédit Castor" date="Bruitages" cdesc="?" desc="Workshop soutenue par l'équipe pédagogique de l'école. En partant de zéro, il a nécessité  des enregistrements de foley, du sound design et doublage français en studio. Puis une première approche de la création musicale ainsi que son mixage par la suite." pic="./images/castor.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/n3ESj7TLkn4" ytitle="HABITAT INÉDIT - ARTE - Sound Design • Charleville"/>

                <Card w="48" id="1" title="Publicité Fubiz" date="Sound Design" desc="" pic="./images/fubiz.gif" alt="Projet2" ylink="https://www.youtube.com/embed/slnDy3KtH9Y" ytitle=" FUBIZ - Sound Design • Charleville "/>

            </div>
        </div>
        </section>
    );
}

export default Cards;