import Card from "./Card";

const Cards = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center pb-8 pt-8">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-none lg:grid-cols-3 place-content-center place-items-center gap-4">
                <Card w="48" id="1" title="Projet 1" desc="description" pic="https://img.freepik.com/vecteurs-libre/fond-univers-degrade_23-2149635763.jpg?w=1380&t=st=1676062924~exp=1676063524~hmac=0c729fc9d343c424faa956745798a1d538156f901f6421e19a820d90fd1f5d2a" alt="Projet1" ylink="https://www.youtube.com/embed/X9at37tsrY8" ytitle="resonance sped up"/>
                
                <Card w="48" id="2" title="Projet 2" desc="description" pic="https://img.freepik.com/vecteurs-libre/fond-univers-degrade_23-2149635763.jpg?w=1380&t=st=1676062924~exp=1676063524~hmac=0c729fc9d343c424faa956745798a1d538156f901f6421e19a820d90fd1f5d2a" alt="Projet2" ylink="https://www.youtube.com/embed/X9at37tsrY8" ytitle="resonance sped up"/>
                
                <Card w="48" id="3" title="Projet 3" desc="description" pic="https://img.freepik.com/vecteurs-libre/fond-univers-degrade_23-2149635763.jpg?w=1380&t=st=1676062924~exp=1676063524~hmac=0c729fc9d343c424faa956745798a1d538156f901f6421e19a820d90fd1f5d2a" alt="Projet3" ylink="https://www.youtube.com/embed/X9at37tsrY8" ytitle="resonance sped up"/>
                
                <Card w="48" id="4" title="Projet 4" desc="description" pic="https://img.freepik.com/vecteurs-libre/fond-univers-degrade_23-2149635763.jpg?w=1380&t=st=1676062924~exp=1676063524~hmac=0c729fc9d343c424faa956745798a1d538156f901f6421e19a820d90fd1f5d2a" alt="Projet4" ylink="https://www.youtube.com/embed/X9at37tsrY8" ytitle="resonance sped up"/>

            </div>
        </div>
    );
}

export default Cards;