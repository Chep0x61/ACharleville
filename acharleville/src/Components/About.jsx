import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
        <div className="hero mb-8">
            <div className="hero-content text-center">
                <div className="w-[90%] lg:w-[80%] text-test">
                    <h2 className="text-4xl font-bold text-center pt-8 pb-8 text-flash">{t('aboutme')}</h2>
                    <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-line:text-xl first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{t('aboutmedescription')}</p>
                    <p className="pt-4 font-light text-gray-500 dark:text-gray-400">{t('aboutmeadvice')}</p>
                    <p className="mt-8 pt-4 font-light text-gray-500 font-semibold dark:text-gray-400">{t('skills')}</p>
                </div>
            </div>
        </div>
        </section>
    );
}

export default About;