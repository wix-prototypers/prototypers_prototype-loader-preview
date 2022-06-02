# prototypers_prototype-loader

A styled loader for code-based prototypes. the loader clears all HTML, styles and images from the browser untill the prototype is fully loaded. In the meanwhile a customized loader will be shown.
## Usage
1. Import the JavaScript file via CDN :
```HTML
 <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/wix-prototypers/prototypers_prototype-loader-preview@latest/loader.js"
    ></script>
```
2. In your JS file Call the prototoypeLoader function before preforming any other actions:

```Javascript
prototoypeLoader(type,delay)
```
#### type defines the loader used. options:
```Javascript
"default" //no need to pass it, will be use by default:)
"editor-loader"
"editorx-loader
```
