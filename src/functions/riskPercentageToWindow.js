export const riskPercentageToWindow = () => {
  const dataFactors = window.localStorage.getItem('dataFactors') || []

  if(!dataFactors.length > 0) {
    window.dataFactors = [
      {
        name: 'divorced',
        factor: 0
      },

    ]

    try {
      window.localStorage.setItem('dataFactors', JSON.stringify(window.dataFactors))
    } catch (error) {
      throw new Error (error)
    }
  } else {
    try {
      //write JS in JSON to window
      window.dataFactors = JSON.parse(window.localStorage.getItem('dataFactors'))
    } catch (error) {
      throw new Error (error)
    }
  }
}
