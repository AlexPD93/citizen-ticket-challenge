import { HexColorPicker } from "react-colorful";

export default function ColourPicker({ color, onChange }) {
  return (
    <div className="ColourPicker">
      <HexColorPicker color={color} onChange={onChange} />
    </div>
  );
}
