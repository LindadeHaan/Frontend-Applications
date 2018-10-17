import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class Justice extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>
      <!-- <legend>Justitie</legend> -->

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

    setNewLocalStorage(optionName, selectedValue, 'justice')
  }

  ready () {
    super.ready ()

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
    const valueLocalStorage = getLocalStorageValue('justice', selectNames)
    console.log(valueLocalStorage)

    if (valueLocalStorage) {
      select.value = valueLocalStorage
    }
  })
  }
}


window.customElements.define('my-justice', Justice);
