import { HexColorPicker } from "react-colorful";

import { useState } from "react";

export default function ColourPicker({ onChange }) {
  const [isShown, setIsShown] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsShown((current) => !current);
  }
  return (
    <div className="ColourPicker">
      <button onClick={handleClick}>Choose a colour +</button>
      {isShown && <HexColorPicker onChange={onChange} />}
    </div>
  );
}
