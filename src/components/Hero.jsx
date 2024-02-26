import React, { useEffect } from "react";
import Profile from "../assets/arturo.png";
import 'aos/dist/aos.css'
import AOS from 'aos';
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {

    // Initialize AOS
  React.useEffect(() => {
    AOS.init()
  }, [])


  return (
    
      <section className="bg-gray-100 gap-6 py-[160px]">
        <div data-aos="fade-left" data-aos-duration="3000" className="container mx-auto px-4 text-[#5b5b5b]">
          <div className="flex flex-wrap mx-4">
            <div className="w-full md:w-1/2 px-4">
              <h1 className="text-3xl md:text-4xl mb-10 font-semibold mb-4">
                SOBRE MÍ
              </h1>
              <p className="text-lg md:text-xl mb-10">
                Mi misión como Terapeuta Holístico es acompañarte y guiarte en
                tu camino de auto sanción a través de las principales fuentes de
                vida: respiración, nutrición, pensamiento
                (emociones-sentimientos) y movimiento (corporalidad).
              </p>

              <p className="text-lg md:text-xl mb-[100px]">
              Conseguirás la auto sanación mediante el auto conocimiento y la auto transformación del cuerpo, la mente, la energía y el entorno como un todo indivisible. Holística.
              </p>
                <h2 className="text-3xl md:text-2xl text-[#1b804a] mb-4">Haz clic aquí y envíame un whatsapp:</h2>
                
                <a href="https://api.whatsapp.com/send?phone=51963342232">
                
                <button className="bg-[#1b804a] flex items-center text-white px-5 py-2 rounded-md mb-5 ">
                    <i className=" mr-2"><FaWhatsapp /></i>WhatsApp
              </button>
                </a>
              
            </div>
            <div className="ml-auto">
              <img className="w-full h-auto rounded-lg" src={Profile} alt="Hero image" />
            </div>
          </div>
        </div>
      </section>

  );
};

export default Hero;
