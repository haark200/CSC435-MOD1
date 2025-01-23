/**
 * Importing utility functions.
 */
import { kgToGrams, fahrenheitToCelsius, poundsToKilograms, yardsToMeters, changeBackgroundColor } from './Utility.js';

/**
 * Handling button conversion process between our 5 cases.
 */
document.getElementById('convertButton').addEventListener('click', function() {
  const inputValue = document.getElementById('inputValue').value;
  const conversionType = document.getElementById('conversionType').value;

  let result;

  try {
    switch (conversionType) {
      case 'kgToGrams':
        result = kgToGrams(parseFloat(inputValue));
        break;
      case 'fahrenheitToCelsius':
        result = fahrenheitToCelsius(parseFloat(inputValue));
        break;
      case 'poundsToKilograms':
        result = poundsToKilograms(parseFloat(inputValue));
        break;
      case 'yardsToMeters':
        result = yardsToMeters(parseFloat(inputValue));
        break;
      case 'changeBgColor':
        changeBackgroundColor(inputValue);
        if (inputValue === '0') {
          result = 'Background color changed to white';
        } else if (inputValue === '1') {
          result = 'Background color changed to light blue';
        } else if (inputValue === '2') {
          result = 'Background color changed to red';
        }
        break;
      default:
        throw new Error('Unknown conversion type');
    }

    document.getElementById('result').innerText = result;
  } catch (error) {
    document.getElementById('result').innerText = error.message;
  }
});
