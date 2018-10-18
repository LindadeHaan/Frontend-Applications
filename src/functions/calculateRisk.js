// Export a function so you can import a function in your components.
export const calculateRisk = (values) => {
  // No values: return null
  if (!values) {
    return null
  }

  const totalValue = values
  // Loop over obj, so it only returns the values in the array instead of obj and it's values.
  // Basicly a for loop
  .map(obj => obj.factor)
  // 0 is startvalue
  // Always starts counting at 0.
  // If you change 0 to another number your startValue is different.
  .reduce((calculator, currentValue) => calculator + currentValue, 0)

// Formula to calculate risk
// Source: Slack Folker-Jan
  return Number((1 / (1 + Math.exp(-1 * (-8.57219 + totalValue))) * 100).toFixed(2))
}
