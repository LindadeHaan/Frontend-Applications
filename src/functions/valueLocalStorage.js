// Source: Maikel van Veen
// Explanation: Chelsea Dekker
// storageKey: names of the pages. data array
// storageName: names of the selects
export const valueLocalStorage = (storageKey, storageName) => {
  // Gets the data from localStorage
  const data = window.localStorage.getItem('data')

  try {
    const parsedData = JSON.parse(data)
    // User number 1
    // Gets storageKey and storageName
    return parsedData[0][storageKey][storageName]
  }
  // Handle the error
  catch (error) {
    throw new Error(error)
  }
}
