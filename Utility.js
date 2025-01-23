/**
 * Converts kilograms to grams.
 * @param {number} kg - The value in kilograms.
 * @returns {number} - The value converted to grams.
 */
export function kgToGrams(kg) {
  if (typeof kg !== 'number' || kg < 0) {
    throw new Error('Invalid input: Provide a non-negative number for kilograms.');
  }
  return kg * 1000 + " Grams";
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - The value in Fahrenheit.
 * @returns {number} - The value converted to Celsius.
 */
export function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== 'number') {
    throw new Error('Invalid input: Provide a valid number for Fahrenheit.');
  }
  return (fahrenheit - 32) * 5 / 9 + " Celsius";
}

/**
 * Converts pounds to kilograms.
 * @param {number} pounds - The value in pounds.
 * @returns {number} - The value converted to kilograms.
 */
export function poundsToKilograms(pounds) {
  if (typeof pounds !== 'number' || pounds < 0) {
    throw new Error('Invalid input: Provide a non-negative number for pounds.');
  }
  return pounds * 0.453592 + " Kilograms";
}

/**
 * Converts yards to meters.
 * @param {number} yards - The value in yards.
 * @returns {number} - The value converted to meters.
 */
export function yardsToMeters(yards) {
  if (typeof yards !== 'number' || yards < 0) {
    throw new Error('Invalid input: Provide a non-negative number for yards.');
  }
  return yards * 0.9144 + " Meters";
}

/**
 * Changes the background color of the webpage based on input (My one DOM manipulation function)
 * @param {string} value - The value entered (0 for white, 1 for light blue, 2 for red).
 */
export function changeBackgroundColor(value) {
  if (value === '0') {
    document.body.style.backgroundColor = 'white';
  } else if (value === '1') {
    document.body.style.backgroundColor = 'lightblue';
  } else if (value === '2') {
    document.body.style.backgroundColor = 'red';
  } else {
    throw new Error('Invalid input: Enter 0 for white, 1 for light blue and 2 for red.');
  }
}