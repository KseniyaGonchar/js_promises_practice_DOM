parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=function(e){var t=e.split("P").join(" p");return t[0].toUpperCase()+t.slice(1)},t=function(t,n){var s=document.createElement("div");return s.setAttribute("data-qa","notification"),"success"===t?(s.classList="success",s.textContent=e(n)+" was resolved",document.body.appendChild(s)):"error"===t?(s.classList="warning",s.textContent=e(n)+" was rejected",document.body.appendChild(s)):void 0},n=new Promise(function(e,t){document.querySelector("body").addEventListener("mousedown",function(t){switch(event.preventDefault(),t.buttons){case 1:e()}}),setTimeout(t,3e3)}),s=new Promise(function(e,t){document.querySelector("body").addEventListener("mousedown",function(t){switch(event.preventDefault(),t.buttons){case 1:case 2:e()}})}),o=new Promise(function(e,t){document.querySelector("body").addEventListener("mousedown",function(t){switch(event.preventDefault(),t.buttons){case 2:e()}})});n.then(function(){t("success","firstPromise")}).catch(function(){t("error","firstPromise")}),s.then(function(){t("success","secondPromise")}),Promise.all([n,s,o]).then(function(){t("success","thirdPromise")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.365195e0.js.map