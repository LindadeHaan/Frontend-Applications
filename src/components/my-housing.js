import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue} from '../functions/getLocalStorageValue.js';
import { setValueToFactor } from '../functions/setValueToFactor.js';

class Housing extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Soort woning</label>
        <select name="house" id="house" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="ownHouse">Eigen woning</option>
        <option value="rentalAllowance">Huurwoning met huurtoeslag</option>
        <option value="rental">Huurwoning zonder huurtoeslag</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Type huishouden</label>
        <select name="type-household" id="type-household" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="oneParent">Eenouderhuishouden</option>
        <option value="marriedChildren">Gehuwd paar met kinderen</option>
        <option value="onePerson">Eenpersoonshuishouden</option>
        <option value="notMarriedChildren">Niet-gehuwd paar met kinderen</option>
        <option value="Institutional">Institutioneel huishouden</option>
        <option value="remainginHousehold">Overig huishouden</option>
        <option value="unknown">Onbekend huishouden</option>
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

    setNewLocalStorage(optionName, selectedValue, 'housing')

    //HOUSE
      if (optionName === 'house') {
        if (selectedValue === 'ownHouse') {
          setValueToFactor(optionName, 0)
        } else if (selectedValue === 'rentalAllowance') {
          setValueToFactor(optionName, 0.3840103)
        } else if (selectedValue === 'rental') {
          setValueToFactor(optionName, 0.40420458)
        } else {
          setValueToFactor(optionName, 2.40126358)
        }
      }

    //HOUSEHOLD
      if (optionName === 'type-household') {
        if (selectedValue === 'oneParent') {
          setValueToFactor(optionName, 0.49608469)
        } else if (selectedValue === 'marriedChildren') {
          setValueToFactor(optionName, 0)
        } else if (selectedValue === 'onePerson') {
          setValueToFactor(optionName, 1.7185851)
        } else if (selectedValue === 'notMarriedChildren') {
          setValueToFactor(optionName, 0.32693636)
        } else if (selectedValue === 'Institutional') {
          setValueToFactor(optionName, 0)
        } else if (selectedValue === 'remainginHousehold') {
          setValueToFactor(optionName, 0.91364613)
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
    'house',
    'type-household'
  ]

  //loop over selectNames, get all selectNames
  selectNames.map(selectNames => {
    //access via shadowroot html elements with selectNames
    const select = this.shadowRoot.getElementById(selectNames)
    //get local localStorage
    const valueLocalStorage = getLocalStorageValue('housing', selectNames)
    console.log(valueLocalStorage)

    if (valueLocalStorage) {
      select.value = valueLocalStorage
    }
  })
  }
}


window.customElements.define('my-housing', Housing);
