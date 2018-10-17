import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class Participation extends PolymerElement {
  static get template() {
    return html `

<style include="shared-styles">

    </style>
    <fieldset>
      <!-- <legend>Maatschappelijk participatie</legend> -->

      <div class="dropdowns">
        <label>Maatschappelijke participatie van vader</label>
        <select name="social-participation-father" id="social-participation-father">
        <option value="work">Werkend of overig actief</option>
        <option value="noWork">Geen werk en niet actief</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Maatschappelijke participatie van moeder</label>
        <select name="social-participation-mother" id="social-participation-mother">
        <option value="work">Werkend of overig actief</option>
        <option value="noWork">Geen werk en niet actief</option>
        <option value="unknown">Onbekend</option>
        </select>
      </div>


      <div class="dropdowns">
        <label>Socio economische status van vader</label>
        <select name="economic-status-father" id="economic-status-father">
        <option value="assistance">Bijstandsontvanger</option>
        <option value="incapacitated">Arbeidsongeschikte</option>
        <option value="socialServices">Ontvanger overige sociale voorzieningen</option>
        <option value="unemploymentBenefit">Ontvanger werkloosheidsuitkering</option>
        <option value="civilServant">Ambtenaar</option>
        <option value="director">Directeur groot aandeelhouder</option>
        <option value="privateCompany">Werknemer particulier bedrijf</option>
        <option value="independent">Zelfstandige</option>
        <option value="student">Student</option>
        <option value="active">Overig actief</option>
        <option value="notActive">Overig niet actief</option>
        <option value="retired">Pensioen</option>
        <option value="fatherUnknown">Vader onbekend</option>
        <option value="noIncome">Zonder inkomen</option>
        <option value="unkown">Onbekend</option>
        </select>
      </div>

      <div class="dropdowns">
        <label>Socio economische status van moeder</label>
        <select name="economic-status-mother" id="economic-status-mother">
        <option value="assistance">Bijstandsontvanger</option>
        <option value="incapacitated">Arbeidsongeschikte</option>
        <option value="socialServices">Ontvanger overige sociale voorzieningen</option>
        <option value="unemploymentBenefit">Ontvanger werkloosheidsuitkering</option>
        <option value="civilServant">Ambtenaar</option>
        <option value="director">Directeur groot aandeelhouder</option>
        <option value="privateCompany">Werknemer particulier bedrijf</option>
        <option value="independent">Zelfstandige</option>
        <option value="student">Student</option>
        <option value="active">Overig actief</option>
        <option value="notActive">Overig niet actief</option>
        <option value="retired">Pensioen</option>
        <option value="fatherUnknown">Vader onbekend</option>
        <option value="noIncome">Zonder inkomen</option>
        <option value="unkown">Onbekend</option>
        </select>
      </div>

    </fieldset>
`;
  }
}


window.customElements.define('my-participation', Participation);
