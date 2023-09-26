"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{50542:function(e,t,n){n.d(t,{ZP:function(){return pe}});var r={};n.r(r),n.d(r,{addTrackers:function(){return U},default:function(){return ce},event:function(){return ne},exception:function(){return re},ga:function(){return Q},initialize:function(){return H},modalview:function(){return ee},outboundLink:function(){return ie},pageview:function(){return Y},plugin:function(){return oe},send:function(){return X},set:function(){return W},testModeAPI:function(){return ae},timing:function(){return te}});var o=n(67294),i=n(45697),a=n.n(i);function c(e){console.warn("[react-ga]",e)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=["to","target"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="_blank",j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,i=d(a);function a(){var e;g(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(m(e=i.call.apply(i,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f=r!==w,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),a.trackLink(l,(function(){window.location.href=i}),u)):a.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=s(s({},p(e,l)),{},{target:n,href:t,onClick:this.handleClick});return n===w&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.Component);h(j,"trackLink",(function(){c("ga tracking not enabled")})),j.propTypes={eventLabel:a().string.isRequired,target:a().string,to:a().string,onClick:a().func,trackerNames:a().arrayOf(a().string)},j.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function k(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function P(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var A=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function S(e){return P(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(A)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var E=!1;function D(e){console.info("[react-ga]",e)}var C=[],N={calls:C,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];C.push([].concat(t))},resetCalls:function(){C.length=0}},T=["category","action","label","value","nonInteraction","transport"];function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J="undefined"===typeof window||"undefined"===typeof document,z=!1,B=!0,G=!1,M=!0,F=!0,K=function(){var e;return G?N.ga.apply(N,arguments):!J&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function V(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(n=S(e)),t&&(n=k(n)),n}(e,B,F)}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!M&&Array.isArray(e)||K.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){K.apply(void 0,_(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):c("ga command must be a string")}function $(e,t){e?t&&(t.debug&&!0===t.debug&&(z=!0),!1===t.titleCase&&(B=!1),!1===t.redactEmail&&(F=!1),t.useExistingGa)||(t&&t.gaOptions?K("create",e,t.gaOptions):K("create",e,"auto")):c("gaTrackingID is required in initialize()")}function U(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===I(e)?$(e.trackingId,e):c("All configs must be an object")})):$(e,t),!0}function H(e,t){if(t&&!0===t.testMode)G=!0;else{if(J)return;t&&!0===t.standardImplementation||function(e){if(!E){E=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,i,a,c,u,l=e&&e.onerror;n=window,r=document,o="script",i=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}M=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,U(e,t)}function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(K.apply(void 0,t),z&&(D("called ga('arguments');"),D("with arguments: ".concat(JSON.stringify(t))))),window.ga}function W(e,t){e?"object"===I(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),Z(t,"set",e),z&&(D("called ga('set', fieldsObject);"),D("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function X(e,t){Z(t,"send",e),z&&(D("called ga('send', fieldObject);"),D("with fieldObject: ".concat(JSON.stringify(e))),D("with trackers: ".concat(JSON.stringify(t))))}function Y(e,t,n){if(e){var r=P(e);if(""!==r){var o={};if(n&&(o.title=n),Z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),z){D("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),D("with path: ".concat(r).concat(i))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function ee(e,t){if(e){var n,r="/"===(n=P(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);Z(t,"send","pageview",o),z&&(D("called ga('send', 'pageview', path);"),D("with path: ".concat(o)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var a={hitType:"timing",timingCategory:V(t),timingVar:V(n),timingValue:r};o&&(a.timingLabel=V(o)),X(a,i)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,u=x(e,T),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:V(t),eventAction:V(n)};r&&(f.eventLabel=V(r)),"undefined"!==typeof o&&("number"!==typeof o?c("Expected `args.value` arg to be a Number."):f.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?c("`args.nonInteraction` must be a boolean."):f.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=a)),Object.keys(u).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=u[e]})),Object.keys(u).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=u[e]})),X(f,l)}else c("args.category AND args.action are required in event()")}function re(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=V(n)),"undefined"!==typeof r&&("boolean"!==typeof r?c("`args.fatal` must be a boolean."):o.exFatal=r),X(o,t)}var oe={require:function(e,t,n){if(e){var r=P(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==I(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),Q(o,r,t),z&&D("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Q(o,r),z&&D("called ga('require', '".concat(r,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var u="".concat(e,":").concat(t);n=n||null,r&&n?(Q(u,r,n),z&&(D("called ga('".concat(u,"');")),D('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Q(u,n),z&&(D("called ga('".concat(u,"');")),D("with payload: ".concat(JSON.stringify(n))))):(Q(u),z&&D("called ga('".concat(u,"');")))}}};function ie(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:V(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},X(r,n)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var ae=N,ce={initialize:H,ga:Q,set:W,send:X,pageview:Y,modalview:ee,timing:te,event:ne,exception:re,plugin:oe,outboundLink:ie,testModeAPI:N};function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.origTrackLink=j.trackLink,j.trackLink=ie;var se=j,pe=le(le({},r),{},{OutboundLink:se})}}]);