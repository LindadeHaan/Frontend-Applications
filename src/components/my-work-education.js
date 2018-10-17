import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class WorkEducation extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Soort onderwijs van het kind</label>
        <select name="kind-of-education" id="kind-of-education" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="regularEducation">Regulier onderwijs</option>
        <option value="notRegularEducation">Niet-regulier onderwijs</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Huidig onderwijsniveau kind</label>
        <select name="education-level" id="education-level" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="elementry">Basisonderijs</option>
        <option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
        <option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
        <option value="middleSchool">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
        <option value="highSchool">Vwo of Wo bachelor</option>
        <option value="educationUknown">Onderwijs onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Verandering in het voortgezet onderwijsniveau</label>
        <select name="change-of-education" id="change-of-education" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="same">Opschalen of gelijkblijvend</option>
        <option value="up">Opschalen</option>
        <option value="down">Afschalen</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Voortijdig schoolverlater</label>
        <select name="early-school-leaver" id="early-school-leaver" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="education">Door in onderijs</option>
        <option value="outOfEducation">Uit onderwijs met startkwalificatie</option>
        <option value="leaver">Voortijdig schoolverlaten</option>
        <option value="nvt">Niet van toepassing</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Hoogst behaalde onderwijsniveau vader</label>
        <select name="education-level-father" id="education-level-father" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
        <option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
        <option value="middleSchool">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
        <option value="highSchool">Vwo, Wo bachelor of Wo master</option>
        <option value="educationUknown">Onderwijs onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Hoogst behaalde onderwijsniveau moeder</label>
        <select name="education-level-mother" id="education-level-mother" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
        <option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
        <option value="middleSchool">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
        <option value="highSchool">Vwo, Wo bachelor of Wo master</option>
        <option value="educationUknown">Onderwijs onbekend</option>
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

    setNewLocalStorage(optionName, selectedValue, 'work-education')
  }

  ready () {
    super.ready ()

  const selectNames = [
    'kind-of-education',
    'education-level',
    'change-of-education',
    'early-school-leaver',
    'education-level-father',
    'education-level-mother'
  ]

  //loop over selectNames, get all selectNames
  selectNames.map(selectNames => {
    //access via shadowroot html elements with selectNames
    const select = this.shadowRoot.getElementById(selectNames)
    //get local localStorage
    const valueLocalStorage = getLocalStorageValue('work-education', selectNames)
    console.log(valueLocalStorage)

    if (valueLocalStorage) {
      select.value = valueLocalStorage
    }
  })
  }
}


window.customElements.define('my-work-education', WorkEducation);
