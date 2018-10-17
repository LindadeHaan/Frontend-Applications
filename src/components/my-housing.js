import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class Housing extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Soort woning</label>
        <select name="house" id="house">
        <option value="ownHouse">Eigen woning</option>
        <option value="rentalAllowance">Huurwoning met huurtoeslag</option>
        <option value="rental">Huurwoning zonder huurtoeslag</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Type huishouden</label>
        <select name="type-household" id="type-household">
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
}


window.customElements.define('my-housing', Housing);
