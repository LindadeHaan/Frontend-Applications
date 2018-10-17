// export a function so you can import it to your file where you need it.
export const setNewLocalStorage = (optionName, selectedValue, keyValue) => {
  const data = window.localStorage.getItem('data') || [];
  try {
    // parse data to JSON
    const parsedData = JSON.parse(data);
    // set default data
    parsedData[0][keyValue][optionName] = selectedValue;
    //set item in localStorage
    window.localStorage.setItem('data', JSON.stringify(parsedData));
  }
  catch (error) {
    throw new Error(error);
  }
}
