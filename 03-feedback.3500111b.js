function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function b(t,e,n){var i,r,o,f,u,a,c=0,l=!1,d=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,o=r;return i=r=void 0,c=e,f=t.apply(o,n)}function j(t){return c=t,u=setTimeout(w,e),l?m(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function w(){var t=v();if(h(t))return O(t);u=setTimeout(w,function(t){var n=e-(t-a);return d?p(n,o-(t-c)):n}(t))}function O(t){return u=void 0,b&&i?m(t):(i=r=void 0,f)}function T(){var t=v(),n=h(t);if(i=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(d)return u=setTimeout(w,e),m(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=y(e)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(y(n.maxWait)||0,e):o,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=r=u=void 0},T.flush=function(){return void 0===u?f:O(v())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(t,e,{leading:i,maxWait:e,trailing:r})};const m=document.querySelector(".feedback-form");m.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),m.addEventListener("submit",(function(t){t.preventDefault(),JSON.parse(localStorage.getItem("feedback-form-state")),m.reset()}));let j={};
//# sourceMappingURL=03-feedback.3500111b.js.map