import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { newLocalStorage } from '../functions/newLocalStorage.js';
import { valueLocalStorage } from '../functions/valueLocalStorage.js';
import { factorValue } from '../functions/factorValue.js';

class Justice extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Kind in het verleden verdacht geweest van een delict</label>
        <select name="crime-child" id="crime-child" on-change="onChangeAnswer">
        <option selected="selected" value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Kind in aanraking geweest met bureau HALT voor een delict</label>
        <select name="child-HALT" id="child-HALT" on-change="onChangeAnswer">
        <option selected="selected" value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Vader verdacht van delict in het verleden</label>
        <select name="crime-father" id="crime-father" on-change="onChangeAnswer">
        <option selected="selected" value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Moeder verdacht van delict in het verleden</label>
        <select name="crime-mother" id="crime-mother" on-change="onChangeAnswer">
        <option selected="selected" value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

    </fieldset>
`;
  }
  onChangeAnswer(event) {
    // alternative: const target = event.target
    const { target } = event
    // alternative: const options = event.options
    const { options } = target
    const { name: optionName } = target
    const selectedValue = options[target.selectedIndex].value
    console.log(selectedValue);

    newLocalStorage(optionName, selectedValue, 'justice')

    //CHILD CRIME
    if (optionName === 'crime-child') {
      if (selectedValue === 'yes') {
        factorValue(optionName, 0.94737545)
      } else {
        factorValue(optionName, 0)
      }
    }

    //CHILD HALT
    if (optionName === 'child-HALT') {
      if (selectedValue === 'yes') {
        factorValue(optionName, 0.36448201)
      } else {
        factorValue(optionName, 0)
      }
    }

    //CRIME FATHER
    if (optionName === 'crime-father') {
      if (selectedValue === 'yes') {
        factorValue(optionName, 0.50027131)
      } else {
        factorValue(optionName, 0)
      }
    }

    //CRIME MOTHER
    if (optionName === 'crime-mother') {
      if (selectedValue === 'yes') {
        factorValue(optionName, 0.50027131)
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

  ready() {
    super.ready()

    const selectNames = [
      'crime-child',
      'child-HALT',
      'crime-father',
      'crime-mother'
    ]

    //loop over selectNames, get all selectNames
    selectNames.map(selectNames => {
      //access via shadowroot html elements with selectNames
      const select = this.shadowRoot.getElementById(selectNames)
      //get local localStorage
      const localStorageValue = valueLocalStorage('justice', selectNames)
      console.log(localStorageValue)

      if (localStorageValue) {
        select.value = localStorageValue
      }
    })
  }
}


window.customElements.define('my-justice', Justice);
