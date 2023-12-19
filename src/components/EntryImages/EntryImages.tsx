import React, { useState } from "react";
import "./EntryImages.css";

const slides = [
  { url: "http://localhost:3000/image1.jpeg", title: "Image 1" },
  { url: "http://localhost:3000/image2.jpeg", title: "Image 2" },
  { url: "http://localhost:3000/image3.jpeg", title: "Image 3" },
];

export default function EntryImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onRightClick() {
    if (currentIndex + 1 < slides.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function onLeftClick() {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  const leftArrowStyles = {
    position: "absolute",
    top: "28%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "25px",
    color: "#fff",
    zIndex: 1,
  } as React.CSSProperties;

  const rightArrowStyles = {
    position: "absolute",
    top: "28%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "25px",
    color: "#fff",
    zIndex: 1,
  } as React.CSSProperties;

  const containerStyles = {
    width: "350px",
    height: "300px",
    margin: "0 auto",
  };

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const dotsContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3 px",
    cursor: "pointer",
    fontSize: "40px",
  };

  return (
    <>
      <div style={containerStyles}>
        <div style={leftArrowStyles} onClick={onLeftClick}>
          &#10094;
        </div>
        <div style={rightArrowStyles} onClick={onRightClick}>
          &#10095;
        </div>
        <div style={slideStyles} onClick={onRightClick} />
        <div style={dotsContainer}>
          {slides.map((slide, slideIndex) => (
            <div
              style={dotStyles}
              key={slide.title}
              onClick={() => setCurrentIndex(slideIndex)}
            >
              &bull;
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
