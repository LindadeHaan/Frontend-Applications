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

class Home extends PolymerElement {
  static get template() {
    return html `
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Home</h1>
        <p>Deze tool kan gebruikt worden door hulpverleners en misschien ouders en kinderen om erachter te komen
        hoe de thuissituatie ervoor staat. Er kunnen kenmerken van het kind, de ouders en het huishouden worden ingevuld.</p>
        <!-- <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in
            dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p> -->

        <h4>Gebruiksaanwijzing</h4>
        <p>Vul alle vragen in door de juiste opties te selecteren. Er komt dan een percentage aan de linkerkant van de pagina te staan.
        Dit is een indicatie van het risico op een zware maatregel.</p>
        <p>Aan de linkerkant van de pagina staan alle onderdelen waar vragen onder staan. Je kunt continu blijven switchen tussen deze tabbladen
        de waarden van jouw antwoorden blijven gewoon staan. Je hoeft niet elke keer een vraag opnieuw in te vullen.</p>

        <p>0 - 2%: Laag risico</p>
        <p>2 - 5%: Middelmatig risico</p>
        <p>5% en hoger: Hoog risico</p>

            <button on-click="resetButton">Reset vragenlijst</button>
      </div>
    `;
  }

  resetButton() {
    window.localStorage.clear();
    location.reload();
  }
}

window.customElements.define('my-home', Home);
