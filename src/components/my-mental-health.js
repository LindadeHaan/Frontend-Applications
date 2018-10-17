import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class MentalHealth extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>

      <div class="dropdowns">
        <label>Als slachtoffer bekend bij slachtofferhulp</label>
        <select name="victim" id="victim">
        <option value="yes">Ja</option>
        <option value="no">Nee</option>
        </select>
      </div>

    </fieldset>
`;
  }
}


window.customElements.define('my-mental-health', MentalHealth);
