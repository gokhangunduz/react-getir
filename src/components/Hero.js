import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

function Hero() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const [country, setCountry] = useState("TR");

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="Getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="Getir"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Getir"
          />
          <h3 className="text-4xl text-white font-semibold mt-8">
            Dakikalar içinde
            <br />
            kapınızda
          </h3>
        </div>
        <div className="flex flex-col rounded-md p-6 w-[400px] bg-white">
          <h3 className="text-l font-semibold text-primary-color text-center mb-4 ">
            Giriş yap veya kayıt ol
          </h3>
          <div className="flex">
            <ReactFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT","TR"]}
              customLabels={{
                US: "+1",
                GB: "+24",
                FR: "+30",
                DE: "+41",
                IT: "+44",
                TR: "+90"
              }}
              selected={country}
              onSelect={(country) => setCountry(country)}
              className="flag-country pr-2"
            />
            <input
              className="h-14 px-4 border-solid border-2 hover:border-brand-color focus:border-brand-color transition-colors rounded-lg w-full"
              type="text"
              placeholder="Telefon Numarası"
            />
          </div>
            <div className="pt-2">
            <button className="flex justify-center items-center w-full text-sm rounded-md font-semibold bg-brand-yellow-color p-6 h-[48px] text-primary-color hover:bg-primary-color hover:text-brand-yellow-color transition-all ">
            Telefon numarası ile devam et
          </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
