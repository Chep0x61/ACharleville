import Card from "./Card"

const Cards = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center pb-8 pt-8">Mes Projets</h2>
            <div className="grid grid-cols-3 gap-none place-content-center place-items-center">
                <Card w="96" title="MacNCheese" desc="description" pic="https://france3-regions.francetvinfo.fr/image/m-ZkYkyqgurN_90Ve0wJKRhWaW4/1200x900/regions/2020/06/09/5edf64fae2524_castor_-_pixabay-3752051.jpg"/>
                <Card w="96" title="MacNCheese" desc="description" pic="https://france3-regions.francetvinfo.fr/image/m-ZkYkyqgurN_90Ve0wJKRhWaW4/1200x900/regions/2020/06/09/5edf64fae2524_castor_-_pixabay-3752051.jpg"/>
                <Card w="96" title="MacNCheese" desc="description" pic="https://france3-regions.francetvinfo.fr/image/m-ZkYkyqgurN_90Ve0wJKRhWaW4/1200x900/regions/2020/06/09/5edf64fae2524_castor_-_pixabay-3752051.jpg"/>
                <Card w="96" title="MacNCheese" desc="description" pic="https://france3-regions.francetvinfo.fr/image/m-ZkYkyqgurN_90Ve0wJKRhWaW4/1200x900/regions/2020/06/09/5edf64fae2524_castor_-_pixabay-3752051.jpg"/>
            </div>
        </div>
    );
}

export default Cards;