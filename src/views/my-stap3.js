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
import '../components/my-housing.js';

class Stap3 extends PolymerElement {
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
        <h1>Huisvesting</h1>

        <!-- stap/card 3 -->
          <form>
            <my-housing></my-housing>
=======
        <!-- <div class="circle">3</div> -->
        <h1>Huisvesting</h1>

        <!-- stap/card 3 -->

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
            <!--  <legend>Huisvesting</legend> -->

              <div class="dropdowns">
                <label>Soort woning</label>
                <select name="soort-woining">
                <option value="">Eigen woning</option>
                <option value="">Huurwoning met huurtoeslag</option>
                <option value="">Huurwoning zonder huurtoeslag</option>
                <option value="">Onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Type huishouden</label>
                <select name="type-huishouden">
                <option value="">Eenouderhuishouden</option>
                <option value="">Gehuwd paar met kinderen</option>
                <option value="">Eenpersoonshuishouden</option>
                <option value="">Niet-gehuwd paar met kinderen</option>
                <option value="">Institutioneel huishouden</option>
                <option value="">Overig huishouden</option>
                <option value="">Onbekend huishouden</option>
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

window.customElements.define('my-stap3', Stap3);
