// Import all the functions and files you need in this particular file.
//Searches for a Polymer element, because you make an element in this file.
//You need this to be able to make a component.
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { newLocalStorage } from '../functions/newLocalStorage.js';
import { valueLocalStorage } from '../functions/valueLocalStorage.js';
import { factorValue } from '../functions/factorValue.js';

class GeneralForm extends PolymerElement {
  static get template() {
    // You can write html
    return html `

<style include="shared-styles">

    </style>
      <fieldset>

        <div class="dropdowns">
          <label>Geslacht</label>
          <select name="sex" id="sex" on-change="onChangeAnswer">
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="man">Man</option>
          <option value="woman">Vrouw</option>
          </select>
        </div>

        <div class="dropdowns">
          <label>Leeftijd van het kind</label>
          <select name="age" id="age" on-change="onChangeAnswer">
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="0-4years">0 tot 4 jaar</option>
          <option value="4-8years">4 tot 8 jaar</option>
          <option value="8-12years">8 tot 12 jaar</option>
          <option value="12-16years">12 tot 16 jaar</option>
          <option value="16-18years">16 tot 18 jaar</option>
          </select>
        </div>

        <div class="dropdowns">
          <label>Leeftijd moeder bij geboorte</label>
          <select name="age-mother-birth" id="age-mother-birth" on-change="onChangeAnswer">
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="younger20">jonger dan 20 jaar</option>
          <option value="20-25years">20 t0t 25 jaar</option>
          <option value="25-30years">25 tot 30 jaar</option>
          <option value="30-35years">30 tot 35 jaar</option>
          <option value="35-40years">35 tot 40 jaar</option>
          <option value="older40">40 jaar en ouder</option>
          </select>
        </div>

        <div class="dropdowns">
          <label>Leeftijd vader bij geboorte</label>
          <select name="age-father-birth" id="age-father-birth" on-change="onChangeAnswer">
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="younger25">jonger dan 25 jaar</option>
          <option value="25-30years">25 tot 30 jaar</option>
          <option value="30-35years">30 tot 35 jaar</option>
          <option value="35-40years">35 tot 40 jaar</option>
          <option value="older40">40 jaar en ouder</option>
          </select>
        </div>

        <div class="dropdowns">
          <label>Leeftijdsverschil tussen ouders</label>
          <select name="age-difference" id="age-difference" on-change="onChangeAnswer">
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="lessThan5">Minder dan 5 jaar</option>
          <option value="moreThan5">Meer dan 5 jaar</option>
          </select>
        </div>

        <div class="dropdowns">
          <label>Herkomst van de ouders</label>
          <select name="origin" id="origin" on-change="onChangeAnswer">
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="dutch">Beide ouders Nederlands</option>
          <option value="notDutch">Beide ouders niet Nederlands</option>
          <option value="oneDutch">Eén van de ouders Nederlands en de ander niet Nederlands</option>
          </select>
        </div>

        <div class="dropdowns">
          <label>Hulptraject</label>
          <select name="help" id="help" on-change="onChangeAnswer">
          <option selected="selected" value="no">Geen jeugdhelp zonder verblijf gehad</option>
          <option value="yes">Jeugdhulp zonder verblijf gehad</option>
          </select>
        </div>

      </fieldset>
`;
  }

  // Source: Maikel van Veen. He figured out the code.
  // Explanation: Chelsea Dekker. She explained the code to us so we'd know what the code does
  // Searching for the value that is similar to the select name.
  // Is called when the answer is changed.
  onChangeAnswer(event) {
    //Searches for target in event.
    // const target = event.target
    const { target } = event
    // const options = event.options
    const { options } = target
    // This is the target you are searching for.
    const { name: optionName } = target
    // selectedIndex gets the index number of the option.
    // selectedIndex of options.
    const selectedValue = options[target.selectedIndex].value

    // Saves changes in local storage.
    newLocalStorage(optionName, selectedValue, 'general')

    //SEX
    if (optionName === 'sex') {
      if (selectedValue === 'man') {
        factorValue(optionName, -0.12610868)
      } else {
        factorValue(optionName, 0)
      }
    }

    //AGE
    if (optionName === 'age') {
      if (selectedValue === '0-4years') {
        factorValue(optionName, 0)
      } else if (selectedValue === '4-8years') {
        factorValue(optionName, 0)
      } else if (selectedValue === '8-12years') {
        factorValue(optionName, 0)
      } else if (selectedValue === '12-16years') {
        factorValue(optionName, 0)
      } else {
        factorValue(optionName, 0)
      }
    }

    //AGE MOTHER AT BIRTH
    if (optionName === 'age-mother-birth') {
      if (selectedValue === 'younger20') {
        factorValue(optionName, 0.45149781)
      } else if (selectedValue === '20-25years') {
        factorValue(optionName, 0.10851786)
      } else if (selectedValue === '25-30years') {
        factorValue(optionName, -0.08840876)
      } else if (selectedValue === '30-35years') {
        factorValue(optionName, 0)
      } else if (selectedValue === '35-40years') {
        factorValue(optionName, 0.23987545)
      } else {
        factorValue(optionName, -0.11153052)
      }
    }

    //AGE FATHER AT BIRTH
    if (optionName === 'age-father-birth') {
      if (selectedValue === 'younger25') {
        factorValue(optionName, 0.00587023)
      } else if (selectedValue === '25-30years') {
        factorValue(optionName, 0.031069)
      } else if (selectedValue === '30-35years') {
        factorValue(optionName, 0)
      } else if (selectedValue === '35-40years') {
        factorValue(optionName, -0.2162358)
      } else {
        factorValue(optionName, -0.32645414)
      }
    }

    //AGE DIFFERENCE PARENTS
    if (optionName === 'age-difference') {
      if (selectedValue === 'lessThan5') {
        factorValue(optionName, 0)
      } else {
        factorValue(optionName, 0.28580939)
      }
    }

    //ORIGIN PARENTS
    if (optionName === 'origin') {
      if (selectedValue === 'dutch') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'notDutch') {
        factorValue(optionName, 0.16972268)
      } else {
        factorValue(optionName, -0.08942976)
      }
    }

    //HELP
    if (optionName === 'help') {
      if (selectedValue === 'yes') {
        factorValue(optionName, 1.52773741)
      } else {
        factorValue(optionName, 0)
      }
    }

    try {
      window.localStorage.setItem('dataFactors', JSON.stringify(window.dataFactors))
      //triggers an event, which in this case is fake
      //disPatchEvent triggered het fake event
      document.dispatchEvent(new Event('eventLauncher'))
    } catch (error) {
      throw new Error(error)
    }

  }

  // Givs access to the shadowDOMtree
  ready() {
    // super means you want to overwrite something from/in the shadow DOM tree
    super.ready()

    const selectNames = [
      'sex',
      'age',
      'age-mother-birth',
      'age-father-birth',
      'age-difference',
      'origin',
      'help'
    ]

    //loop over selectNames, get all selectNames
    selectNames.map(selectNames => {
      //access via shadowroot html elements with selectNames
      const select = this.shadowRoot.getElementById(selectNames)
      //get localStorage
      const localStorageValue = valueLocalStorage('general', selectNames)
      console.log(localStorageValue)

      if (localStorageValue) {
        select.value = localStorageValue
      }
    })
  }

}


window.customElements.define('my-general', GeneralForm);
