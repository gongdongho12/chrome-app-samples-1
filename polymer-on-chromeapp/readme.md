# POLYMER ON CHROMEAPP

Playing with polymer and chromeapp.

## PREPARING

- Install(ed) polymers
  - [Polymer calendar-nosandbox-app version]( http://goo.gl/VauN7h )

  - polymer#0.0.20131025

    `bower install polymer-ui-elements#0.0.20131025 --save`

    or

    `bower install`

- Install [vulcanize]( http://goo.gl/bLeRQR ) via npm

    `npm install -g vulcanize`

## BUILD

- Make a imports files

    `vulcanize -v --csp -i x-index.html -o imports.html`

- Remove unless code from generated imports.html that in x-index.html, It should be bottom of imports.html. Like this.

    `<x-app></x-app>
    <script src="imports.js"></script>`

- Add legacy code ( `, { created: function() {} }` )into each Polymer constructors in imports.js, if you want test with `polymer.min.inlab`

    `


