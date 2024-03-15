import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                // navbar
                catchphrase1: 'Make the image ',
                catchphrase2: 'come alive with sound',
                aboutme: 'About Me',
                myprojects: 'My Projects',
                contactme: 'Contact Me',

                // hero
                fullname: 'Alizée Charleville',
                service: 'Audio Post Production & Sound Design Services',
                cvbutton: 'View my resume',

                // aboutme
                //aboutme: 'About Me',
                aboutmedescription: "Drawing on a solid expertise in sound acquired since 2019, I have honed my skills through various training programs to master all aspects of audio post-production, sound design, and field recording. From my education at Cinécréatis to Studio M Lyon, and supplemented by internships on television production sets as well as in podcast audio mixing, I have cultivated extensive experience in the realms of film, video games, and animation.",
                aboutmeadvice: "Today, I offer my professional services, both in-studio and on-location. If your project demands high-quality vocal and musical mixing, I would be delighted to collaborate with you and contribute to its success.",
                skills: "Voice-Over Recording, Narration and ADR Recording (Automated Dialogue Replacement), French And English Language Dubbing, Dialogue Restoration, Foley Recording, Final Stereo and 5.1 Mixing.",

                // projects
                //projects: 'Mes Projets',
                projectadvice: "I recommend using headphones for a complete immersive experience for listening.",
                january: "January",
                february: "February",
                march: "March",
                april: "April",
                may: "May",
                june: "June",
                july: "July",
                august: "August",
                september: "September",
                october: "October",
                november: "November",
                december: "December",
                labelsounddesign: "Sound Design",
                labelsyncandsounddesign: "Sync & Sound Design",
                labelsoundengineer: "Sound Engineer",
                labelsoundeffect: "Sound Effects",
                labeldubbing: "Dubbing",
                projectbutton: "Check this project",

                // contact
                // contactme: "Contact Me",
                contactdescription1: "I am open to any opportunity !",
                contactdescription2: "Feel free to contact me on any of my networks.",
                
                // LOOT project
                loottitle: "LOOT",
                lootdescription: "This was an exciting challenge, as it required precise synchronisation of the voices with the same dubbers for each character. The editing proved to be particularly meticulous, in particular to adjust the labials from English to French. Recreating an entire atmosphere from the images was a real game, while maintaining a growing tension throughout the narrative progression.",
            
                // Spiderman project
                spidermantitle: "Spiderman - New generation",
                spidermandescription: "I undertook this sound design project inspired by work that I particularly admire. My aim was to complete the sound design, voice recording and mixing quickly. To achieve this, I spent three days recording, followed by a week editing the audio and music, and then another week mixing.",

                // Arcane Trailer
                arcanetrailertitle: "Arcane - Trailer",
                arcanetrailerdescription: "An interesting school workshop because of the variety of SFX to be produced. The main challenges were to create such a complex universe, and to manage to build up the emotion as the story unfolds in such a short space of time. Most of the sound effects and dubbing were done in the studio. The dubbing was then brought up to standard.",
            
                // Le Cameleon
                cameleontitle: "Le Caméléon",
                cameleondescription: "Short film supported by the Cinécréatis school team. The sound was recorded live on location. I was in charge of sound post-production. It was one of my first projects with such a large budget, and it was a good experience.",

                // Arte Habitat Inedit
                artefourniertitle: "Arte - Habitat Inédit",
                artefournierdescription: "A workshop where sound design and sound effects merge. The aim was to match the image perfectly. Deceiving the viewer with inventiveness is a creative and manual game, inspired by Hollywood's greatest.",

                // Memphré
                memphretitle: "Short Film - Memphré",
                memphredescription: "We worked with students from LISAA to create this short film, whose charm lies in its friendship and adventure. We had to go out and find actresses, then work together in an artistic approach to find the same harmony to suit our two characters, Alma and Sylvie.",

                // Audi
                audititle: "Audi - One millimeter",
                audidescription: "Pure, futuristic sound design, in collaboration with Manon Chapelière, supported by the school's teaching team. Having several people working on the sound design meant that we had to find common ground, and we chose a sound that was as textured and authentic as possible. The music was also created for the advert.",

                // MacnCheese
                macncheesetitle: "Mac'n'Cheese",
                macncheesedescription: "End-of-first-year project at Studio M, with most of the sound effects recorded in the studio, except for the cars. It was thought through beforehand to define the requirements, both in terms of FX and dubbing, and followed the cartoon example right through to the end.",

                // Tiny World
                tinyworldtitle: "Tiny World",
                tinyworlddescription: "Tiny Worlds is one of those small projects with tight deadlines, where the Foley sounds are entirely homemade. Using toys and kitchen appliances, the result is a world filled with subtle nuances and plenty of humor.",

                // Arcane S1
                arcanes1title: "Excerpt from Arcane",
                arcanes1description: "A multiple Walla project, which the team and I had fun producing. I made a point of using the voice in the extract, either as the center of attention or as an atmospheric background. Bringing it up to standard was ambitious, but in the end every detail found its place.",

                // Oktapoli
                oktapolititle: "Oktapoli",
                oktapolidescription: "One of my first big sound design projects, its main challenge was water sound effects. From full-scale recording to post-production, which required a lot of resynchronisation. Thanks to the support of the teaching team and the commitment of the class.",

                // Espérance
                esperancetitle: "Espérance",
                esperancedescription: "Short film for the Nikon festival, I was in charge of sound recording on location, with the help of a boom operator. Then I was in charge of sound post-production, including mixing and sound design.",

                // Castor
                artecastortitle: "Arte - Habitat Inédit Castor",
                artecastordescription: "Workshop supported by the school's teaching team. Starting from scratch, it involved foley recordings, sound design and French dubbing in the studio. This was followed by a first approach to music creation and mixing.",

                // Fubiz Pub
                fubiztitle: "Publicity - Fubiz",
                fubizdescription: "",

                // Dobly
                dolbytitle: "Publicity - Dolby",
                dolbydescription: "This sound design focuses on sensory exploration and spatial immersion. By playing with the left and right channels, I create an experience where high and low frequencies envelop the listener, inviting them to physically feel the elements of sound around them. My aim is to evoke deep emotions and total immersion in a parallel sound world, where every detail is carefully designed to captivate and transport the listener.",
            }
        },
        fr: {
            translation: {
                // navbar
                catchphrase1: 'Faites ressentir ',
                catchphrase2: 'l’image avec le son',
                aboutme: 'À Propos de moi',
                myprojects: 'Mes Projets',
                contactme: 'Me Contacter',

                // hero
                fullname: 'Alizée Charleville',
                service: 'Services de Post-Production Audio et de Conception Sonore',
                cvbutton: 'Voir mon CV',

                // aboutme
                //aboutme: 'À Propos de moi',
                aboutmedescription: "Fort d'une expertise sonore acquise depuis 2019, j'ai perfectionné mes compétences à travers diverses formations afin de maîtriser tous les aspects de la post-production audio, du sound design et de la prise de son sur le terrain. Grâce à mon parcours, allant de l'école Cinécréatis à Studio M Lyon, et enrichi par des stages sur le plateau de productions télévisuelles ainsi qu'en mixage d'audio podcast, j'ai développé une solide expérience dans l'univers du film, des jeux vidéo et de l'animation.",
                aboutmeadvice: "Aujourd'hui, je mets à votre disposition mes services professionnels, aussi bien en studio que sur le terrain. Si votre projet nécessite un mixage vocal et musical de qualité, je serais ravi de collaborer avec vous et de contribuer à sa réussite.",
                skills: "Conception sonore et montage, Enregistrement de voix off, Enregistrement de narration et de doublage en ADR, Doublage en français et en anglais, Restauration de dialogues, Enregistrement de bruitages, Mixage final en stéréo et 5.1",
            

                // projects
                //projects: 'Mes Projets',
                projectadvice: "Je vous recommande d'utiliser un casque pour une immersion complète lors de l'écoute de mes projets.",
                january: "Janvier",
                february: "Février",
                march: "Mars",
                april: "Avril",
                may: "Mai",
                june: "Juin",
                july: "Juillet",
                august: "Août",
                september: "Septembre",
                october: "Octobre",
                november: "Novembre",
                december: "Décembre",
                labelsounddesign: "Sound Design",
                labelsyncandsounddesign: "Sync & Sound Design",
                labelsoundengineer: "Ingénieur Son",
                labelsoundeffect: "Bruitages",
                labeldubbing: "Doublage",
                projectbutton: "Voir ce projet",

                // contact
                // contactme : "Me contacter"
                contactdescription1: "Je suis ouverte à toute opportunité !",
                contactdescription2: "N'hésitez pas à me contacter sur l'un de mes réseaux.",

                // LOOT project
                loottitle: "LOOT",
                lootdescription: "Ce projet représente un défi passionnant, car il requiert une synchronisation précise des voix avec les mêmes doubleurs pour chaque personnage. Le montage s'est révélé particulièrement minutieux, notamment pour ajuster les labiales de l'anglais au français. Recréer entièrement une atmosphère à partir des images a été un véritable jeu, tout en maintenant une tension croissante tout au long de la progression narrative.",
            
                // Spiderman project
                spidermantitle: "Spiderman - New generation",
                spidermandescription: "J'ai entrepris ce projet de sound design en m'inspirant d'un travail que j'admire particulièrement. Mon objectif était de réaliser rapidement le sound design, l'enregistrement des voix et le mixage. Pour ce faire, j'ai alloué trois jours à l'enregistrement, suivi d'une semaine dédiée au montage audio et musical, puis d'une autre semaine consacrée au mixage.",

                // Arcane Trailer
                arcanetrailertitle: "Arcane - Trailer",
                arcanetrailerdescription: "Workshop scolaire intéressant par sa diversité de SFX à réaliser. Les principaux défis étaient de créer un univers aussi complexe, réussir à monter l'émotion à mesure que l'histoire défile en si peu de temps. La majeure partie des bruitages ont été fait en studio, ainsi que le doublage. La mise aux normes a été ensuite appliquée.",
            
                // Le Cameleon
                cameleontitle: "Le Caméléon",
                cameleondescription: "Court-métrage soutenu par l'équipe pédagogique de l'école Cinécréatis. La prise de son a été prise en direct sur le lieu de tournage. J'occupais le poste de responsable de la post-production sonore. Cela a été un de mes premiers projets aussi volumineux, et j'en garde une bonne expérience.",

                // Arte Habitat Inedit
                artefourniertitle: "Arte - Habitat Inédit",
                artefournierdescription: "Un workshop où sound design et bruitage fusionnent. L'objectif était de coller parfaitement à l'image. Tromper le spectateur avec inventivité est un jeu créatif et manuel, dont on s'inspire des plus grands d'Hollywood.",

                // Memphré
                memphretitle: "Court Métrage - Memphré",
                memphredescription: "En collaboration avec des élèves de l'école LISAA, pour créer ce court-métrage dont l'amitié et l'aventure font son charme. Il a fallu aller démarcher des comédiennes, puis travailler ensemble dans une démarche artistique pour y trouver la même harmonie pour coller à nos deux personnages, Alma et Sylvie.",

                // Audi
                audititle: "Audi - Un millimètre",
                audidescription: "Du sound design pur et futuriste, en collaboration avec Manon Chapelière, soutenu par l'équipe pédagogique de l'école. Le fait d'être plusieurs sur le sound design oblige à trouver un terrain d'entente, et nous avons choisi un son des plus texturé et authentique possible. La musique a été créée pour la publicité également.",

                // MacnCheese
                macncheesetitle: "Mac'n'Cheese",
                macncheesedescription: "Projet de fin de première année à Studio M, dont le bruitage a été en grande partie enregistré en studio, excepté pour les voitures. Il a été pensé en amont pour définir les besoins, autant en FX, qu'en doublage, et a suivi l'exemple du cartoon jusqu'au bout.",

                // Tiny World
                tinyworldtitle: "Tiny World",
                tinyworlddescription: "Tiny Worlds est un de ces petits projets avec des délais serrés et dont les Foley's sont entièrement maison. À base de jouets et de machines de cuisine, on obtient un monde aux enjeux subtils dont les traits d'humour ne manquent pas.",

                // Arcane S1
                arcanes1title: "Extrait d'Arcane",
                arcanes1description: "Projet au Walla multiples, dont l'équipe et moi-même sommes amusés à produire. J'ai mis un trait d'honneur à la voix dans l'extrait, au centre de l'attention ou comme arrière-plan d'ambiance. La mise aux normes était ambitieuse, mais chaque détail a fini par trouver sa place.",

                // Oktapoli
                oktapolititle: "Oktapoli",
                oktapolidescription: "Un de mes premiers gros projets de sound design, son principal défi était les bruitages d'eau. De l'enregistrement grandeur nature, à la post production, qui demandait beaucoup de resynchronisation. Merci au soutien de l'équipe pédagogique et à l'investissement de la classe.",

                // Espérance
                esperancetitle: "Espérance",
                esperancedescription: "Court-métrage pour le Nikon festival, j'ai été à la prise de son en extérieur sur plateau de tournage, aidé d'une perchwoman. Puis à la post-production sonore, mixage et sound design compris.",

                // Castor
                artecastortitle: "Arte - Habitat Inédit Castor",
                artecastordescription: "Atelier soutenu par l'équipe pédagogique de l'école. Partant de zéro, il impliquait des enregistrements de bruitages, du sound design et du doublage en français en studio. Cela a été suivi d'une première approche de la création musicale et du mixage.",

                // Fubiz Pub
                fubiztitle: "Publicité - Fubiz",
                fubizdescription: "",

                // Dobly
                dolbytitle: "Publicité - Dolby",
                dolbydescription: "Ce sound design est axé sur l'exploration sensorielle et l'immersion spatiale. En jouant avec les canaux gauche et droit, je crée une expérience où les fréquences hautes et basses enveloppent l'auditeur, l'invitant à ressentir physiquement les éléments du son autour de lui. Mon objectif est de susciter des émotions profondes et une immersion totale dans un monde sonore parallèle, où chaque détail est soigneusement conçu pour captiver et transporter l'auditeur.",
            }
        }
    }
})