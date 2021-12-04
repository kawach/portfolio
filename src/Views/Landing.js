import React from "react";
import programming from "../assets/images/programing.svg"
import Navbar from "../components/Navbar.js";
import mcmUI from "../assets/images/uiMCMWALLET.png"
import gtgLogin from "../assets/images/good-to-go.PNG"
import chezGuido from "../assets/images/ChezGuido.PNG"
import Dawiki from "../assets/images/dawiki.PNG"
import {useTranslation} from "react-i18next";

export default function Landing() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar/>
            <main id={"Accueil"}>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                     style={{
                         minHeight: "75vh"
                     }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                         style={{
                             backgroundImage: `url(${programming})`
                         }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Victor Timmerman
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        {t("header")}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{height: "70px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </div>
                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fab fa-wordpress"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">CMS</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            {t("WordpressCard")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                            <i className="fas fa-laptop-code"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            {t('Programming')}
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            {t("ProgrammingCard")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <i className="fas fa-pencil-ruler"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Design
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            {t("DesignCard")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32" id={'projects'}>
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div
                                    className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                    <i className="fas fa-wallet"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    {t("MochimoHeader")}
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    {t("MochimoBody")}
                                </p>
                                <a
                                    href="http://mochimo-wallet.herokuapp.com/"
                                    className="font-bold text-gray-800 mt-8"
                                    target={"_blank"}
                                >
                                    {t("MochimoFooter")}
                                </a>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600 hover:scale-150">
                                    <img
                                        alt="..."
                                        src={mcmUI}
                                        className="w-full align-middle shadow-lg rounded-lg"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{height: "80px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src={gtgLogin}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div
                                        className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                        <i className="fas fa-columns"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        {t("gtgHeader")}
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        {t("gtgBody")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{height: "80px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div
                                        className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                        <i className="fas fa-columns"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        Dawiki
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        A Wordpress Theme developed using @WordPress/create-block and Wordpress's native categories to allow end users to store and retrieve information about his company
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src={Dawiki}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative bg-gray-300 py-32">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{height: "80px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="0 0, 2560 100, 0 100"
                            />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src={chezGuido}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div
                                        className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                        <i className="fas fa-utensils"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        {t("GuidoHeader")}
                                    </h3>
                                    <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
                                        {t("GuidoBody")}
                                    </p>
                                    <a
                                        href="https://chez-guido.fr/"
                                        className="font-bold text-gray-800 mt-8"
                                        target={"_blank"}
                                    >
                                        chezGuido.fr
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-20 relative block bg-gray-900">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{height: "80px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-900 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    {t("ContactHeader")}
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    {t("ContactBody")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="block py-24 lg:pt-0 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            {t("FormTitle")}
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                            {t("FormInfo")}
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                {t("FormLabelName")}
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder={t('FormPHName')}
                                                style={{transition: "all .15s ease"}}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Email"
                                                style={{transition: "all .15s ease"}}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                cols="80"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder={t('FormPHMessage')}
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{transition: "all .15s ease"}}
                                            >
                                                {t('FormSend')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}