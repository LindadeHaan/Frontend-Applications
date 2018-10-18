export const setValueToFactor = (optionName, factor) => {
  const dataFactors = window.dataFactors || []

  // Look factor for index or an object with optionName (lika a loop)
  // findIndex = only searches for the index
  const factorByIndex = dataFactors[dataFactors.findIndex(factor => factor.name === optionName)]
  console.log(factorByIndex)
  factorByIndex.factor = factor
  // Set value to factor
}
