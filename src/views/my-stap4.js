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
<<<<<<< HEAD
import '../components/my-house-relationships.js';
=======
>>>>>>> 5a6e690d3bbb68234e51ad421509520702754fad

class Stap4 extends PolymerElement {
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
        <h1>Huiselijke Relaties</h1>

        <!-- stap/card 4 -->
<<<<<<< HEAD
          <form>
            <my-house-relationships></my-house-relationships>
=======

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
              <!-- <legend>Huiselijke relaties</legend> -->

              <div class="dropdowns">
                <label>Ouders gescheiden</label>
                <select name="gescheiden">
                <option value="">Ja</option>
                <option value="">Nee</option>
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

window.customElements.define('my-stap4', Stap4);
