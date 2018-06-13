# my-progress-bar-stencil-tutorial

Following tutorial found here:<br />
https://www.twilio.com/blog/2018/02/creating-and-publishing-web-components-with-stencil.html<br />
<br />
If you get the following error when trying to build:
```
style error
Style "src/components/my-progress-bar/my-progress-bar.scss" is a Sass file, however the "sass"
plugin has not been installed. Please install the "@stencil/sass" plugin and add it to
"config.plugins" within the project's stencil.config.js file. For more info please see:
https://www.npmjs.com/package/@stencil/sass
```

Run the following commands in your terminal window
```
npm install @stencil/sass
```

Then in the stecnil.config.js file:
Add the following line to the top: `const sass = require('@stencil/sass');`<br />
Add the following line to the `exports.config` object: `plugins: [ sass()]`
