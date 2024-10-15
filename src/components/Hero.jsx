/* eslint-disable react/no-unescaped-entities */

import video1 from "../assets/video1.mp4"
import video2 from "../assets/v2.mp4"
import video3 from "../assets/v3.mp4"
import video4 from "../assets/v4.mp4"
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide">
    <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text"> THIAPATHIOLY SERVICE GLOBAL </span> <br /><br />ICI {" "}LE TEMPS C'EST NOTRE ALLIE
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    nous sommes passionnés par l'innovation et la technologie. Notre mission est de fournir des solutions informatiques sur mesure, adaptées aux besoins uniques de nos clients. Que vous soyez une petite entreprise cherchant à optimiser vos processus ou une grande organisation nécessitant des infrastructures robustes, <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text"> T.S.G </span> vous accompagne dans votre transformation digitale.
    </p>

    <div className="flex justify-center my-10">
        <a className="bg-gradient-to-r from-blue-400 to-blue-950 py-3 px-4 mx-3 rounded-md" href="">Telechager Borchure</a>
    </div>


    <div className="flex flex-wrap mt-10 justify-center">
    <div className="relative w-full md:w-1/2 lg:w-1/3 mx-2 my-4">
        <h2 className="absolute top-0 left-0 w-full text-center text-2xl md:text-4xl font-bold text-white bg-black bg-opacity-50 p-2">
            Développement Web & Mobile
        </h2>
        <video autoPlay loop muted className="rounded-lg w-full border border-blue-700 shadow-blue-400">
            <source src={video1} type="video/mp4" />
            Votre navigateur ne supporte pas cette vidéo.
        </video>
    </div>

    <div className="relative w-full md:w-1/2 lg:w-1/3 mx-2 my-4">
        <h2 className="absolute top-0 left-0 w-full text-center text-2xl md:text-4xl font-bold text-white bg-black bg-opacity-50 p-2">
            Intelligence Artificielle
        </h2>
        <video autoPlay loop muted className="rounded-lg w-full border border-blue-700 shadow-blue-400">
            <source src={video2} type="video/mp4" />
            Votre navigateur ne supporte pas cette vidéo.
        </video>
    </div>
</div>

<div className="flex flex-wrap mt-10 justify-center">
    <div className="relative w-full md:w-1/2 lg:w-1/3 mx-2 my-4">
        <h2 className="absolute top-0 left-0 w-full text-center text-2xl md:text-4xl font-bold text-white bg-black bg-opacity-50 p-2">
            Formation & Coaching
        </h2>
        <video autoPlay loop muted className="rounded-lg w-full border border-blue-700 shadow-blue-400">
            <source src={video3} type="video/mp4" />
            Votre navigateur ne supporte pas cette vidéo.
        </video>
    </div>

    <div className="relative w-full md:w-1/2 lg:w-1/3 mx-2 my-4">
        <h2 className="absolute top-0 left-0 w-full text-center text-2xl md:text-4xl font-bold text-white bg-black bg-opacity-50 p-2">
            Reseaux & Telecom
        </h2>
        <video autoPlay loop muted className="rounded-lg w-full border border-blue-700 shadow-blue-400">
            <source src={video4} type="video/mp4" />
            Votre navigateur ne supporte pas cette vidéo.
        </video>
    </div>
</div>

        
    </div>
  )
}

export default Hero