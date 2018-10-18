export const riskPercentageToWindow = () => {
  const dataFactors = window.localStorage.getItem('dataFactors') || []

  // Set the start of all the selects factor to 0. It changes when an answer is clicked.
  if(!dataFactors.length > 0) {
    window.dataFactors = [
      {
        name: 'divorced',
        factor: 0
      },
      {
        name: 'sex',
        factor: 0
      },
      {
        name: 'age',
        factor: 0
      },
      {
        name: 'age-mother-birth',
        factor: 0
      },
      {
        name: 'age-father-birth',
        factor: 0
      },
      {
        name: 'age-difference',
        factor: 0
      },
      {
        name: 'origin',
        factor: 0
      },
      {
        name: 'help',
        factor: 0
      },
      {
        name: 'house',
        factor: 0
      },
      {
        name: 'type-household',
        factor: 0
      },
      {
        name: 'crime-child',
        factor: 0
      },
      {
        name: 'child-HALT',
        factor: 0
      },
      {
        name: 'crime-father',
        factor: 0
      },
      {
        name: 'crime-mother',
        factor: 0
      },
      {
        name: 'victim',
        factor: 0
      },
      {
        name: 'social-participation-father',
        factor: 0
      },
      {
        name: 'social-participation-mother',
        factor: 0
      },
      {
        name: 'economic-status-father',
        factor: 0
      },
      {
        name: 'economic-status-mother',
        factor: 0
      },
      {
        name: 'kind-of-education',
        factor: 0
      },
      {
        name: 'education-level',
        factor: 0
      },
      {
        name: 'change-of-education',
        factor: 0
      },
      {
        name: 'early-school-leaver',
        factor: 0
      },
      {
        name: 'education-level-father',
        factor: 0
      },
      {
        name: 'education-level-mother',
        factor: 0
      }

    ]

    try {
      window.localStorage.setItem('dataFactors', JSON.stringify(window.dataFactors))
    } catch (error) {
      throw new Error (error)
    }
  } else {
    try {
      // Write JS in JSON to window
      window.dataFactors = JSON.parse(window.localStorage.getItem('dataFactors'))
    } catch (error) {
      throw new Error (error)
    }
  }
}
