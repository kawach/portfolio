import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "header":"young french developer who's computing enthusiast at every level since born",
            "WordpressCard": "I'm used to use CMSs since a while, i've learnt WordPress Theme & plugins development. Send me a message for development proposal",
            "Programming": "Programming",
            "ProgrammingCard": "If you have any inquiries about developments, let's talk !",
            "DesignCard": "As a developer, I like to see end users enjoying what I'm doing so we must design nice UI",
            "MochimoHeader": "Mochimo Web Wallet",
            "MochimoBody": "An UI to handle mnemonic pass phrase for the Mochimo Blockchain, it's been created using React there is no backend as users wants privacy & don't need we store any kind of data\n" +
                "WOTS+ encryption ported to Javascript",
            "MochimoFooter": "Online preview : here",
            "gtgHeader": "Good-To-Go Dashboard",
            "gtgBody": "I've create for Good-To-Go company a dashboard who's connected to every tools they use, like sophos, solarwinds, acronis and Microsoft It allows to create new customer - handle them tool's executable - retreive any data about customers and more in one place",
            "dawikiHeader": "Dawiki",
            "dawikiBody": "A Wordpress Theme developed using @WordPress/create-block and Wordpress's native categories to allow end users to store and retrieve information about his company",
            "GuidoHeader": "Chez Guido",
            "GuidoBody": "A site for a restaurant, people can order and client is able to change everything in his menu",
            "ContactHeader": "Contact Me",
            "ContactBody": " Here you can contact me. I enjoy nice conversation, fell free to send an e-mail related to development",
            "FormTitle":"You got a project in mind?",
            "FormInfo":"Let's talk about it",
            "FormLabelName":"FULL NAME",
            "FormPHName":"Full Name",
            "FormPHMessage":"Type a message",
            "FormSend":"SEND MESSAGE",

        }
    },
    fr: {
        translation: {
            "header":"Jeune développeur français passionné d'informatique dans tous ses domaines depuis ma naissance.",
            "WordpressCard": "Habitué et familier de WordPress, faites-moi part de tout besoin concernant le développement d'un plugin ou d'un thème. ",
            "Programming": "Développement",
            "ProgrammingCard": "Passionné de développement, tout défi ou tâche m'intéresse.",
            "DesignCard": "En tant que développeur, j'aime voir les utilisateurs finaux apprécier ce que je fais. Cela me permet de concevoir une belle interface utilisateur.",
            "MochimoHeader": "Portefeuille Web Mochimo",
            "MochimoBody": "Une interface qui permet de gérer la phrase mnémonique d’une wallet pour la Blockchain Mochimo. L’application a été créée à l'aide de ‘create React app’. Il n'y a pas de backend car les utilisateurs veulent de la confidentialité et n'ont besoin de stocker aucun type de données.\n" +
                "Cryptage WOTS+ porté vers Javascript",
            "MochimoFooter": "Visuel en ligne disponnible : ici",
            "gtgHeader": "Tableau de bord Good-to-Go",
            "gtgBody": "Crée pour faciliter l'utilisation de différents outils informatiques tels que ceux de Microsft, Sophos, Acronis ou encore N-able. Effectue des appels API pour répondre aux besoins de mon client et stocker ses données sur le cloud.",
            "dawikiHeader": "Dawiki",
            "dawikiBody": "Un site entièrement réalisé sous Wordpress grâce à la création d'un thème et de plugins. Il permet la centralisation des données de l'entreprise",
            "GuidoHeader": "Chez Guido",
            "GuidoBody": "Un site utilisant un thème Wordpress ainsi qu'un plugin pour la gestion des commandes.",
            "ContactHeader": "Contactez moi",
            "ContactBody": " Vous pouvez me joindre pour toute demande concernant le développement ",
            "FormTitle":"Vous avez un besoin ou une idée en tête ?",
            "FormInfo":"Ecrivez moi et parlons-en !",
            "FormLabelName":"Nom",
            "FormPHName":"Entrez votre nom",
            "FormPHMessage":"Entrez votre message",
            "FormSend":"Envoyez",


        }
    }
};
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });
export default i18n;