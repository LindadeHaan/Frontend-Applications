import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class Justice extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>
      <!-- <legend>Justitie</legend> -->

      <div class="dropdowns">
        <label>Kind in het verleden verdacht geweest van een delict</label>
        <select name="crime-child" id="crime-child">
        <option value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Kind in aanraking geweest met bureau HALT voor een delict</label>
        <select name="child-HALT" id="child-HALT">
        <option value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Vader verdacht van delict in het verleden</label>
        <select name="crime-father" id="crime-father">
        <option value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Moeder verdacht van delict in het verleden</label>
        <select name="crime-mother" id="crime-mother">
        <option value="no">Nee</option>
        <option value="yes">Ja</option>
        </select>
      </div>

    </fieldset>
`;
  }
}


window.customElements.define('my-justice', Justice);
