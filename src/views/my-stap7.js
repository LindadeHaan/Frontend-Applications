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

class Stap7 extends PolymerElement {
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
        <h1>Justitie</h1>

        <!-- stap/card 5 -->

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
              <!-- <legend>Justitie</legend> -->

              <div class="dropdowns">
                <label>Kind in het verleden verdacht geweest van een delict</label>
                <select name="kind-verdacht-van-delict">
                <option value="">Nee</option>
                <option value="">Ja</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Kind in aanraking geweest met bureau HALT voor een delict</label>
                <select name="kind-HALT-delict">
                <option value="">Nee</option>
                <option value="">Ja</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Vader verdacht van delict in het verleden</label>
                <select name="vader-delict-verleden">
                <option value="">Nee</option>
                <option value="">Ja</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Moeder verdacht van delict in het verleden</label>
                <select name="moeder-delict-verleden">
                <option value="">Nee</option>
                <option value="">Ja</option>
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

window.customElements.define('my-stap7', Stap7);
