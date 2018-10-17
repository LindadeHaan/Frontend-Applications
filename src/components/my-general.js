import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class GeneralForm extends PolymerElement {
  static get template() {
    return html`

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
          <option disabled="disabled" selected="selected">Selecteer</option>
          <option value="noHelp">Geen jeugdhelp zonder verblijf gehad</option>
          <option value="yesHelp">Jeugdhulp zonder verblijf gehad</option>
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

  setNewLocalStorage(optionName, selectedValue, 'general')
}

ready () {
  super.ready ()

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
  const valueLocalStorage = getLocalStorageValue('general', selectNames)
  console.log(valueLocalStorage)

  if (valueLocalStorage) {
    select.value = valueLocalStorage
  }
})
}

}


window.customElements.define('my-general', GeneralForm);
