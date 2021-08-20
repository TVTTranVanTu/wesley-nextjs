import React, { useState } from "react";
import { sliderData } from "../../data";
import Image from "next/image";
import vetrang from "../../assets/img/slider/Vetrang.png";
import cainhiep from "../../assets/img/slider/cainhiep.jpeg";

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const chunkArray = (myArray: { image: string }[], chunk_size: number) => {
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  const result = chunkArray(sliderData, 6);
  const length = result.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  if (!Array.isArray(result) || result.length <= 0) {
    return null;
  }

  //setTimeout(nextSlide, 7000);
  return (
    <div className="slider">
      <div className="container">
        <div className="slider__content">
          <button
            type="button"
            className="arrow arrow__prev"
            onClick={prevSlide}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="arrow arrow__next"
            onClick={nextSlide}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="slider__list">
            {result.map((slide, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current ? "slider__item active" : "slider__item"
                  }
                >
                  {index === current && (
                    <div>
                      <div className="slide">
                        <div className="slide__images">
                          <div className="slide__item left">
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img1"
                                src={slide[0].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img2"
                                src={slide[1].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img3"
                                src={slide[2].image}
                              />
                            </div>
                          </div>
                          <img
                            src="data:image/jpeg;base64,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"
                            className="logo__banner bn-right"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="slide">
                        <div className="slide__images">
                          <img
                            src="data:image/jpeg;base64,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"
                            className="logo__banner bn-left"
                            alt="img"
                          />
                          <div className="slide__item right">
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img4"
                                src={slide[3].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img5"
                                src={slide[4].image}
                              />
                            </div>
                            <div className="image__content">
                              <img
                                alt="slider"
                                className="slider__image img6"
                                src={slide[5].image}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
