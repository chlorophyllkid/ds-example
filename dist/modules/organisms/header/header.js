var header=function(){"use strict";function t(t){const o={selector:"body",scope:document};this.options=Object.assign({},o,t)}function o(o){t.call(this,o);const e={selector:"body",scope:document};this.options=Object.assign({},e,o)}function e(t){o.call(this,t);const e={selector:"body",scope:document};this.options=Object.assign({},e,t)}function s(o){t.call(this,o);const e={selector:".button",scope:document};this.options=Object.assign({},e,o)}function c(o){t.call(this,o);const e={selector:'input[type="text"]',scope:document};this.options=Object.assign({},e,o)}function r(t){o.call(this,t);const e={selector:".searchbar",scope:document};this.options=Object.assign({},e,t),this.childScope=this.options.scope.querySelector(this.options.selector),this.searchbarButton=new s({selector:".searchbar-button",scope:this.childScope}),this.searchbarButton.subscribe("click",this),this.searchbarInput=new c({selector:".searchbar-input",scope:this.childScope}),this.searchbarInput.subscribe("change",this)}function n(t){e.call(this,t);const o={selector:".header",scope:document};this.options=Object.assign({},o,t),this.childScope=this.options.scope.querySelector(this.options.selector),this.headerSearchbar=new r({selector:".header-searchbar",scope:this.childScope}),this.headerSearchbar.subscribe("search",this)}return window.addEventListener("load",function(){new header}),t.prototype.subscribe=function(t,o){const e=this,{scope:s,selector:c}=e.options;s.querySelectorAll(c).forEach(s=>{s.addEventListener(t,t=>{t.stopPropagation(),o.notify(e,t.type)},!0)})},o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.prototype.notify=function(t,o){const e=this,{selector:s}=e.options;console.info(s,"got",o,"Event from",t.options.selector)},e.prototype=Object.create(o.prototype),e.prototype.constructor=e,s.prototype=Object.create(t.prototype),s.prototype.constructor=s,c.prototype=Object.create(t.prototype),c.prototype.constructor=c,r.prototype=Object.create(o.prototype),r.prototype.constructor=r,n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n}();