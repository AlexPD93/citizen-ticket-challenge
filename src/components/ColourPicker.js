import { HexColorPicker } from "react-colorful";
import { useState } from "react";
export default function ColourPicker() {
  const [color, setColor] = useState("#aabbcc");
  console.log(color);
  return (
    <div className="ColourPicker">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
}
