import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.webp'
import slide4 from '../assets/slide4.webp'
import './Carousel.css'
const Slideshow = () => {
  const slides = [
    { image: slide1, text: "Welcome to Our Store" },
    { image: slide2, text: "Discover Amazing Deals" },
    { image: slide3, text: "Shop Your Favorite Items" },
    { image: slide4, text: "Hurry, Limited Offers!" }
  ]; // Replace with your image URLs and text

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
          <img src={slide.image} alt={`Slide ${index}`} className="slide" />
          <div className="overlay-text">{slide.text}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
