# prototypers_prototype-loader

A styled loader for code-based prototypes. the loader clears all HTML, styles and images from the browser untill the prototype is fully loaded. In the meanwhile a customized loader will be shown.
## Usage
1. Import the CSS file via CDN (place it before any other CSS links) :
```HTML
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/wix-prototypers/prototypers_prototype-loader-preview@0.14/style.css"
  ></link>
```
2. Import the JavaScript file via CDN (place it before any other js script imports) :
```HTML
 <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/wix-prototypers/prototypers_prototype-loader-preview@latest/loader.js"
    ></script>
```
3. In your JS file Call the prototoypeLoader function before preforming any other actions:

```Javascript
prototoypeLoader(type,delay)
```
#### type - defines the loader used. options:
```Javascript
"default" //no need to pass it, will be used by default:)
"editor-loader"
"editorx-loader
```
#### delay - defines the minimal period of time (ms) that the loader will be shown. defaults to 500
