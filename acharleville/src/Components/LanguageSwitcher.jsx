import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const languages = {
    en: { name: 'English', asset: 'uk.png' },
    fr: { name: 'French', asset: 'fr.png' }
}

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (event, languageKey) => {
        setIsOpen(false);
        i18n.changeLanguage(languageKey);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.dropdown')) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    return (
        <div onClick={toggleMenu} className="flex justify-center items-center rounded-full z-[30] fixed bottom-2 right-2 w-8 h-8 md:w-12 p-3 md:p-4 md:h-12 bg-flash cursor-pointer ring ring-[#212529] ring-1 shadow-2xl">
<div tabIndex="0" className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages">
            <path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>
        </svg>
    </div>

    {isOpen && (
        <div className="absolute mb-32">
            <ul className="w-24 flex flex-col justify-center items-center gap-2 mb-1 md:mb-6 lg:mb-8 ">
                {Object.keys(languages).map((key) => (
                    <li className="flex justify-center items-center p-1 rounded-full bg-flash hover:bg-orange ring ring-[#212529] ring-1 shadow-2xl" onClick={(e) => handleLanguageChange(e, key)} key={key} value={key}>
                        <div>
                            <img className="w-6 md:w-8 h-auto hover:opacity-80" src={`/images/flags/${languages[key].asset}`} alt={languages[key].name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )}
        </div>
    );
}

export default LanguageSwitcher;
