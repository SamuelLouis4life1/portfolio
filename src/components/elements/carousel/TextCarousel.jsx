import React, { useState, useEffect } from 'react';
import '../carousel/textCarousel.css';
import { withTranslation } from "react-i18next";

const phrases  = [
  { text: 'Phrases can function in the sentence like nouns, adverbs, or adjectives. Seven common types.', author: 'Nelson test4' },
  { text: 'Phrases can function in the sentence like nouns, adverbs, or adjectives. Seven common types.', author: 'Nelson Mandela test4' },
  { text: 'The only limit to our realization of tomorrow will be our doubts of today.', author: 'Franklin D. Roosevelt' },
  { text: 'oiuohdnb The only limit to our realization of tomorrow will be our doubts of today test.', author: 'Franklin D. Roosevelt test' },
  { text: 'bdfgçl The only limit to our realization of tomorrow will be our doubts of today test.', author: 'Franklin sl  D. Roosevelt test' },
  { text: 'Often phrases are used for descriptions of people, things, or events. Examples:', author: 'Mandela' },
  { text: 'Often phrases are used for descriptions of people, things, or events. Examples:', author: 'Mandela author' },
];

export function TextCarousel(pros) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="text-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {phrases.map((phrase, index) => (
          <div key={index} className="carousel-item">
            <p>{phrase.text}</p>
            <p className="author">{phrase.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(TextCarousel);