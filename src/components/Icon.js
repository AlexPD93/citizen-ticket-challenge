import { useState } from "react";

import Home from "../Icons/home.png";
import Bank from "../Icons/bank.png";
import Coffee from "../Icons/coffee.png";
import Dumbbell from "../Icons/dumbbell.png";
import Eating from "../Icons/eating.png";
import Football from "../Icons/football.png";
import Headphones from "../Icons/headphone.png";
import Movie from "../Icons/movie.png";
import Theatre from "../Icons/theatre.png";
import Wine from "../Icons/wine.png";

import "./Icon.css";

export default function Icon({ chosenIcon, setChosenIcon }) {
  const [isShown, setIsShown] = useState(false);
  const icons = [
    {
      src: Home,
      alt: "Home",
    },
    {
      src: Bank,
      alt: "Bank",
    },
    {
      src: Coffee,
      alt: "Coffee",
    },
    {
      src: Dumbbell,
      alt: "Dumbbell",
    },
    {
      src: Eating,
      alt: "Eating",
    },
    {
      src: Football,
      alt: "Football",
    },
    {
      src: Headphones,
      alt: "Headphones",
    },
    {
      src: Movie,
      alt: "Movie",
    },
    {
      src: Theatre,
      alt: "Theatre",
    },
    {
      src: Wine,
      alt: "Wine",
    },
  ];

  function handleClick(e) {
    setChosenIcon(e.target.id);
  }

  function toggleDisplay(e) {
    e.preventDefault();
    setIsShown((current) => !current);
  }
  return (
    <div className="Icon">
      <button className="choose-icon" onClick={toggleDisplay}>
        Choose an Icon +
      </button>
      <div className="icon-container">
        {isShown &&
          icons.map((icon, i) => {
            return (
              <img
                className={`icon ${icon.src === chosenIcon ? "selected" : ""}`}
                key={i}
                id={icon.src}
                src={icon.src}
                alt={icon.alt}
                onClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
}
