import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      <div className="container px-[7%] flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
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
        <div className="flex flex-col rounded-md p-5 bg-white">
          <h3 className="text-l font-semibold text-primary-color text-center">
            Giriş yap veya kayıt ol
          </h3>
          <div className="flex">
            <select name="" id=""></select>
            <input
              className="border-solid border-1 border-brand-color"
              type="text"
              placeholder="Telefon Numarası"
            />
          </div>
          <button className="flex justify-center items-center w-full text-sm rounded-md font-semibold bg-brand-yellow-color p-6 h-[48px] text-primary-color">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
