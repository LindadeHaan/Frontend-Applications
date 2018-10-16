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
        <!-- <div class="circle">3</div> -->
        <h1>Werk & Opleiding</h1>
        <!-- stap/card 2 -->

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
              <!-- <legend>Werk & Opleiding</legend> -->

              <div class="dropdowns">
                <label>Soort onderwijs van het kind</label>
                <select name="kindofeducation">
                <option value="">Regulier onderwijs</option>
                <option value="">Niet-regulier onderwijs</option>
                <option value="">Onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Huidig onderwijsniveau kind</label>
                <select name="education-level">
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
                <select name="change-of-education">
                <option value="">Opschalen of gelijkblijvend</option>
                <option value="">Opschalen</option>
                <option value="">Afschalen</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Voortijdig schoolverlater</label>
                <select name="early-school-leaver">
                <option value="">Door in onderijs</option>
                <option value="">Onbekend</option>
                <option value="">Niet van toepassing</option>
                <option value="">Uit onderwijs met startkwalificatie</option>
                <option value="">Voortijdig schoolverlaten</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Hoogst behaalde onderwijsniveau vader</label>
                <select name="education-level-father">
                <option value="">Vmbo b/k, mbo 1 of mbo 2</option>
                <option value="">Vmbo g/t, mbo 3 of mbo 4</option>
                <option value="">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
                <option value="">Vwo, Wo bachelor of Wo master</option>
                <option value="">Onderwijs onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Hoogst behaalde onderwijsniveau moeder</label>
                <select name="education-level-mother">
                <option value="">Vmbo b/k, mbo 1 of mbo 2</option>
                <option value="">Vmbo g/t, mbo 3 of mbo 4</option>
                <option value="">Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master</option>
                <option value="">Vwo, Wo bachelor of Wo master</option>
                <option value="">Onderwijs onbekend</option>
                </select>
              </div>

            </fieldset>
          </form>

        <!-- <my-prev-arrow></my-prev-arrow>
        <my-next-arrow></my-next-arrow> -->

      </div>
    `;
  }
}

window.customElements.define('my-stap2', Stap2);
