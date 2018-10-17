<!-- # Polymer App Toolbox - Starter Kit

[![Build Status](https://travis-ci.org/Polymer/polymer-starter-kit.svg?branch=master)](https://travis-ci.org/Polymer/polymer-starter-kit)

This template is a starting point for building apps using a drawer-based
layout. The layout is provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

### Setup

##### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli@next

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init polymer-3-starter-kit

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    npm start

### Build

The `npm run build` command builds your Polymer application for production, using build configuration options provided by the command line or in your project's `polymer.json` file.

You can configure your `polymer.json` file to create multiple builds. This is necessary if you will be serving different builds optimized for different browsers. You can define your own named builds, or use presets. See the documentation on [building your project for production](https://www.polymer-project.org/3.0/toolbox/build-for-production) for more information.

The Polymer Starter Kit is configured to create three builds. These builds will be output to a subdirectory under the `build/` directory as follows:

```
build/
  es5-bundled/
  es6-bundled/
  esm-bundled/
```

* `es5-bundled` is a bundled, minified build with a service worker. ES6 code is compiled to ES5 for compatibility with older browsers.
* `es6-bundled` is a bundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that can handle ES6 code - see [building your project for production](https://www.polymer-project.org/3.0/toolbox/build-for-production#compiling) for a list.
* `esm-bundled` is a bundled, minified build with a service worker. It uses standard ES module import/export statements for browsers that support them.

Run `polymer help build` for the full list of available options and optimizations. Also, see the documentation on the [polymer.json specification](https://www.polymer-project.org/3.0/docs/tools/polymer-json) and [building your Polymer application for production](https://www.polymer-project.org/3.0/toolbox/build-for-production).

### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    npm start build/build-folder-name/

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    npm test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

---

Looking for our older PSK2 Polycast or migration blog post? See [the previous README](https://github.com/Polymer/polymer-starter-kit/blob/v3.2.1/README.md). -->

# README.md

Install the risico-app
To install the risico you have to follow a few steps:

You need to change directory in your terminal first to the folder where you want to install everything. Use cd in your terminal to get to the place where you want to install on you computer.  
Example: cd folder_name

To clone the repository:

```js
git clone https://github.com/LindadeHaan/risico-app  
cd risico-app  
npm install
```

Start server:
```js
npm start
```
##### package.json
To make a package.json file you have to follow a few steps in your terminal:

```js
npm init
```
After npm init you just have to fill in what your terminal requires. In your package.json file you can see which packages you already installed and which packages you still have to install.


## Process

##### Monday october 8
The first day of the project the client came to do a presentation about the organisation.
We also get to know a little about the assignment we were about to get.

In the afternoon we went to see the neighbourhood with all of the students.

##### Tuesday october 9
Today there were three speakers who were telling about the three biggest frameworks: `React`, `Vue.js` and `Angular.js`.

After the speakers were done explaining and promoting the frameworks we had to do some research these frameworks and other frameworks.

We had a bootcamp from one of our teachers about the stuff we learned until now. It was a refrehment!

At the end of the day we had to give the teacher a top three of frameworks we want to use.
1. Vue.js;
2. React;
3. Polymer

##### Wednesday october 10
Today we get to hear the framework we have to work with for two weeks.

The client came by again to show more information and data we can use to make the assignment we got.

I've got the framework `Polymer`.
For the rest of the day I was researching the framework even more and following tutorials to understand the framework.

We also had a JavaScript bootcamp from one of the teachers.

##### Thursday october 11
I was still researching the framework I got. It was hard to find a good documentation because not many people use the framework `Polymer`.
Eventually we found a starter-kit.

I worked together with other people who had to work with the framework `Polymer`. We really helped each other.

##### Friday october 12
Beginning to understand the framework a little bit more everytime. We found a tutorial to follow to understand the `selected` element in `Polymer`.

##### Monday october 15
Today the client came with on emergency worker who could be using the product we were making and there were two emergency workers that already use the existing app, but that does not function properly.

It was very useful to hear what emergency workers want in tool they use at work.

##### Tuesday october 16
Made several pages and links to them. Added all the forms.

##### Wednesday october 17
There was a speaker today (Nienke Dekker). She talked about why to use a framework. (kijk in notitieboek voor aanvulling)

Added localStorage to the app. Chelsea Dekker and Maikel van Veen helped me a lot with this code. I could not figure it out myself. With the help of Chelsea and Maikel I understand the code and how you save the code in you localStorage.

Added a lot of styling and made components of the forms.
