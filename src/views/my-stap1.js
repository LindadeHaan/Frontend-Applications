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
import '../components/my-general.js';

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

<form>
  <my-general></my-general>
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
