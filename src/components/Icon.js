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

export default function Icon({ chosenIcon, setChosenIcon }) {
  const icons = [
    Home,
    Bank,
    Coffee,
    Dumbbell,
    Eating,
    Football,
    Headphones,
    Movie,
    Theatre,
    Wine,
  ];

  function handleClick(e) {
    setChosenIcon(e.target.id);
  }
  return (
    <div className="Icon">
      {icons.map((icon) => {
        return <img id={icon} src={icon} alt={icon} onClick={handleClick} />;
      })}
    </div>
  );
}
