import { useTranslation } from 'react-i18next'
import Card from "./Card";

const Cards = () => {
    const { t } = useTranslation();
    return (
        <section id="projects">
        <div>
            <h2 className="text-4xl font-bold text-center pt-8 pb-2 text-flash">{t('myprojects')}</h2>
            <p className="text-md lg:text-lg text-center pb-8 text-test">{t('projectadvice')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-none lg:grid-cols-3 place-content-center place-items-center gap-4">
                <Card w="48" id="14" title={t('loottitle')} role={t('labelsyncandsounddesign')} date={t('march') + ' 2023'} desc={t('lootdescription')} pic="./images/projects/loot.png" alt="LOOT PROJECT" ylink="https://www.youtube.com/embed/2cPZWcSqdCw" ytitle="LOOT - Sync&Sound Design • Charleville"/>
                
                <Card w="48" id="13" title={t('spidermantitle')} role={t('labelsounddesign')} date={t('may') + ' 2023'} desc={t('spidermandescription')} pic="./images/projects/spiderman.png" alt="SPIDERMAN PROJECT" ylink="https://www.youtube.com/embed/fwA4coxcQ0M" ytitle="Spiderman - New generation • Charleville"/>
                
                <Card w="48" id="12" title={t('arcanetrailertitle')} role={t('labelsounddesign')} date={t('january') + ' 2023'} desc={t('arcanetrailerdescription')} pic="./images/projects/arcane1.jpg" alt="Projet1" ylink="https://www.youtube.com/embed/0C8mb2HJfl0" ytitle="ARCANE - Sound design • Charleville"/>

                <Card w="48" id="11" title={t('cameleontitle')} role={t('labelsoundengineer')} date={t('june') + ' 2021'} desc={t('cameleondescription')} pic="./images/projects/cameleon.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/OA2onnhzWxc" ytitle="LE CAMELEON - Ingénieur son • Charleville"/>

                <Card w="48" id="10" title={t('artefourniertitle')} role={t('labelsoundeffect')} date={t('november') + ' 2022'} desc={t('artefournierdescription')} pic="./images/projects/bird.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/aWsqpFQNX5M" ytitle="HABITAT INEDIT - Sound Design • Charleville"/>

                <Card w="48" id="9" title={t('memphretitle')} role={t('labeldubbing')} date={t('june') + ' 2022'} desc={t('memphredescription')} pic="./images/projects/lisa.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/KrrrTvE6ccE" ytitle="Memphré | Film de diplôme Bachelor Animation 2D | 2022"/>

                <Card w="48" id="8" title={t('audititle')} role={t('labelsounddesign')} date={t('january') + ' 2023'} desc={t('audidescription')} pic="./images/projects/audi.png" alt="Projet2" ylink="https://www.youtube.com/embed/Mv2Ni31HSMw" ytitle=" AUDI - 1 millimètre - Sound Design • Chapelière&Charleville"/>

                <Card w="48" id="7" title={t('macncheesetitle')} role={t('labelsounddesign')} date={t('june') + ' 2022'} desc={t('macncheesedescription')} pic="./images/projects/macncheese.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/ZcMTjbHfs4U" ytitle="Mac 'n' Cheese - Sound Design • Charleville"/>

                <Card w="48" id="6" title={t('tinyworldtitle')} role={t('labelsounddesign')} date={t('january') + ' 2022'} desc={t('tinyworlddescription')} pic="./images/projects/tinyworld.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/6HV8vN10-io" ytitle="TINY WORLDS - Sound Design • CHARLEVILLE"/>

                <Card w="48" id="5" title={t('arcanes1title')} role={t('labelsounddesign')} date={t('february') + ' 2023'} desc={t('arcanes1description')} pic="./images/projects/arcane.jpg" alt="Projet1" ylink="https://www.youtube.com/embed/9j9fcWYEEmI" ytitle="ARCANE - Sound design • Charleville"/>

                <Card w="48" id="4" title={t('oktapolititle')} role={t('labelsounddesign')} date={t('april') + ' 2022'} desc={t('oktapolidescription')} pic="./images/projects/okto.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/R6sF4R_4lfo" ytitle="OKTAPODI - Sound Design • Charleville"/>

                <Card w="48" id="3" title={t('esperancetitle')} role={t('labelsoundengineer')} date={t('february') + ' 2022'} desc={t('esperancedescription')} pic="./images/projects/esperance.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/UTM-zQc1Kdk" ytitle="ESPERANCE - Court métrage • Charleville"/>

                <Card w="48" id="2" title={t('artecastortitle')} role={t('labelsoundeffect')} date={t('december') + ' 2022'} desc={t('artecastordescription')} pic="./images/projects/castor.jpg" alt="Projet2" ylink="https://www.youtube.com/embed/n3ESj7TLkn4" ytitle="HABITAT INÉDIT - ARTE - Sound Design • Charleville"/>

                <Card w="48" id="1" title={t('fubiztitle')} role={t('labelsounddesign')} desc={t('fubizdescription')} date={t('october') + ' 2022'} pic="./images/projects/fubiz.gif" alt="Projet2" ylink="https://www.youtube.com/embed/slnDy3KtH9Y" ytitle=" FUBIZ - Sound Design • Charleville "/>

                <Card w="48" id="99" title={t('dolbytitle')} role={t('labelsounddesign')} desc={t('dolbydescription')} date={t('december') + ' 2022'} pic="./images/projects/dolbypub.png" alt="DolbyPubProject" ylink="https://www.youtube.com/embed/2U2mrbOt97Q" ytitle="DOLBY - Sound design • Charleville"/>

            </div>
        </div>
        </section>
    );
}

export default Cards;