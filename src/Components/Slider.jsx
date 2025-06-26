import React, { useState, useEffect } from "react";

const slides = [
  {
    id: "slide1",
    img: "https://i.postimg.cc/m2Rfc5nK/chang-duong-Sj0i-Mtq-Z4w-unsplash.jpg",
    caption: "Beautiful Mountain Road",
  },
  {
    id: "slide2",
    img: "https://i.postimg.cc/x1Tw5bnR/mike-swigunski-6-Sg-LJg7k-M7-E-unsplash.jpg",
    caption: "Sunset Over The City",
  },
  {
    id: "slide3",
    img: "https://i.postimg.cc/Dy7HfbJT/akson-1-K8p-Ib-Irhk-Q-unsplash.jpg",
    caption: "Calm Lake in the Morning",
  },
  {
    id: "slide4",
    img: "https://i.postimg.cc/bwJ5kc9V/duy-pham-Cecb0-8-Hx-o-unsplash.jpg",
    caption: "Forest Pathway Adventure",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Manual navigation handlers
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div
      className="relative w-full h-52 md:h-96 lg:h-[600px] overflow-hidden rounded-lg shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // gradient background
      }}
    >
      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20  bg-opacity-50 text-white px-4 py-2 rounded-md text-xl md:text-3xl lg:text-5xl font-bold text-center shadow-md">
        {slides[currentIndex].caption}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.caption}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.85)" }} // Slight dark overlay for text contrast
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
