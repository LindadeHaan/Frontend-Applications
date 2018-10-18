import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';
import { setValueToFactor } from '../functions/setValueToFactor.js';

class HouseRelationships extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Ouders gescheiden</label>
        <select name="divorced" id="divorced" on-change="onChangeAnswer">
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

    setNewLocalStorage(optionName, selectedValue, 'house-relationships')

    if (optionName === 'divorced') {
      if (selectedValue === 'yes') {
        setValueToFactor(optionName, 0.27683414)
      } else {
        setValueToFactor(optionName, 0)
      }
    }

    try {
      window.localStorage.setItem('dataFactors', JSON.stringify(window.dataFactors))
      //triggers an event, which in this case is fake
      //disPatchEvent triggered het fake event
      document.dispatchEvent(new Event ('eventLauncher'))
    } catch (error) {
      throw new Error (error)
    }
  }

  ready () {
    super.ready ()

  const selectNames = [
    'divorced'
  ]

  //loop over selectNames, get all selectNames
  selectNames.map(selectNames => {
    //access via shadowroot html elements with selectNames
    const select = this.shadowRoot.getElementById(selectNames)
    //get local localStorage
    const valueLocalStorage = getLocalStorageValue('house-relationships', selectNames)
    console.log(valueLocalStorage)

    if (valueLocalStorage) {
      select.value = valueLocalStorage
    }
  })
  }
}


window.customElements.define('my-house-relationships', HouseRelationships);
