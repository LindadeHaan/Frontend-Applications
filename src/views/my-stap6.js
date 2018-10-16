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

class Stap6 extends PolymerElement {
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
        <h1>Maatschappelijke Participatie</h1>

        <!-- stap/card 5 -->

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
              <!-- <legend>Maatschappelijk participatie</legend> -->

              <div class="dropdowns">
                <label>Maatschappelijke participatie van vader</label>
                <select name="social-participation-father">
                <option value="">Werkend of overig actief</option>
                <option value="">Geen werk en niet actief</option>
                <option value="">Onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Maatschappelijke participatie van moeder</label>
                <select name="social-participation-mother">
                <option value="">Werkend of overig actief</option>
                <option value="">Geen werk en niet actief</option>
                <option value="">Onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Socio economische status van vader</label>
                <select name="economic-status-father">
                <option value="">Bijstandsontvanger</option>
                <option value="">Arbeidsongeschikte</option>
                <option value="">Ontvanger overige sociale voorzieningen</option>
                <option value="">Ontvanger werkloosheidsuitkering</option>
                <option value="">Ambtenaar</option>
                <option value="">Directeur groot aandeelhouder</option>
                <option value="">Werknemer particulier bedrijf</option>
                <option value="">Zelfstandige</option>
                <option value="">Student</option>
                <option value="">Overig actief</option>
                <option value="">Overig niet actief</option>
                <option value="">Pensioen</option>
                <option value="">Vader onbekend</option>
                <option value="">Zonder inkomen</option>
                <option value="">Onbekend</option>
                </select>
              </div>

              <div class="dropdowns">
                <label>Socio economische status van moeder</label>
                <select name="economic-status-mother">
                <option value="">Bijstandsontvanger</option>
                <option value="">Arbeidsongeschikte</option>
                <option value="">Ontvanger overige sociale voorzieningen</option>
                <option value="">Ontvanger werkloosheidsuitkering</option>
                <option value="">Ambtenaar</option>
                <option value="">Directeur groot aandeelhouder</option>
                <option value="">Werknemer particulier bedrijf</option>
                <option value="">Zelfstandige</option>
                <option value="">Student</option>
                <option value="">Overig actief</option>
                <option value="">Overig niet actief</option>
                <option value="">Pensioen</option>
                <option value="">Vader onbekend</option>
                <option value="">Zonder inkomen</option>
                <option value="">Onbekend</option>
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

window.customElements.define('my-stap6', Stap6);
