export const calculateRisk = (values) => {
  // no values: return null
  if (!values) {
    return null
  }

  const totalValue = values
  //loop over obj, so it only returns the values in the array instead of obj and it's values.
  // basicly a for loop
  .map(obj => obj.factor)
  // 0 is startvalue
  // begint altijd met tellen vanaf 0.
  // als je van 0 een ander cijfer maakt, begint je met een andere startvalue
  .reduce((calculator, currentValue) => calculator + currentValue, 0)

// formule voor het berekenen van risco/
  return Number((1 / (1 + Math.exp(-1 * (-8.57219 + totalValue))) * 100).toFixed(2))
}
