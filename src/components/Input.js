export default function Input({ category, setCategory }) {
  function getValue(e) {
    setCategory(e.target.value);
  }
  return (
    <div className="input">
      <input type="text" onChange={getValue} />
    </div>
  );
}
