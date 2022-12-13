export default function capitaliseFirstLetter(str) {
  // Only run this if there is a string from datastore
  if (str) {
    const stringFirstCap = str.charAt(0).toUpperCase() + str.slice(1);
    return stringFirstCap;
  }
}
