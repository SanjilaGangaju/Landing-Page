import React from "react";
import Cards from "../Card/Cards";

const Hero = () => {
  return (
    <main>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-20 py-[2rem] lg:py-[5rem] px-2 lg:px-12 items-center">
        
        {/* LEFT SIDE (text + buttons) */}
        <div className="flex flex-col gap-[39px] w-full sm:order-2 md:order-1 lg:order-1 order-2">
          <h1 className="font-[poppins] text-[#333333] font-bold text-[36px] md:text-[56px] lg:text-[3rem]">
            Start your journey by one click, explore beautiful world!
          </h1>
          <p className="font-[poppins] text-[#333333] text-[16px] md:text-lg lg:text-xl">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us!
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-2 lg:gap-5 justify-start">
            <div className="bg-[#1d1d1d]  cursor-pointer flex items-center justify-center gap-2 py-2 px-2 hover:bg-black rounded">
              <div className="w-1/7">
                <img className="w-full" src="/images/playstoreicon.png" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-gray-50 text-[10px] md:text-xs font-bold">
                  GET IT ON
                </span>
                <span className="text-gray-50 text-[14px] md:text-lg font-bold">
                  Google Play
                </span>
              </div>
            </div>
             <div className="bg-[#1d1d1d]  cursor-pointer flex items-center justify-center gap-2 py-2 px-2 hover:bg-black rounded">
              <div className="w-1/6">
                <img className="w-full" src="/images/applelogo.png" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-gray-50 text-[10px] md:text-xs font-bold">
                  DOWNLOAD ON
                </span>
                <span className="text-gray-50 text-[14px] md:text-lg font-bold">
                  App Store
                </span>
              </div>
            </div>

           
          </div>
        </div>

        {/* RIGHT SIDE (image + overlays) */}
        <div className="order-1 md:order-2 lg:order-2 sm:order-1">
          <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-[900px] mx-auto">
            {/* Background image */}
            <img
              className="w-full h-auto object-cover rounded-full"
              src="/images/bg.png"
              alt="Background"
            />

            {/* Hero Image */}
            <div className="absolute bottom-[5%] right-[7%] w-[85%] h-[85%] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src="/images/heroimage.png"
                alt="Hero"
              />
            </div>

            {/* Frame overlay */}
            <div className="absolute top-[8%] lg:top-[5%] lg:left-[20%]  left-[8%] ">
              <img src="/images/Frame 11.png" alt="Frame" />
            </div>

            {/* Card 1 */}
            <div className="absolute top-[65%] left-[5%] w-[45%]">
              <Cards
                w="large"
                title="Explore Labuan Pajo"
                img="/images/Rectangle 9.png"
                location="NTT, Indonesia"
              />
            </div>

            {/* Card 2 */}
            <div className="absolute hidden md:block top-[30%] right-[0%] w-[35%]">
              <Cards
                w="medium"
                title="LePirate Hotel"
                img="/images/Rectangle 9.png"
                location="Flores, Indonesia"
              />
            </div>

            {/* Flight badge */}
            <div className="absolute top-[20%] left-[70%] md:left-[70%] lg:left-[80%] bg-gray-50 flex items-center justify-center gap-1 py-1 px-2 rounded-full ">
              <img
                className="w-4 h-4 lg:w-5 lg:h-5"
                src="/images/ic_baseline-flight.png"
                alt="flight"
              />
              <p className="text-[11px] md:text-[13px] lg:text-[25px]">Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
