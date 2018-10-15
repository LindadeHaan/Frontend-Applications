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
import '../components/vaadin-dropdown-menu.js';
// import '../components/vaadin-dropdown-menu-overlay.js';
// import '../components/vaadin-dropdown-menu-text-field.js';
// import '../styles/vaadin-dropdown-menu-styles.js';
import '../styles/app-drawer.js';
import '../styles/app-toolbar.js';

// import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';

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

iron-dropdown {
  border: 1px solid gray;
  background: white;
  font-size: 2em;
}

.column {
  column-count: 3;
  column-width: 33%;
}
h4:first-of-type {
  margin-top: 0;
}

      </style>

      <div class="card">
        <!-- <div class="circle">2</div> -->
        <h1>Stap 1</h1>
        <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen
        op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen
        vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
        <p></p>

        <!-- <div class="column"> -->

        <form>

        <h4>Gegevens Kind</h4>

    <label>First Name
    <input placeholder="Jane"></label>

    <label>Last Name
    <input placeholder="Doe"></label>

    <label>Email</label>
    <input placeholder="jane.doe@example.com">

    <label slot="label">Leeftijd
    <input class="full-width" type="number"></label>


</form>

<!-- </div> -->

<my-prev-arrow></my-prev-arrow>
<my-next-arrow></my-next-arrow>

        </div>

<!-- stap/card 2 -->

<div class="card">
  <!-- <div class="circle">2</div> -->
  <h1>Stap 1</h1>
  <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen
  op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen
  vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
  <p></p>

  <vaadin-dropdown-menu label="Label" placeholder="Placeholder">
  <template>
    <vaadin-list-box>
      <vaadin-item value="1">Option one</vaadin-item>
      <vaadin-item value="2">Option two</vaadin-item>
      <vaadin-item value="3">Option three</vaadin-item>
      <vaadin-item value="4">Option four</vaadin-item>
    </vaadin-list-box>
  </template>
</vaadin-dropdown-menu>
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
