!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){n("hghA"),e.exports=n("Ql/l")},"Ql/l":function(e,t){var n;n=document.querySelectorAll(".section--home-faqs h3"),Array.prototype.forEach.call(n,function(e){e.innerHTML='\n      <button aria-expanded="false">\n        '+e.textContent+'\n        <svg width="46" height="46" viewBox="0 0 46 46">\n          <path fill="#57E5E2" stroke="#0D1D48" stroke-width="4" stroke-miterlimit="10" d="M32.1 23.1v16.2l-14-8.1L4 23.1l14.1-8.2 14-8.1z"/>\n        </svg>\n\n      </button>\n    ';var t=function(e){for(var t=[];e.nextElementSibling&&"H3"!==e.nextElementSibling.tagName;)t.push(e.nextElementSibling),e=e.nextElementSibling;return t.forEach(function(e){e.parentNode.removeChild(e)}),t}(e),n=document.createElement("div");n.hidden=!0,t.forEach(function(e){n.appendChild(e)}),e.parentNode.insertBefore(n,e.nextElementSibling);var r=e.querySelector("button");r.onclick=function(){var e="true"===r.getAttribute("aria-expanded")||!1;e||(n.parentNode.querySelectorAll("div").forEach(function(e){e.hidden=!0}),n.parentNode.querySelectorAll("button").forEach(function(e){e.setAttribute("aria-expanded",!1)})),r.setAttribute("aria-expanded",!e),n.hidden=e}})},hghA:function(e,t){}});