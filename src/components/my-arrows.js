import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class NextArrow extends PolymerElement {
  static get template() {
    return html`

<style>
    .circleNext {
      display: inline-block;
      width: 64px;
      height: 64px;
      text-align: center;
      color: #555;
      border-radius: 50%;
      background: #ddd;
      font-size: 30px;
      line-height: 64px;
      margin-left: 70%;;
    }

    button {
      position: relative;
      bottom: 0;
    }
    </style>

<button type="submit" class="circleNext">
	 &#8594;
</button>

    `;
  }
}


window.customElements.define('my-next-arrow', NextArrow);


class PrevArrow extends PolymerElement {
  static get template() {
    return html`

<style>
    .circlePrev {
      display: inline-block;
      width: 64px;
      height: 64px;
      text-align: center;
      color: #555;
      border-radius: 50%;
      background: #ddd;
      font-size: 30px;
      line-height: 64px;
    }

    button {
      position: relative;
      bottom: 0;
    }
    </style>

<button class="circlePrev">
	 &#8592;
</button>

    `;
  }
}


window.customElements.define('my-prev-arrow', PrevArrow);
