import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch(
      "https://assignment-10-server-eight-gold.vercel.app/touristspots/email/rifatul564@gmail.com"
    )
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);
  return (
    <Slider className="mx-auto mt-10" {...settings}>
      {slides.map((slide) => (
        <div
          className="flex justify-center items-center relative"
          key={slide._id}
        >
          <img
            className="md:w-full  h-[500px] mx-auto object-center rounded-xl"
            src={slide.photo}
          />
          <div className="absolute text-white opacity-80 top-32 space-y-0 md:space-y-3 md:right-[250px] lg:right-[420px] text-center w-[450px]">
            <h2 className="text-6xl font-semibold">{slide.spotName}</h2>
            <h3 className="text-4xl font-medium">{slide.country}</h3>
            <h3 className="flex items-center justify-center mx-auto gap-1 text-xl">
              <FaLocationDot />
              {slide.location}
            </h3>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slides;
