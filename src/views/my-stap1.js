/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import '@polymer/iron-form/iron-form.js';
import '../components/my-arrows.js';

class Stap1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

      :host {
  display: inline-block;
}

h4:first-of-type {
  margin-top: 0;
}

      </style>

    <div class="card">
  <!-- <div class="circle">2</div> -->
  <h1>Algemeen</h1>
<!--  <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in
    dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
  <p></p> -->

  <form>
    <fieldset>
      <!-- <legend>Algemeen</legend> -->

      <div class="dropdowns">
        <label>Geslacht</label>
        <select name="sex">
        <option value="man">Man</option>
        <option value="vrouw">Vrouw</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Leeftijd van het kind</label>
        <select name="age">
        <option value="">0 tot 4 jaar</option>
        <option value="">4 tot 8 jaar</option>
        <option value="">8 tot 12 jaar</option>
        <option value="">12 tot 16 jaar</option>
        <option value="">16 tot 18 jaar</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Leeftijd moeder bij geboorte</label>
        <select name="age-mom-birth">
        <option value="">jonger dan 20 jaar</option>
        <option value="">20 t0t 25 jaar</option>
        <option value="">25 tot 30 jaar</option>
        <option value="">30 tot 35 jaar</option>
        <option value="">35 tot 40 jaar</option>
        <option value="">40 jaar en ouder</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Leeftijd vader bij geboorte</label>
        <select name="age-father-birth">
        <option value="">jonger dan 25 jaar</option>
        <option value="">25 tot 30 jaar</option>
        <option value="">30 tot 35 jaar</option>
        <option value="">35 tot 40 jaar</option>
        <option value="">40 jaar en ouder</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Leeftijdsverschil tussen ouders</label>
        <select name="age-difference">
        <option value="">Minder dan 5 jaar</option>
        <option value="">Meer dan 5 jaar</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Herkomst van de ouders</label>
        <select name="origin">
        <option value="">Beide ouders Nederlands</option>
        <option value="">Beide ouders niet Nederlands</option>
        <option value="">Eén van de ouders Nederlands en de ander niet Nederlands</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Hulptraject</label>
        <select name="help">
        <option value="">Geen jeugdhelp zonder verblijf gehad</option>
        <option value="">Jeugdhulp zonder verblijf gehad</option>
        </select>
      </div>

    </fieldset>
  </form>

  <!-- <my-prev-arrow></my-prev-arrow>
  <my-next-arrow></my-next-arrow> -->

</div>


    `;
  }
  _openDropdown() {
    this.$.dropdown.open();
  }
}


window.customElements.define('my-stap1', Stap1);
