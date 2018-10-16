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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
// import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
// import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './components/my-icons.js';
import './styles/app-drawer.js';
import './styles/app-toolbar.js';


// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #27c9ff;
          --app-secondary-color: black;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
          width: auto;
          background: rgba(200, 200, 200, 0.7);
        }

        .drawer-list a:focus {

        }

        .iron-selected {
          width: 100%;
        }

        .drawer-list a:hover {
          /* color: rgba(140, 140, 140, 0.8); */
          background: rgba(140, 140, 140, 0.8);
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="home" href="[[rootPath]]home">Home</a>
            <a name="stap1" href="[[rootPath]]stap1">Algemeen</a>
            <a name="stap2" href="[[rootPath]]stap2">Werk & Opleiding</a>
            <a name="stap3" href="[[rootPath]]stap3">Huisvesting</a>
            <a name="stap4" href="[[rootPath]]stap4">Huiselijke Relaties</a>
            <a name="stap5" href="[[rootPath]]stap5">Geestelijke Gezondheid</a>
            <a name="stap6" href="[[rootPath]]stap6">Maatschappelijke Participatie</a>
            <a name="stap7" href="[[rootPath]]stap7">Justitie</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">Risico Indicatie</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-home name="home"></my-home>
            <my-stap1 name="stap1"></my-stap1>
            <my-stap2 name="stap2"></my-stap2>
            <my-stap3 name="stap3"></my-stap3>
            <my-stap4 name="stap4"></my-stap4>
            <my-stap5 name="stap5"></my-stap5>
            <my-stap6 name="stap6"></my-stap6>
            <my-stap7 name="stap7"></my-stap7>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'home' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
    } else if (['home', 'stap1', 'stap2', 'stap3', 'stap4', 'stap5', 'stap6', 'stap7'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'home':
        import('./views/my-home.js');
        break;
      case 'stap1':
        import('./views/my-stap1.js');
        break;
      case 'stap2':
        import('./views/my-stap2.js');
        break;
      case 'stap3':
        import('./views/my-stap3.js');
        break;
        case 'stap4':
          import('./views/my-stap4.js');
          break;
        case 'stap5':
          import('./views/my-stap5.js');
          break;
        case 'stap6':
          import('./views/my-stap6.js');
          break;
        case 'stap7':
          import('./views/my-stap7.js');
          break;
        case 'view404':
          import('./views/my-view404.js');
          break;
    }
  }
}

window.customElements.define('my-app', MyApp);
