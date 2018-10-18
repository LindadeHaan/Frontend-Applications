// Source: Maikel van Veen
// Explanation: Chelsea Dekker
// Export a function so you can import it to your file where you need it.
export const newLocalStorage = (optionName, selectedValue, keyValue) => {
  const data = window.localStorage.getItem('data') || [];
  try {
    // Parse data to JSON
    const parsedData = JSON.parse(data);
    // Set default data
    parsedData[0][keyValue][optionName] = selectedValue;
    // Set item in localStorage
    window.localStorage.setItem('data', JSON.stringify(parsedData));
  } catch (error) {
    throw new Error(error);
  }
}
