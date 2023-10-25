export function getRandomStringFromArray(array) {
  // Generate a random index within the array's length
  const randomIndex = Math.floor(Math.random() * array.length);

  // Use the random index to select a random string from the array
  return array[randomIndex];
}