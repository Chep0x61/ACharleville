import Card from "./Card";

const Cards = () => {
    return (
        <section id="projects">
        <div>
            <h2 className="text-4xl font-bold text-center pb-8 pt-8">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-none lg:grid-cols-3 place-content-center place-items-center gap-4">
                <Card w="48" id="1" title="Arcane - Sound Design" date="Janvier 2023" cdesc="Enregistrements studio, Sound design et Mixage." desc="Workshop soutenue par l'équipe pédagogique de l'école. L'objectif est de partir d'un montage de la série Arcane, de zéro à l'entièreté du Sound design, musique, et doublage français. En un mois il y a eu session de doublage avec les comédiens en studio. De même pour les sessions d'enregistrement de Foley, et d'ambiance. Puis les 3 dernières semaines ont été rythmé par le montage, la création de VFX sonore, ainsi que le mixage. La mise aux normes et l'Edit de la musique ont clôturer le projet, ainsi qu'une 2nd version plus développée." pic="https://lepauledorion.files.wordpress.com/2022/01/arcane.jpeg" alt="Projet1" ylink="https://www.youtube.com/embed/0C8mb2HJfl0" ytitle="CHARLEVILLE Alizée WS ASD"/>

                <Card w="48" id="2" title="Habitat Inédit - Sound Design" date="Décembre 2022" cdesc="Sound design et Mixage" desc="description" pic="https://www.eaux-vives-3nied.fr/wp-content/uploads/2019/12/CastorEtCastorins.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/X9at37tsrY8" ytitle="resonance sped up"/>

                <Card w="48" id="3" title="Mac 'N' Cheese - Sound Design" date="Mai 2022" cdesc="Prise de son, Sound design et Mixage" desc="description" pic="https://www.iamag.co/wp-content/uploads/2013/10/macn-cheese-1.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/ZcMTjbHfs4U" ytitle="Mac 'n' Cheese - Sound Design - Charleville"/>

                <Card w="48" id="4" title="Memphré - Sound Design" date="Mai 2022" cdesc="Prise de son, Sound design et Mixage" desc="description" pic="/images/memphre.png" alt="Projet2" ylink="https://www.youtube.com/embed/UBpUC3YDZKs" ytitle="MEMPHRÉ - Sound Design - Charleville"/>

                <Card w="48" id="5" title="Tiny Worlds" date="Février 2022" desc="Prise de son et mixage" pic="https://img.freepik.com/vecteurs-libre/fond-univers-degrade_23-2149635763.jpg?w=1380&t=st=1676062924~exp=1676063524~hmac=0c729fc9d343c424faa956745798a1d538156f901f6421e19a820d90fd1f5d2a" alt="Projet3" ylink="https://www.youtube.com/embed/X9at37tsrY8" ytitle="resonance sped up"/>

                <Card w="48" id="6" title="Le Caméléon" date="Juin 2021" desc="description" pic="https://img.freepik.com/vecteurs-libre/fond-univers-degrade_23-2149635763.jpg?w=1380&t=st=1676062924~exp=1676063524~hmac=0c729fc9d343c424faa956745798a1d538156f901f6421e19a820d90fd1f5d2a" alt="LeCaméléon" ylink="https://www.youtube.com/embed/OA2onnhzWxc" ytitle="resonance sped up"/>

            </div>
        </div>
        </section>
    );
}

export default Cards;