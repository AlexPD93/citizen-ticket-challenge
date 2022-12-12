export default function categoriseFirstLetter(str) {
  const stringFirstCap = str.charAt(0).toUpperCase() + str.slice(1);
  return stringFirstCap;
}
