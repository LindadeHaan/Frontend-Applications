import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class Participation extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>
      <!-- <legend>Maatschappelijk participatie</legend> -->

      <div class="dropdowns">
        <label>Maatschappelijke participatie van vader</label>
        <select name="social-participation-father" id="social-participation-father" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="work">Werkend of overig actief</option>
        <option value="noWork">Geen werk en niet actief</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Maatschappelijke participatie van moeder</label>
        <select name="social-participation-mother" id="social-participation-mother" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="work">Werkend of overig actief</option>
        <option value="noWork">Geen werk en niet actief</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>


      <div class="dropdowns">
        <label>Socio economische status van vader</label>
        <select name="economic-status-father" id="economic-status-father" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="assistance">Bijstandsontvanger</option>
        <option value="incapacitated">Arbeidsongeschikte</option>
        <option value="socialServices">Ontvanger overige sociale voorzieningen</option>
        <option value="unemploymentBenefit">Ontvanger werkloosheidsuitkering</option>
        <option value="civilServant">Ambtenaar</option>
        <option value="director">Directeur groot aandeelhouder</option>
        <option value="privateCompany">Werknemer particulier bedrijf</option>
        <option value="independent">Zelfstandige</option>
        <option value="student">Student</option>
        <option value="active">Overig actief</option>
        <option value="notActive">Overig niet actief</option>
        <option value="retired">Pensioen</option>
        <option value="fatherUnknown">Vader onbekend</option>
        <option value="noIncome">Zonder inkomen</option>
        <option value="unkown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Socio economische status van moeder</label>
        <select name="economic-status-mother" id="economic-status-mother" on-change="onChangeAnswer">
        <option disabled="disabled" selected="selected">Selecteer</option>
        <option value="assistance">Bijstandsontvanger</option>
        <option value="incapacitated">Arbeidsongeschikte</option>
        <option value="socialServices">Ontvanger overige sociale voorzieningen</option>
        <option value="unemploymentBenefit">Ontvanger werkloosheidsuitkering</option>
        <option value="civilServant">Ambtenaar</option>
        <option value="director">Directeur groot aandeelhouder</option>
        <option value="privateCompany">Werknemer particulier bedrijf</option>
        <option value="independent">Zelfstandige</option>
        <option value="student">Student</option>
        <option value="active">Overig actief</option>
        <option value="notActive">Overig niet actief</option>
        <option value="retired">Pensioen</option>
        <option value="fatherUnknown">Vader onbekend</option>
        <option value="noIncome">Zonder inkomen</option>
        <option value="unkown">Onbekend</option>
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

    setNewLocalStorage(optionName, selectedValue, 'participation')
  }

  ready () {
    super.ready ()

  const selectNames = [
    'social-participation-father',
    'social-participation-mother',
    'economic-status-father',
    'economic-status-mother'
  ]

  //loop over selectNames, get all selectNames
  selectNames.map(selectNames => {
    //access via shadowroot html elements with selectNames
    const select = this.shadowRoot.getElementById(selectNames)
    //get local localStorage
    const valueLocalStorage = getLocalStorageValue('participation', selectNames)
    console.log(valueLocalStorage)

    if (valueLocalStorage) {
      select.value = valueLocalStorage
    }
  })
  }
}


window.customElements.define('my-participation', Participation);
