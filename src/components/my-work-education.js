import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class WorkEducation extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>
      
      <div class="dropdowns">
        <label>Soort onderwijs van het kind</label>
        <select name="kind-of-education" id="kind-of-education">
        <option value="regularEducation">Regulier onderwijs</option>
        <option value="notRegularEducation">Niet-regulier onderwijs</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Huidig onderwijsniveau kind</label>
        <select name="education-level" id="education-level">
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
        <select name="change-of-education" id="change-of-education">
        <option value="same">Opschalen of gelijkblijvend</option>
        <option value="up">Opschalen</option>
        <option value="down">Afschalen</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Voortijdig schoolverlater</label>
        <select name="early-school-leaver" id="early-school-leaver">
        <option value="education">Door in onderijs</option>
        <option value="outOfEducation">Uit onderwijs met startkwalificatie</option>
        <option value="leaver">Voortijdig schoolverlaten</option>
        <option value="nvt">Niet van toepassing</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Hoogst behaalde onderwijsniveau vader</label>
        <select name="education-level-father" id="education-level-father">
        <option value="vmbo1">Vmbo b/k, mbo 1 of mbo 2</option>
        <option value="vmbo2">Vmbo g/t, mbo 3 of mbo 4</option>
        <option value="middleSchool">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
        <option value="highSchool">Vwo, Wo bachelor of Wo master</option>
        <option value="educationUknown">Onderwijs onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Hoogst behaalde onderwijsniveau moeder</label>
        <select name="education-level-mother" id="education-level-mother">
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
}


window.customElements.define('my-work-education', WorkEducation);
