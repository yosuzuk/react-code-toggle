!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("codemirror/mode/htmlmixed/htmlmixed"),require("codemirror/mode/jsx/jsx"),require("jsx-to-string"),require("pretty"),require("react"),require("react-codemirror"),require("react-dom/server")):"function"==typeof define&&define.amd?define("react-code-toggle",["codemirror/mode/htmlmixed/htmlmixed","codemirror/mode/jsx/jsx","jsx-to-string","pretty","react","react-codemirror","react-dom/server"],r):"object"==typeof exports?exports["react-code-toggle"]=r(require("codemirror/mode/htmlmixed/htmlmixed"),require("codemirror/mode/jsx/jsx"),require("jsx-to-string"),require("pretty"),require("react"),require("react-codemirror"),require("react-dom/server")):e["react-code-toggle"]=r(e["codemirror/mode/htmlmixed/htmlmixed"],e["codemirror/mode/jsx/jsx"],e["jsx-to-string"],e.pretty,e.react,e["react-codemirror"],e["react-dom/server"])}(this,function(e,r,n,o,t,i,s){return function(e){function r(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n={};return r.m=e,r.c=n,r.i=function(e){return e},r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=15)}([function(e,r){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],r=0;r<this.length;r++){var n=this[r];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(r,n){"string"==typeof r&&(r=[[null,r,""]]);for(var o={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(o[i]=!0)}for(t=0;t<r.length;t++){var s=r[t];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,r){function n(e,r){for(var n=0;n<e.length;n++){var o=e[n],t=p[o.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](o.parts[i]);for(;i<o.parts.length;i++)t.parts.push(c(o.parts[i],r))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(c(o.parts[i],r));p[o.id]={id:o.id,refs:1,parts:s}}}}function o(e){for(var r=[],n={},o=0;o<e.length;o++){var t=e[o],i=t[0],s=t[1],a=t[2],c=t[3],l={css:s,media:a,sourceMap:c};n[i]?n[i].parts.push(l):r.push(n[i]={id:i,parts:[l]})}return r}function t(e,r){var n=h(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(r,o.nextSibling):n.appendChild(r):n.insertBefore(r,n.firstChild),x.push(r);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(r)}}function i(e){e.parentNode.removeChild(e);var r=x.indexOf(e);r>=0&&x.splice(r,1)}function s(e){var r=document.createElement("style");return r.type="text/css",t(e,r),r}function a(e){var r=document.createElement("link");return r.rel="stylesheet",t(e,r),r}function c(e,r){var n,o,t;if(r.singleton){var c=g++;n=b||(b=s(r)),o=l.bind(null,n,c,!1),t=l.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(r),o=u.bind(null,n),t=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(r),o=d.bind(null,n),t=function(){i(n)});return o(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;o(e=r)}else t()}}function l(e,r,n,o){var t=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(r,t);else{var i=document.createTextNode(t),s=e.childNodes;s[r]&&e.removeChild(s[r]),s.length?e.insertBefore(i,s[r]):e.appendChild(i)}}function d(e,r){var n=r.css,o=r.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,r){var n=r.css,o=r.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var t=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(t),i&&URL.revokeObjectURL(i)}var p={},m=function(e){var r;return function(){return"undefined"==typeof r&&(r=e.apply(this,arguments)),r}},f=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,x=[];e.exports=function(e,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},"undefined"==typeof r.singleton&&(r.singleton=f()),"undefined"==typeof r.insertAt&&(r.insertAt="bottom");var t=o(e);return n(t,r),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s],c=p[a.id];c.refs--,i.push(c)}if(e){var l=o(e);n(l,r)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete p[c.id]}}}};var v=function(){var e=[];return function(r,n){return e[r]=n,e.filter(Boolean).join("\n")}}()},function(e,r,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{});o.locals&&(e.exports=o.locals)},function(e,r,n){var o=n(13);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{});o.locals&&(e.exports=o.locals)},function(e,r,n){var o=n(14);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{});o.locals&&(e.exports=o.locals)},function(r,n){r.exports=e},function(e,n){e.exports=r},function(e,r){e.exports=n},function(e,r){e.exports=o},function(e,r){e.exports=t},function(e,r){e.exports=i},function(e,r){e.exports=s},function(e,r,n){r=e.exports=n(0)(),r.push([e.i,"/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",""])},function(e,r,n){r=e.exports=n(0)(),r.push([e.i,"/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3 { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",""])},function(e,r,n){r=e.exports=n(0)(),r.push([e.i,'.rct-container {\r\n    margin-bottom: 36px;\r\n}\r\n\r\n.rct-live-example {\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px 4px 0 0;\r\n    padding: 45px 15px 15px 15px;\r\n    position: relative;\r\n}\r\n\r\n.rct-toggle-code {\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n    border-top: none;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    float: right;\r\n    margin-left: 8px;\r\n    padding: 4px 8px;\r\n    position: relative;\r\n    top: -1px;\r\n}\r\n\r\n.rct-toggle-code.open {\r\n    background-color: #272822;\r\n    color: #fff;\r\n}\r\n\r\n.rct-live-example:after,\r\n.rct-jsx-code:after,\r\n.rct-html-code:after {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #959595;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.rct-live-example:after {\r\n    content: "Example";\r\n}\r\n\r\n.rct-jsx-code:after {\r\n    content: "JSX";\r\n}\r\n\r\n.rct-html-code:after {\r\n    content: "HTML";\r\n}\r\n\r\n.rct-jsx-code,\r\n.rct-html-code {\r\n    background-color: #272822;\r\n    border-top: 1px solid #ddd;\r\n    border-bottom: 1px solid #ddd;\r\n    padding-top: 35px;\r\n    position: relative;\r\n}\r\n\r\n.rct-code-block:empty {\r\n    display: none;\r\n}\r\n\r\n.CodeMirror {\r\n    padding: 10px;\r\n\r\n    /* for autoresize, used together with "viewportMargin: Infinity" */\r\n    height: auto;\r\n}\r\n',""])},function(e,r,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function s(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,n,o){return n&&e(r.prototype,n),o&&e(r,o),r}}(),c=n(9),l=o(c),d=n(7),u=o(d),p=n(11),m=n(8),f=o(m),h=n(10),b=o(h);n(6),n(5),n(2),n(3),n(4);var g={htmlBeautifier:l.default.PropTypes.func,htmlCode:l.default.PropTypes.string,htmlOptions:l.default.PropTypes.object,jsxBeautifier:l.default.PropTypes.func,jsxCode:l.default.PropTypes.string,jsxOptions:l.default.PropTypes.object},x={htmlBeautifier:f.default,htmlOptions:{mode:"htmlmixed",indentUnit:2,readOnly:!0,theme:"monokai",viewportMargin:1/0},jsxBeautifier:function(e){return e},jsxOptions:{mode:"jsx",indentUnit:2,readOnly:!0,theme:"monokai",viewportMargin:1/0}},v=function(e){function r(){var e;t(this,r);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];var a=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o)));return a.state={showJsx:!a.props.children&&!!a.props.jsxCode,showHtml:!a.props.children&&!a.props.jsxCode&&!!a.props.htmlCode},a}return s(r,e),a(r,[{key:"hasToggle",value:function(){return!!(this.props.children||this.props.jsxCode&&this.props.htmlCode)}},{key:"toggleJsx",value:function(){this.setState({showJsx:!this.state.showJsx})}},{key:"toggleHtml",value:function(){this.setState({showHtml:!this.state.showHtml})}},{key:"render",value:function(){return l.default.createElement("div",{className:"rct-container"},this.renderLiveExample(),this.renderJsxCode(),this.renderHtmlCode(),this.renderHtmlToggle(),this.renderJsxToggle())}},{key:"renderLiveExample",value:function(){return this.props.children?l.default.createElement("div",{className:"rct-live-example"},this.props.children):null}},{key:"renderJsxCode",value:function(){return this.state.showJsx?l.default.createElement("div",{className:"rct-jsx-code"},l.default.createElement(b.default,{value:this.props.jsxBeautifier(this.props.jsxCode||this.renderChildren(u.default)||"{/* no code */}"),options:this.props.jsxOptions})):null}},{key:"renderHtmlCode",value:function(){return this.state.showHtml?l.default.createElement("div",{className:"rct-html-code"},l.default.createElement(b.default,{value:this.props.htmlBeautifier(this.props.htmlCode||this.renderChildren(p.renderToStaticMarkup)||"<!-- no code -->"),options:this.props.htmlOptions})):null}},{key:"renderChildren",value:function(e){return this.props.children?l.default.Children.map(this.props.children,function(r){return e(r)}).join("\n"):null}},{key:"renderJsxToggle",value:function(){return this.hasToggle()&&(this.props.jsxCode||this.props.children)?l.default.createElement("a",{className:"rct-toggle-code "+(this.state.showJsx?"open":""),onClick:this.toggleJsx.bind(this)},this.state.showJsx?"hide JSX":"show JSX"):null}},{key:"renderHtmlToggle",value:function(){return this.hasToggle()&&(this.props.htmlCode||this.props.children)?l.default.createElement("a",{className:"rct-toggle-code "+(this.state.showHtml?"open":""),onClick:this.toggleHtml.bind(this)},this.state.showHtml?"hide HTML":"show HTML"):null}}]),r}(c.Component);v.propTypes=g,v.defaultProps=x,r.default=v}])});