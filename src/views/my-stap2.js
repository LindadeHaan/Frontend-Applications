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
import '../components/my-work-education.js';

class Stap2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
<<<<<<< HEAD
        <h1>Werk & Opleiding</h1>
        <!-- stap/card 2 -->
          <form>
            <my-work-education></my-work-education>
=======
        <!-- <div class="circle">3</div> -->
        <h1>Werk & Opleiding</h1>
        <!-- stap/card 2 -->

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
              <!-- <legend>Werk & Opleiding</legend> -->

              <div class="dropdowns">
                <label>Soort onderwijs van het kind</label>
                <select name="soort-onderwijs">
                <option value="">Regulier onderwijs</option>
                <option value="">Niet-regulier onderwijs</option>
                <option value="">Onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Huidig onderwijsniveau kind</label>
                <select name="onderwijsniveau">
                <option value="">Basisonderijs</option>
                <option value="">Vmbo b/k, mbo 1 of mbo 2</option>
                <option value="">Vmbo g/t, mbo 3 of mbo 4</option>
                <option value="">Havo onderbouw, Havo bovenbouw of Hbo bachelor</option>
                <option value="">Vwo of Wo bachelor</option>
                <option value="">Onderwijs onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Verandering in het voortgezet onderwijsniveau</label>
                <select name="verandering-onderwijs">
                <option value="">Opschalen of gelijkblijvend</option>
                <option value="">Opschalen</option>
                <option value="">Afschalen</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Voortijdig schoolverlater</label>
                <select name="voortijdig-schoolverlater">
                <option value="">Door in onderijs</option>
                <option value="">Onbekend</option>
                <option value="">Niet van toepassing</option>
                <option value="">Uit onderwijs met startkwalificatie</option>
                <option value="">Voortijdig schoolverlaten</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Leeftijdsverschil tussen ouders</label>
                <select name="leeftijdsverschil">
                <option value="">Minder dan 5 jaar</option>
                <option value="">Meer dan 5 jaar</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Herkomst van de ouders</label>
                <select name="herkomst">
                <option value="">Beide ouders Nederlands</option>
                <option value="">Beide ouders niet Nederlands</option>
                <option value="">Eén van de ouders Nederlands en de ander niet Nederlands</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Hoogst behaalde onderwijsniveau vader</label>
                <select name="onderwijsniveau-vader">
                <option value="">Vmbo b/k, mbo 1 of mbo 2</option>
                <option value="">Vmbo g/t, mbo 3 of mbo 4</option>
                <option value="">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
                <option value="">Vwo, Wo bachelor of Wo master</option>
                <option value="">Onderwijs onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Hoogst behaalde onderwijsniveau moeder</label>
                <select name="onderwijsniveau-moeder">
                <option value="">Vmbo b/k, mbo 1 of mbo 2</option>
                <option value="">Vmbo g/t, mbo 3 of mbo 4</option>
                <option value="">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
                <option value="">Vwo, Wo bachelor of Wo master</option>
                <option value="">Onderwijs onbekend</option>
                </select>
              </div>

            </fieldset>
>>>>>>> 5a6e690d3bbb68234e51ad421509520702754fad
          </form>

        <!-- <my-prev-arrow></my-prev-arrow>
        <my-next-arrow></my-next-arrow> -->

      </div>
    `;
  }
}

window.customElements.define('my-stap2', Stap2);
