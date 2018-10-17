import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class HouseRelationships extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Ouders gescheiden</label>
        <select name="divorced" id="divorced">
        <option value="yes">Ja</option>
        <option value="no">Nee</option>
        </select>
      </div>

    </fieldset>
`;
  }
}


window.customElements.define('my-house-relationships', HouseRelationships);
