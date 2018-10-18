export const setValueToFactor = (optionName, factor) => {
  const dataFactors = window.dataFactors || []

  //look foactor for index or an object with optionName (lika a loop)
  //findIndex = gaat alleen op zoek naar de index
  const factorByIndex = dataFactors[dataFactors.findIndex(factor => factor.name === optionName)]
  console.log(factorByIndex)
  factorByIndex.factor = factor
  // set value to factor
}
