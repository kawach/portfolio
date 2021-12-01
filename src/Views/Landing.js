import React from "react";
import programming from "../assets/images/programing.svg"
import Navbar from "../components/Navbar.js";
import mcmUI from "../assets/images/uiMCMWALLET.png"
import gtgLogin from "../assets/images/good-to-go.PNG"
export default function Landing() {
    return (
        <>
            <Navbar/>
            <main>
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
                                        Timmerman Victor
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        A young french developer who's computing enthusiast at every level since born
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
                                            I'm used to use CMSs since a while, i've learnt WordPress Theme & plugins development. <br />
                                            Send me a message for development proposal
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
                                            Programming
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            If you have any inquiries about developments, let's talk !
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
                                            As a developer, I like to see end users enjoying what I'm doing so we must design nice UI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32" id={'projects'}>
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div
                                    className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Mochimo Web Wallet
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    An UI to handle mnemonic pass phrase for the Mochimo Blockchain, it's been created using React there is
                                    no backend as users wants privacy & don't need we store any kind of data<br />
                                    WOTS+ encryption ported to Javascript
                                </p>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                                    className="font-bold text-gray-800 mt-8"
                                >
                                    Online preview : <a href={"http://mochimo-wallet.herokuapp.com/"} target={"_blank"}> Click here </a>
                                </a>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                    <img
                                        alt="..."
                                        src={mcmUI}
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block"
                                            style={{
                                                height: "95px",
                                                top: "-94px"
                                            }}
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-pink-600 fill-current"
                                            >

                                            </polygon>
                                        </svg>
                                        <p className="text-md font-light mt-2 text-white">
                                            Login page where users can load there file or use a mnemonic pass phrase
                                        </p>
                                    </blockquote>
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
                                        className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        Company Dashboard
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        I've create for Good-To-Go company a dashboard who's connected to every tools they use, like sophos, solarwinds, acronis and Microsoft <br />
                                        It allows to create new customer - handle them tool's executable - retreive any data about customers and more in one place
                                    </p>
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
                                    Contact me
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    Here you can contact me. I enjoy nice conversation, fell free to send an e-mail related to development
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    CMS
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500">
                                    I'm used to use CMSs since a while, i've learnt WordPress Theme & plugins development. <br />
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Programming
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    If you have any inquiries about developments, let's talk !
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Design
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    As a developer, I like to see end users enjoying what I'm doing so we must design nice UI
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            You got a project in mind?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                            Let's complete this form so we'll talk about it
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Full Name"
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
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{transition: "all .15s ease"}}
                                            >
                                                Send Message
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