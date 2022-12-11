import { HexColorPicker } from "react-colorful";

export default function ColourPicker({ onChange }) {
  return (
    <div className="ColourPicker">
      <HexColorPicker onChange={onChange} />
    </div>
  );
}
