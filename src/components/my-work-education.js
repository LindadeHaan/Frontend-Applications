import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { newLocalStorage } from '../functions/newLocalStorage.js';
import { valueLocalStorage } from '../functions/valueLocalStorage.js';
import { factorValue } from '../functions/factorValue.js';

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
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Voortijdig schoolverlater</label>
        <select name="early-school-leaver" id="early-school-leaver" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="education">Door in onderwijs</option>
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

    newLocalStorage(optionName, selectedValue, 'work-education')

    //KIND OF EDUCATION
    if (optionName === 'kind-of-education') {
      if (selectedValue === 'regularEducation') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'notRegularEducation') {
        factorValue(optionName, 0.33030829)
      } else {
        factorValue(optionName, -0.76956641)
      }
    }

    //EDUCATION LEVEL
    if (optionName === 'education-level') {
      if (selectedValue === 'elementry') {
        factorValue(optionName, 0.25231544)
      } else if (selectedValue === 'vmbo1') {
        factorValue(optionName, 0.87841913)
      } else if (selectedValue === 'vmbo2') {
        factorValue(optionName, 0.56881862)
      } else if (selectedValue === 'middleSchool') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'highSchool') {
        factorValue(optionName, -0.8356626)
      } else {
        factorValue(optionName, 0)
      }
    }

    //CHANGE OF EDUCATION
    if (optionName === 'change-of-education') {
      if (selectedValue === 'same') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'up') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'down') {
        factorValue(optionName, 0.58732282)
      } else {
        factorValue(optionName, -1.11681655)
      }
    }

    //EARLY SCHOOL LEAVER
    if (optionName === 'early-school-leaver') {
      if (selectedValue === 'education') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'outOfEducation') {
        factorValue(optionName, -13.64192657)
      } else if (selectedValue === 'leaver') {
        factorValue(optionName, 0.34683899)
      } else if (selectedValue === 'nvt') {
        factorValue(optionName, 0.38735846)
      } else {
        factorValue(optionName, 0.80563824)
      }
    }

    //EDUCATION LEVEL FATHER
    if (optionName === 'education-level-father') {
      if (selectedValue === 'vmbo1') {
        factorValue(optionName, -0.21629522)
      } else if (selectedValue === 'vmbo2') {
        factorValue(optionName, 0.67119088)
      } else if (selectedValue === 'middleSchool') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'highSchool') {
        factorValue(optionName, -12.08994875)
      } else {
        factorValue(optionName, 0.88463779)
      }
    }

    //EDUCATION LEVEL MOTHER
    if (optionName === 'education-level-mother') {
      if (selectedValue === 'vmbo1') {
        factorValue(optionName, 0.15935901)
      } else if (selectedValue === 'vmbo2') {
        factorValue(optionName, 0.03334141)
      } else if (selectedValue === 'middleSchool') {
        factorValue(optionName, 0)
      } else if (selectedValue === 'highSchool') {
        factorValue(optionName, -13.03161926)
      } else {
        factorValue(optionName, 0.03655114)
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
      const localStorageValue = valueLocalStorage('work-education', selectNames)
      console.log(localStorageValue)

      if (localStorageValue) {
        select.value = localStorageValue
      }
    })
  }
}


window.customElements.define('my-work-education', WorkEducation);
