import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { newLocalStorage } from '../functions/newLocalStorage.js';
import { valueLocalStorage } from '../functions/valueLocalStorage.js';
import { factorValue } from '../functions/factorValue.js';

class MentalHealth extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Als slachtoffer bekend bij slachtofferhulp</label>
        <select name="victim" id="victim" on-change='onChangeAnswer'>
        <option value="yes">Ja</option>
        <option selected="selected" value="no">Nee</option>
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

    newLocalStorage(optionName, selectedValue, 'mental-health')

    if (optionName === 'victim') {
      if (selectedValue === 'yes') {
        factorValue(optionName, 0.23639124)
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
      'victim'
    ]

    //loop over selectNames, get all selectNames
    selectNames.map(selectNames => {
      //access via shadowroot html elements with selectNames
      const select = this.shadowRoot.getElementById(selectNames)
      //get local localStorage
      const localStorageValue = valueLocalStorage('mental-health', selectNames)
      console.log(localStorageValue)

      if (localStorageValue) {
        select.value = localStorageValue
      }
    })
  }
}


window.customElements.define('my-mental-health', MentalHealth);
