/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/callback.js":
/*!****************************!*\
  !*** ./src/js/callback.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var callbackModal = document.querySelector('.callback-modal');
var buttonShowCallbackModal = document.querySelectorAll('.primary-btn--type_call');
var buttonCloseCallbackModal = callbackModal.querySelector('.callback-modal__close');
var callbackOverlay = document.createElement('div');
callbackOverlay.classList.add('overlay');
callbackOverlay.style.zIndex = '199';

for (var i = 0; i < buttonShowCallbackModal.length; i++) {
  buttonShowCallbackModal[i].addEventListener('click', function (e) {
    e.preventDefault();
    document.body.appendChild(callbackOverlay);
    callbackModal.classList.add('callback-modal--open');

    if (detect.parse(navigator.userAgent).browser.family !== 'IE') {
      callbackModal.querySelector('.callback-form__phone-number').focus();
    }

    document.body.style = 'overflow: hidden';
  });
}

buttonCloseCallbackModal.addEventListener('click', function (e) {
  callbackModal.classList.remove('callback-modal--open');
  document.body.removeChild(callbackOverlay);
  document.body.removeAttribute('style');
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    callbackModal.classList.remove('callback-modal--open');
    document.body.removeChild(callbackOverlay);
    document.body.removeAttribute('style');
  }
});
callbackOverlay.addEventListener('click', function () {
  callbackModal.classList.remove('callback-modal--open');
  document.body.removeAttribute('style');
  document.body.removeChild(this);
});

/***/ }),

/***/ "./src/js/detect.js":
/*!**************************!*\
  !*** ./src/js/detect.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Detect.js: User-Agent Parser
 * https://github.com/darcyclarke/Detect.js
 * Dual licensed under the MIT and GPL licenses.
 *
 * @version 2.2.2
 * @author Darcy Clarke
 * @url http://darcyclarke.me
 * @createdat Mon Oct 26 2015 08:21:54 GMT-0200 (Horário brasileiro de verão)
 *
 * Based on UA-Parser (https://github.com/tobie/ua-parser) by Tobie Langel
 *
 * Example Usage:
 * var agentInfo = detect.parse(navigator.userAgent);
 * console.log(agentInfo.browser.family); // Chrome
 *
 */
(function (root, undefined) {
  // Shim Array.prototype.map if necessary
  // Production steps of ECMA-262, Edition 5, 15.4.4.19
  // Reference: http://es5.github.com/#x15.4.4.19
  if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
      var T, A, k;

      if (this == null) {
        throw new TypeError(" this is null or not defined");
      } // 1. Let O be the result of calling ToObject passing the |this| value as the argument.


      var O = Object(this); // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).

      var len = O.length >>> 0; // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11

      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      } // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.


      if (thisArg) {
        T = thisArg;
      } // 6. Let A be a new array created as if by the expression new Array(len) where Array is
      // the standard built-in constructor with that name and len is the value of len.


      A = new Array(len); // 7. Let k be 0

      k = 0; // 8. Repeat, while k < len

      while (k < len) {
        var kValue, mappedValue; // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then

        if (k in O) {
          // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
          kValue = O[k]; // ii. Let mappedValue be the result of calling the Call internal method of callback
          // with T as the this value and argument list containing kValue, k, and O.

          mappedValue = callback.call(T, kValue, k, O); // iii. Call the DefineOwnProperty internal method of A with arguments
          // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
          // and false.
          // In browsers that support Object.defineProperty, use the following:
          // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
          // For best browser support, use the following:

          A[k] = mappedValue;
        } // d. Increase k by 1.


        k++;
      } // 9. return A


      return A;
    };
  } // Detect


  var detect = root.detect = function () {
    // Context
    var _this = function _this() {}; // Regexes


    var regexes = {
      browser_parsers: [{
        regex: "^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",
        family_replacement: "Wii",
        manufacturer: "Nintendo"
      }, {
        regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
        family_replacement: "Camino",
        other: true
      }, {
        regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
        family_replacement: "Pale Moon (Firefox Variant)",
        other: true
      }, {
        regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
        family_replacement: "Firefox Mobile"
      }, {
        regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
        family_replacment: "Firefox Mobile"
      }, {
        regex: "(Fennec)/(\\d+)\\.(\\d+)",
        family_replacement: "Firefox Mobile"
      }, {
        regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
        family_replacement: "Firefox Mobile"
      }, {
        regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
        family_replacement: "Firefox ($1)"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
        family_replacement: "Firefox Alpha"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
        family_replacement: "Firefox Beta"
      }, {
        regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
        family_replacement: "Firefox Alpha"
      }, {
        regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
        family_replacement: "Firefox Beta"
      }, {
        regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
        family_replacement: "Firefox ($1)"
      }, {
        regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "MicroB",
        tablet: true
      }, {
        regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"
      }, {
        regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",
        family_replacement: "Flock",
        other: true
      }, {
        regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Rockmelt",
        other: true
      }, {
        regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Netscape"
      }, {
        regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
        family_replacement: "Netscape"
      }, {
        regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Netscape"
      }, {
        regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
        family_replacement: "My Internet Browser",
        other: true
      }, {
        regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        family_replacement: "Opera Tablet",
        tablet: true
      }, {
        regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
        family_replacement: "Opera Mobile"
      }, {
        regex: "Opera Mobi",
        family_replacement: "Opera Mobile"
      }, {
        regex: "(Opera Mini)/(\\d+)\\.(\\d+)",
        family_replacement: "Opera Mini"
      }, {
        regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)",
        family_replacement: "Opera Mini"
      }, {
        regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        family_replacement: "Opera"
      }, {
        regex: "(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        family_replacement: "Opera"
      }, {
        regex: "(webOSBrowser)/(\\d+)\\.(\\d+)",
        family_replacement: "webOS"
      }, {
        regex: "(webOS)/(\\d+)\\.(\\d+)",
        family_replacement: "webOS"
      }, {
        regex: "(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",
        family_replacement: "webOS TouchPad"
      }, {
        regex: "(luakit)",
        family_replacement: "LuaKit",
        other: true
      }, {
        regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",
        family_replacement: "Lightning",
        other: true
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
        family_replacement: "Swiftfox",
        other: true
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
        family_replacement: "Swiftfox",
        other: true
      }, {
        regex: "rekonq",
        family_replacement: "Rekonq",
        other: true
      }, {
        regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
        family_replacement: "Conkeror",
        other: true
      }, {
        regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Konqueror",
        other: true
      }, {
        regex: "(WeTab)-Browser",
        family_replacement: "WeTab",
        other: true
      }, {
        regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Comodo Dragon",
        other: true
      }, {
        regex: "(YottaaMonitor)",
        family_replacement: "Yottaa Monitor",
        other: true
      }, {
        regex: "(Kindle)/(\\d+)\\.(\\d+)",
        family_replacement: "Kindle"
      }, {
        regex: "(Symphony) (\\d+).(\\d+)",
        family_replacement: "Symphony",
        other: true
      }, {
        regex: "Minimo",
        family_replacement: "Minimo",
        other: true
      }, {
        regex: "(Edge)/(\\d+)\\.(\\d+)",
        family_replacement: "Edge"
      }, {
        regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Chrome Mobile"
      }, {
        regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Chrome Mobile iOS"
      }, {
        regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
        family_replacement: "Chrome Mobile"
      }, {
        regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Chrome Frame"
      }, {
        regex: "(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "UC Browser",
        other: true
      }, {
        regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
        family_replacement: "Tizen Browser",
        other: true
      }, {
        regex: "(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",
        family_replacement: "Epiphany",
        other: true
      }, {
        regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
        family_replacement: "Sogou Explorer",
        other: true
      }, {
        regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
        family_replacement: "PingdomBot",
        other: true
      }, {
        regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
        family_replacement: "FacebookBot"
      }, {
        regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
        family_replacement: "TwitterBot"
      }, {
        regex: "(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"
      }, {
        regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"
      }, {
        regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"
      }, {
        regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"
      }, {
        regex: "(Android) Donut",
        v2_replacement: "2",
        v1_replacement: "1"
      }, {
        regex: "(Android) Eclair",
        v2_replacement: "1",
        v1_replacement: "2"
      }, {
        regex: "(Android) Froyo",
        v2_replacement: "2",
        v1_replacement: "2"
      }, {
        regex: "(Android) Gingerbread",
        v2_replacement: "3",
        v1_replacement: "2"
      }, {
        regex: "(Android) Honeycomb",
        v1_replacement: "3"
      }, {
        regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
        family_replacement: "IE Mobile"
      }, {
        regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
        family_replacement: "IE Large Screen"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"
      }, {
        regex: "(Obigo)InternetBrowser",
        other: true
      }, {
        regex: "(Obigo)\\-Browser",
        other: true
      }, {
        regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
        other: true
      }, {
        regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
        family_replacement: "Maxthon",
        other: true
      }, {
        regex: "(Maxthon|MyIE2|Uzbl|Shiira)",
        v1_replacement: "0",
        other: true
      }, {
        regex: "(PLAYSTATION) (\\d+)",
        family_replacement: "PlayStation",
        manufacturer: "Sony"
      }, {
        regex: "(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",
        manufacturer: "Sony"
      }, {
        regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(POLARIS)/(\\d+)\\.(\\d+)",
        family_replacement: "Polaris",
        other: true
      }, {
        regex: "(Embider)/(\\d+)\\.(\\d+)",
        family_replacement: "Polaris",
        other: true
      }, {
        regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Bon Echo",
        other: true
      }, {
        regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPod)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        tablet: true,
        manufacturer: "Apple"
      }, {
        regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        tablet: true,
        manufacturer: "Apple"
      }, {
        regex: "(iPad)",
        family_replacement: "Mobile Safari",
        tablet: true,
        manufacturer: "Apple"
      }, {
        regex: "(AvantGo) (\\d+).(\\d+)",
        other: true
      }, {
        regex: "(Avant)",
        v1_replacement: "1",
        other: true
      }, {
        regex: "^(Nokia)",
        family_replacement: "Nokia Services (WAP) Browser",
        manufacturer: "Nokia"
      }, {
        regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
        family_replacement: "NokiaBrowser",
        manufacturer: "Nokia"
      }, {
        regex: "(Series60)/5\\.0",
        v2_replacement: "0",
        v1_replacement: "7",
        family_replacement: "NokiaBrowser",
        manufacturer: "Nokia"
      }, {
        regex: "(Series60)/(\\d+)\\.(\\d+)",
        family_replacement: "Nokia OSS Browser",
        manufacturer: "Nokia"
      }, {
        regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Nokia Series 40 Ovi Browser",
        manufacturer: "Nokia"
      }, {
        regex: "(Nokia)[EN]?(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Blackberry WebKit",
        tablet: true,
        manufacturer: "Nokia"
      }, {
        regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Blackberry WebKit",
        manufacturer: "RIM"
      }, {
        regex: "(Black[bB]erry)\\s?(\\d+)",
        family_replacement: "Blackberry",
        manufacturer: "RIM"
      }, {
        regex: "(OmniWeb)/v(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(Blazer)/(\\d+)\\.(\\d+)",
        family_replacement: "Palm Blazer",
        manufacturer: "Palm"
      }, {
        regex: "(Pre)/(\\d+)\\.(\\d+)",
        family_replacement: "Palm Pre",
        manufacturer: "Palm"
      }, {
        regex: "(Links) \\((\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
        other: true,
        tablet: true
      }, {
        regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",
        family_replacement: "WebKit Nightly"
      }, {
        regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
        family_replacement: "Safari"
      }, {
        regex: "(Safari)/\\d+"
      }, {
        regex: "(OLPC)/Update(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(OLPC)/Update()\\.(\\d+)",
        v1_replacement: "0",
        other: true
      }, {
        regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(Teleca)",
        family_replacement: "Teleca Browser",
        other: true
      }, {
        regex: "Trident(.*)rv.(\\d+)\\.(\\d+)",
        family_replacement: "IE"
      }, {
        regex: "(MSIE) (\\d+)\\.(\\d+)",
        family_replacement: "IE"
      }],
      os_parsers: [{
        regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
      }, {
        regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
      }, {
        regex: "(Android) Donut",
        os_v2_replacement: "2",
        os_v1_replacement: "1"
      }, {
        regex: "(Android) Eclair",
        os_v2_replacement: "1",
        os_v1_replacement: "2"
      }, {
        regex: "(Android) Froyo",
        os_v2_replacement: "2",
        os_v1_replacement: "2"
      }, {
        regex: "(Android) Gingerbread",
        os_v2_replacement: "3",
        os_v1_replacement: "2"
      }, {
        regex: "(Android) Honeycomb",
        os_v1_replacement: "3"
      }, {
        regex: "(Silk-Accelerated=[a-z]{4,5})",
        os_replacement: "Android"
      }, {
        regex: "(Windows Phone 6\\.5)"
      }, {
        regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
        os_replacement: "Windows XP"
      }, {
        regex: "(XBLWP7)",
        os_replacement: "Windows Phone OS"
      }, {
        regex: "(Windows NT 6\\.1)",
        os_replacement: "Windows 7"
      }, {
        regex: "(Windows NT 6\\.0)",
        os_replacement: "Windows Vista"
      }, {
        regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"
      }, {
        regex: "(Windows NT 6\\.4|Windows NT 10\\.0)",
        os_replacement: "Windows 10"
      }, {
        regex: "(Windows NT 6\\.2)",
        os_replacement: "Windows 8"
      }, {
        regex: "(Windows Phone 8)",
        os_replacement: "Windows Phone 8"
      }, {
        regex: "(Windows NT 5\\.0)",
        os_replacement: "Windows 2000"
      }, {
        regex: "(Windows Phone OS) (\\d+)\\.(\\d+)"
      }, {
        regex: "(Windows ?Mobile)",
        os_replacement: "Windows Mobile"
      }, {
        regex: "(WinNT4.0)",
        os_replacement: "Windows NT 4.0"
      }, {
        regex: "(Win98)",
        os_replacement: "Windows 98"
      }, {
        regex: "(Tizen)/(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",
        manufacturer: "Apple"
      }, {
        regex: "(?:PPC|Intel) (Mac OS X)",
        manufacturer: "Apple"
      }, {
        regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
        os_replacement: "iOS",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone|iPad|iPod); Opera",
        os_replacement: "iOS",
        manufacturer: "Apple"
      }, {
        regex: "(iPad); Opera",
        tablet: true,
        manufacturer: "Apple"
      }, {
        regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
        os_replacement: "iOS",
        manufacturer: "Apple"
      }, {
        regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "Chrome OS"
      }, {
        regex: "(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        other: true
      }, {
        regex: "(Linux Mint)(?:/(\\d+))?",
        other: true
      }, {
        regex: "(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        other: true
      }, {
        regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
        os_replacement: "Symbian OS"
      }, {
        regex: "(Symbian/3).+NokiaBrowser/7\\.3",
        os_replacement: "Symbian^3 Anna"
      }, {
        regex: "(Symbian/3).+NokiaBrowser/7\\.4",
        os_replacement: "Symbian^3 Belle"
      }, {
        regex: "(Symbian/3)",
        os_replacement: "Symbian^3"
      }, {
        regex: "(Series 60|SymbOS|S60)",
        os_replacement: "Symbian OS"
      }, {
        regex: "(MeeGo)",
        other: true
      }, {
        regex: "Symbian [Oo][Ss]",
        os_replacement: "Symbian OS"
      }, {
        regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "BlackBerry OS",
        manufacturer: "RIM"
      }, {
        regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "BlackBerry OS",
        manufacturer: "RIM"
      }, {
        regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
        os_replacement: "BlackBerry Tablet OS",
        tablet: true,
        manufacturer: "RIM"
      }, {
        regex: "(Play[Bb]ook)",
        os_replacement: "BlackBerry Tablet OS",
        tablet: true,
        manufacturer: "RIM"
      }, {
        regex: "(Black[Bb]erry)",
        os_replacement: "Blackberry OS",
        manufacturer: "RIM"
      }, {
        regex: "(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "webOS"
      }, {
        regex: "(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",
        other: true
      }, {
        regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"
      }, {
        regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"
      }, {
        regex: "(Linux|BSD)",
        other: true
      }],
      mobile_os_families: ["Windows Phone 6.5", "Windows CE", "Symbian OS"],
      device_parsers: [{
        regex: "HTC ([A-Z][a-z0-9]+) Build",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC_Touch_([A-Za-z0-9]+)",
        device_replacement: "HTC Touch ($1)",
        manufacturer: "HTC"
      }, {
        regex: "USCCHTC(\\d+)",
        device_replacement: "HTC $1 (US Cellular)",
        manufacturer: "HTC"
      }, {
        regex: "Sprint APA(9292)",
        device_replacement: "HTC $1 (Sprint)",
        manufacturer: "HTC"
      }, {
        regex: "HTC ([A-Za-z0-9]+ [A-Z])",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC-([A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC_([A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC ([A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "(ADR[A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "(HTC)",
        manufacturer: "HTC"
      }, {
        regex: "SonyEricsson([A-Za-z0-9]+)/",
        device_replacement: "Ericsson $1",
        other: true,
        manufacturer: "Sony"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"
      }, {
        regex: "NokiaN([0-9]+)",
        device_replacement: "Nokia N$1",
        manufacturer: "Nokia"
      }, {
        regex: "Nokia([A-Za-z0-9\\v-]+)",
        device_replacement: "Nokia $1",
        manufacturer: "Nokia"
      }, {
        regex: "NOKIA ([A-Za-z0-9\\-]+)",
        device_replacement: "Nokia $1",
        manufacturer: "Nokia"
      }, {
        regex: "Nokia ([A-Za-z0-9\\-]+)",
        device_replacement: "Nokia $1",
        manufacturer: "Nokia"
      }, {
        regex: "Lumia ([A-Za-z0-9\\-]+)",
        device_replacement: "Lumia $1",
        manufacturer: "Nokia"
      }, {
        regex: "Symbian",
        device_replacement: "Nokia",
        manufacturer: "Nokia"
      }, {
        regex: "(PlayBook).+RIM Tablet OS",
        device_replacement: "Blackberry Playbook",
        tablet: true,
        manufacturer: "RIM"
      }, {
        regex: "(Black[Bb]erry [0-9]+);",
        manufacturer: "RIM"
      }, {
        regex: "Black[Bb]erry([0-9]+)",
        device_replacement: "BlackBerry $1",
        manufacturer: "RIM"
      }, {
        regex: "(Pre)/(\\d+)\\.(\\d+)",
        device_replacement: "Palm Pre",
        manufacturer: "Palm"
      }, {
        regex: "(Pixi)/(\\d+)\\.(\\d+)",
        device_replacement: "Palm Pixi",
        manufacturer: "Palm"
      }, {
        regex: "(Touchpad)/(\\d+)\\.(\\d+)",
        device_replacement: "HP Touchpad",
        manufacturer: "HP"
      }, {
        regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
        device_replacement: "HP iPAQ $1",
        manufacturer: "HP"
      }, {
        regex: "Palm([A-Za-z0-9]+)",
        device_replacement: "Palm $1",
        manufacturer: "Palm"
      }, {
        regex: "Treo([A-Za-z0-9]+)",
        device_replacement: "Palm Treo $1",
        manufacturer: "Palm"
      }, {
        regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
        device_replacement: "HP Veer",
        manufacturer: "HP"
      }, {
        regex: "(Kindle Fire)",
        manufacturer: "Amazon"
      }, {
        regex: "(Kindle)",
        manufacturer: "Amazon"
      }, {
        regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
        device_replacement: "Kindle Fire",
        tablet: true,
        manufacturer: "Amazon"
      }, {
        regex: "(iPad) Simulator;",
        manufacturer: "Apple"
      }, {
        regex: "(iPad);",
        manufacturer: "Apple"
      }, {
        regex: "(iPod);",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone) Simulator;",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone);",
        manufacturer: "Apple"
      }, {
        regex: "Nexus\\ ([A-Za-z0-9\\-]+)",
        device_replacement: "Nexus $1"
      }, {
        regex: "acer_([A-Za-z0-9]+)_",
        device_replacement: "Acer $1",
        manufacturer: "Acer"
      }, {
        regex: "acer_([A-Za-z0-9]+)_",
        device_replacement: "Acer $1",
        manufacturer: "Acer"
      }, {
        regex: "Amoi\\-([A-Za-z0-9]+)",
        device_replacement: "Amoi $1",
        other: true,
        manufacturer: "Amoi"
      }, {
        regex: "AMOI\\-([A-Za-z0-9]+)",
        device_replacement: "Amoi $1",
        other: true,
        manufacturer: "Amoi"
      }, {
        regex: "Asus\\-([A-Za-z0-9]+)",
        device_replacement: "Asus $1",
        manufacturer: "Asus"
      }, {
        regex: "ASUS\\-([A-Za-z0-9]+)",
        device_replacement: "Asus $1",
        manufacturer: "Asus"
      }, {
        regex: "BIRD\\-([A-Za-z0-9]+)",
        device_replacement: "Bird $1",
        other: true
      }, {
        regex: "BIRD\\.([A-Za-z0-9]+)",
        device_replacement: "Bird $1",
        other: true
      }, {
        regex: "BIRD ([A-Za-z0-9]+)",
        device_replacement: "Bird $1",
        other: true
      }, {
        regex: "Dell ([A-Za-z0-9]+)",
        device_replacement: "Dell $1",
        manufacturer: "Dell"
      }, {
        regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
        device_replacement: "DoCoMo $1",
        other: true
      }, {
        regex: "([A-Za-z0-9]+)\\_W\\;FOMA",
        device_replacement: "DoCoMo $1",
        other: true
      }, {
        regex: "([A-Za-z0-9]+)\\;FOMA",
        device_replacement: "DoCoMo $1",
        other: true
      }, {
        regex: "vodafone([A-Za-z0-9]+)",
        device_replacement: "Huawei Vodafone $1",
        other: true
      }, {
        regex: "i\\-mate ([A-Za-z0-9]+)",
        device_replacement: "i-mate $1",
        other: true
      }, {
        regex: "Kyocera\\-([A-Za-z0-9]+)",
        device_replacement: "Kyocera $1",
        other: true
      }, {
        regex: "KWC\\-([A-Za-z0-9]+)",
        device_replacement: "Kyocera $1",
        other: true
      }, {
        regex: "Lenovo\\-([A-Za-z0-9]+)",
        device_replacement: "Lenovo $1",
        manufacturer: "Lenovo"
      }, {
        regex: "Lenovo\\_([A-Za-z0-9]+)",
        device_replacement: "Lenovo $1",
        manufacturer: "Levovo"
      }, {
        regex: "LG/([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG-LG([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE-LG([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE VX([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG ([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE LG\\-AX([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG\\-([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE\\-([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
        device_replacement: "Microsoft $1"
      }, {
        regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
        device_replacement: "Microsoft $1"
      }, {
        regex: "(Motorola)\\-([A-Za-z0-9]+)",
        manufacturer: "Motorola"
      }, {
        regex: "MOTO\\-([A-Za-z0-9]+)",
        device_replacement: "Motorola $1",
        manufacturer: "Motorola"
      }, {
        regex: "MOT\\-([A-Za-z0-9]+)",
        device_replacement: "Motorola $1",
        manufacturer: "Motorola"
      }, {
        regex: "Philips([A-Za-z0-9]+)",
        device_replacement: "Philips $1",
        manufacturer: "Philips"
      }, {
        regex: "Philips ([A-Za-z0-9]+)",
        device_replacement: "Philips $1",
        manufacturer: "Philips"
      }, {
        regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
        device_replacement: "Samsung $1",
        manufacturer: "Samsung"
      }, {
        regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
        device_replacement: "Samsung $1",
        manufacturer: "Samsung"
      }, {
        regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
        device_replacement: "Softbank $1",
        other: true
      }, {
        regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
        device_replacement: "Softbank $1",
        other: true
      }, {
        regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
        device_replacement: "Generic Smartphone"
      }, {
        regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",
        device_replacement: "Spider"
      }],
      mobile_browser_families: ["Firefox Mobile", "Opera Mobile", "Opera Mini", "Mobile Safari", "webOS", "IE Mobile", "Playstation Portable", "Nokia", "Blackberry", "Palm", "Silk", "Android", "Maemo", "Obigo", "Netfront", "AvantGo", "Teleca", "SEMC-Browser", "Bolt", "Iris", "UP.Browser", "Symphony", "Minimo", "Bunjaloo", "Jasmine", "Dolfin", "Polaris", "BREW", "Chrome Mobile", "Chrome Mobile iOS", "UC Browser", "Tizen Browser"]
    }; // Parsers

    _this.parsers = ["device_parsers", "browser_parsers", "os_parsers", "mobile_os_families", "mobile_browser_families"]; // Types

    _this.types = ["browser", "os", "device"]; // Regular Expressions

    _this.regexes = regexes || function () {
      var results = {};

      _this.parsers.map(function (parser) {
        results[parser] = [];
      });

      return results;
    }(); // Families


    _this.families = function () {
      var results = {};

      _this.types.map(function (type) {
        results[type] = [];
      });

      return results;
    }(); // Utility Variables


    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype,
        nativeForEach = ArrayProto.forEach,
        nativeIndexOf = ArrayProto.indexOf; // Find Utility

    var find = function find(ua, obj) {
      var ret = {};

      for (var i = 0; i < obj.length; i++) {
        ret = obj[i](ua);

        if (ret) {
          break;
        }
      }

      return ret;
    }; // Remove Utility


    var remove = function remove(arr, props) {
      each(arr, function (obj) {
        each(props, function (prop) {
          delete obj[prop];
        });
      });
    }; // Contains Utility


    var contains = function contains(obj, target) {
      var found = false;
      if (obj == null) return found;
      if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
      found = any(obj, function (value) {
        return value === target;
      });
      return found;
    }; // Each Utility


    var each = forEach = function forEach(obj, iterator, context) {
      if (obj == null) return;

      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          iterator.call(context, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (_.has(obj, key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      }
    }; // Extend Utiltiy


    var extend = function extend(obj) {
      each(slice.call(arguments, 1), function (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      });
      return obj;
    }; // Check String Utility


    var check = function check(str) {
      return !!(str && typeof str != "undefined" && str != null);
    }; // To Version String Utility


    var toVersionString = function toVersionString(obj) {
      var output = "";
      obj = obj || {};

      if (check(obj)) {
        if (check(obj.major)) {
          output += obj.major;

          if (check(obj.minor)) {
            output += "." + obj.minor;

            if (check(obj.patch)) {
              output += "." + obj.patch;
            }
          }
        }
      }

      return output;
    }; // To String Utility


    var toString = function toString(obj) {
      obj = obj || {};
      var suffix = toVersionString(obj);
      if (suffix) suffix = " " + suffix;
      return obj && check(obj.family) ? obj.family + suffix : "";
    }; // Parse User-Agent String


    _this.parse = function (ua) {
      // Parsers Utility
      var parsers = function parsers(type) {
        return _this.regexes[type + "_parsers"].map(function (obj) {
          var regexp = new RegExp(obj.regex),
              rep = obj[(type === "browser" ? "family" : type) + "_replacement"],
              major_rep = obj.major_version_replacement;

          function parser(ua) {
            var m = ua.match(regexp);
            if (!m) return null;
            var ret = {};
            ret.family = (rep ? rep.replace("$1", m[1]) : m[1]) || "other";
            ret.major = parseInt(major_rep ? major_rep : m[2]) || null;
            ret.minor = m[3] ? parseInt(m[3]) : null;
            ret.patch = m[4] ? parseInt(m[4]) : null;
            ret.tablet = obj.tablet;
            ret.man = obj.manufacturer || null;
            return ret;
          }

          return parser;
        });
      }; // User Agent


      var UserAgent = function UserAgent() {}; // Browsers Parsed


      var browser_parsers = parsers("browser"); // Operating Systems Parsed

      var os_parsers = parsers("os"); // Devices Parsed

      var device_parsers = parsers("device"); // Set Agent

      var a = new UserAgent(); // Remember the original user agent string

      a.source = ua; // Set Browser

      a.browser = find(ua, browser_parsers);

      if (check(a.browser)) {
        a.browser.name = toString(a.browser);
        a.browser.version = toVersionString(a.browser);
      } else {
        a.browser = {};
      } // Set OS


      a.os = find(ua, os_parsers);

      if (check(a.os)) {
        a.os.name = toString(a.os);
        a.os.version = toVersionString(a.os);
      } else {
        a.os = {};
      } // Set Device


      a.device = find(ua, device_parsers);

      if (check(a.device)) {
        a.device.name = toString(a.device);
        a.device.version = toVersionString(a.device);
      } else {
        a.device = {
          tablet: false,
          family: "Other"
        };
      } // Determine Device Type


      var mobile_agents = {};

      var mobile_browser_families = _this.regexes.mobile_browser_families.map(function (str) {
        mobile_agents[str] = true;
      });

      var mobile_os_families = _this.regexes.mobile_os_families.map(function (str) {
        mobile_agents[str] = true;
      }); // Is Spider


      if (a.browser.family === "Spider") {
        a.device.type = "Spider";
      } else if (a.browser.tablet || a.os.tablet || a.device.tablet) {
        a.device.type = "Tablet";
      } else if (mobile_agents.hasOwnProperty(a.browser.family)) {
        a.device.type = "Mobile";
      } else {
        a.device.type = "Desktop";
      } // Determine Device Manufacturer


      a.device.manufacturer = a.browser.man || a.os.man || a.device.man || null; // Cleanup Objects

      remove([a.browser, a.os, a.device], ["tablet", "man"]); // Return Agent

      return a;
    }; // Return context


    return _this;
  }(); // Export the Underscore object for **Node.js** and **"CommonJS"**,
  // backwards-compatibility for the old `require()` API. If we're not
  // CommonJS, add `_` to the global object via a string identifier
  // the Closure Compiler "advanced" mode. Registration as an AMD
  // via define() happens at the end of this file


  if (true) {
    if ( true && module.exports) {
      exports = module.exports = detect;
    }

    exports.detect = detect;
  } else {} // AMD define happens at the end for compatibility with AMD
  // that don't enforce next-turn semantics on modules


  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
      return detect;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})(window);

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burger = document.querySelector('.burger');
var dropdown = document.querySelector('.dropdown-menu');
var close = dropdown.querySelector('.dropdown-menu__close');
var dropdownOverlay = document.createElement('div');

if (detect.parse(navigator.userAgent).browser.family === 'Mobile Safari') {
  dropdown.classList.add('dropdown-menu--safari_bug-fix');
}

burger.addEventListener('click', function () {
  dropdownOverlay.classList.add('overlay');
  document.body.appendChild(dropdownOverlay);
  dropdown.classList.add('dropdown-menu--open');
  document.body.classList.add('fixed');
});
close.addEventListener('click', function () {
  dropdown.classList.remove('dropdown-menu--open');
  document.body.removeChild(dropdownOverlay);
  document.body.removeAttribute('class');
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    dropdown.classList.remove('dropdown-menu--open');
    document.body.removeAttribute('class');
  }
});
dropdownOverlay.addEventListener('click', function () {
  dropdown.classList.remove('dropdown-menu--open');
  document.body.removeChild(this);
  document.body.removeAttribute('class');
});

/***/ }),

/***/ "./src/js/expand.js":
/*!**************************!*\
  !*** ./src/js/expand.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function clickToExpand(block, btn, indexBtn) {
  indexBtn = !indexBtn ? 0 : +indexBtn;
  var btnElem = document.querySelectorAll('.' + btn)[indexBtn];
  var blockElem = document.querySelector('.' + block);

  btnElem.onclick = function () {
    var expand = false;
    var startValueBtn = btnElem.textContent;
    return function (e) {
      e.preventDefault();
      expand = !expand;
      blockElem.classList.toggle(block + '--expand');
      btnElem.classList.toggle(btn + '--reverse');

      if (expand) {
        btnElem.textContent = 'Свернуть';
      } else {
        btnElem.textContent = startValueBtn;
      }
    };
  }();
}

clickToExpand('about-us__text', 'arrows-link', 0);
clickToExpand('brands__list', 'arrows-link', 1);
clickToExpand('tech-list', 'arrows-link', 2);

/***/ }),

/***/ "./src/js/feedback.js":
/*!****************************!*\
  !*** ./src/js/feedback.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var feedbackModal = document.querySelector('.feedback-modal');
var buttonShowfeedbackModal = document.querySelectorAll('.primary-btn--type_mail');
var buttonClosefeedbackModal = feedbackModal.querySelector('.feedback-modal__close');
var feedbackOverlay = document.createElement('div');
feedbackOverlay.classList.add('overlay');
feedbackOverlay.style.zIndex = '199';

for (var i = 0; i < buttonShowfeedbackModal.length; i++) {
  buttonShowfeedbackModal[i].addEventListener('click', function (e) {
    e.preventDefault();
    document.body.appendChild(feedbackOverlay);
    feedbackModal.classList.add('feedback-modal--open');

    if (detect.parse(navigator.userAgent).browser.family !== 'IE') {
      feedbackModal.querySelector('.feedback-form__name').focus();
    }

    document.body.style = 'overflow: hidden';
  });
}

buttonClosefeedbackModal.addEventListener('click', function (e) {
  feedbackModal.classList.remove('feedback-modal--open');
  document.body.removeChild(feedbackOverlay);
  document.body.removeAttribute('style');
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    feedbackModal.classList.remove('feedback-modal--open');
    document.body.removeChild(feedbackOverlay);
    document.body.removeAttribute('style');
  }
});
feedbackOverlay.addEventListener('click', function () {
  feedbackModal.classList.remove('feedback-modal--open');
  document.body.removeAttribute('style');
  document.body.removeChild(this);
});

function checkForm(formName, requiredFieldsName) {
  var form = document.querySelector('.' + formName);
  var requiredFields = [];

  for (var _i = 0; _i < requiredFieldsName.length; _i++) {
    requiredFields[_i] = form.querySelector(requiredFieldsName[_i]);
  }

  form.onsubmit = function (e) {
    var canSubmit = true;

    for (var _i2 = 0; _i2 < requiredFields.length; _i2++) {
      if (requiredFields[_i2].value === '') {
        canSubmit = false;
        requiredFields[_i2].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
      }
    }

    if (!canSubmit) {
      e.preventDefault();
    }
  };
}

checkForm('feedback-form', ['.feedback-form__name', '.feedback-form__email']);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/fonts.scss */ "./src/scss/fonts.scss");
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_fonts_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_social_btns_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/social-btns.scss */ "./src/scss/social-btns.scss");
/* harmony import */ var _scss_social_btns_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_social_btns_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_page_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/page-header.scss */ "./src/scss/page-header.scss");
/* harmony import */ var _scss_page_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_page_header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_burger_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/burger.scss */ "./src/scss/burger.scss");
/* harmony import */ var _scss_burger_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_burger_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_user_menu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/user-menu.scss */ "./src/scss/user-menu.scss");
/* harmony import */ var _scss_user_menu_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_user_menu_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_page_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/page-main.scss */ "./src/scss/page-main.scss");
/* harmony import */ var _scss_page_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_page_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scss_navigation_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/navigation.scss */ "./src/scss/navigation.scss");
/* harmony import */ var _scss_navigation_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_navigation_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_about_us_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/about-us.scss */ "./src/scss/about-us.scss");
/* harmony import */ var _scss_about_us_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_about_us_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_brands_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/brands.scss */ "./src/scss/brands.scss");
/* harmony import */ var _scss_brands_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_brands_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scss_tech_repair_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scss/tech-repair.scss */ "./src/scss/tech-repair.scss");
/* harmony import */ var _scss_tech_repair_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_tech_repair_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scss_prices_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/prices.scss */ "./src/scss/prices.scss");
/* harmony import */ var _scss_prices_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_prices_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scss_price_policy_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/price-policy.scss */ "./src/scss/price-policy.scss");
/* harmony import */ var _scss_price_policy_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_price_policy_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_page_footer_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/page-footer.scss */ "./src/scss/page-footer.scss");
/* harmony import */ var _scss_page_footer_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_page_footer_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_privacy_policy_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../scss/privacy-policy.scss */ "./src/scss/privacy-policy.scss");
/* harmony import */ var _scss_privacy_policy_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_privacy_policy_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scss_dropdown_menu_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scss/dropdown-menu.scss */ "./src/scss/dropdown-menu.scss");
/* harmony import */ var _scss_dropdown_menu_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_dropdown_menu_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scss_dropdown_navigation_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../scss/dropdown-navigation.scss */ "./src/scss/dropdown-navigation.scss");
/* harmony import */ var _scss_dropdown_navigation_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_dropdown_navigation_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scss_dropdown_contacts_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../scss/dropdown-contacts.scss */ "./src/scss/dropdown-contacts.scss");
/* harmony import */ var _scss_dropdown_contacts_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scss_dropdown_contacts_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scss_languages_list_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../scss/languages-list.scss */ "./src/scss/languages-list.scss");
/* harmony import */ var _scss_languages_list_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scss_languages_list_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _scss_public_rules_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../scss/public-rules.scss */ "./src/scss/public-rules.scss");
/* harmony import */ var _scss_public_rules_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_scss_public_rules_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _scss_copyright_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../scss/copyright.scss */ "./src/scss/copyright.scss");
/* harmony import */ var _scss_copyright_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_scss_copyright_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _scss_callback_modal_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../scss/callback-modal.scss */ "./src/scss/callback-modal.scss");
/* harmony import */ var _scss_callback_modal_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_scss_callback_modal_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _scss_feedback_modal_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../scss/feedback-modal.scss */ "./src/scss/feedback-modal.scss");
/* harmony import */ var _scss_feedback_modal_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_scss_feedback_modal_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _js_detect_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../js/detect.js */ "./src/js/detect.js");
/* harmony import */ var _js_detect_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_js_detect_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../js/dropdown.js */ "./src/js/dropdown.js");
/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_js_dropdown_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _js_callback_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../js/callback.js */ "./src/js/callback.js");
/* harmony import */ var _js_callback_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_js_callback_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _js_feedback_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../js/feedback.js */ "./src/js/feedback.js");
/* harmony import */ var _js_feedback_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_js_feedback_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _js_expand_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../js/expand.js */ "./src/js/expand.js");
/* harmony import */ var _js_expand_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_js_expand_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _js_swiper_init_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../js/swiper-init.js */ "./src/js/swiper-init.js");
/* harmony import */ var _js_swiper_init_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_init_js__WEBPACK_IMPORTED_MODULE_28__);






























/***/ }),

/***/ "./src/js/swiper-init.js":
/*!*******************************!*\
  !*** ./src/js/swiper-init.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.innerWidth < 769) {
  var navSlider = new Swiper('.nav-slider', {
    slidesPerView: 'auto',
    wrapperClass: 'navigation',
    slideClass: 'navigation__item'
  });

  if (window.innerWidth < 426) {
    var techSlider = new Swiper('.tech-repair', {
      slidesPerView: 'auto',
      wrapperClass: 'tech-list',
      slideClass: 'tech-list__item',
      pagination: {
        el: '.tech-repair-pagination',
        clickable: true
      }
    });
    var brandsSlider = new Swiper('.brands', {
      slidesPerView: 'auto',
      wrapperClass: 'brands__list',
      slideClass: 'brands__item',
      pagination: {
        el: '.brands-pagination',
        clickable: true
      }
    });
    var pricesSlider = new Swiper('.prices__table', {
      slidesPerView: 'auto',
      wrapperClass: 'prices__t-body',
      slideClass: 'prices__t-row',
      pagination: {
        el: '.prices-pagination',
        clickable: true
      }
    });
  }
}

/***/ }),

/***/ "./src/scss/about-us.scss":
/*!********************************!*\
  !*** ./src/scss/about-us.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/brands.scss":
/*!******************************!*\
  !*** ./src/scss/brands.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/burger.scss":
/*!******************************!*\
  !*** ./src/scss/burger.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/callback-modal.scss":
/*!**************************************!*\
  !*** ./src/scss/callback-modal.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/copyright.scss":
/*!*********************************!*\
  !*** ./src/scss/copyright.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/dropdown-contacts.scss":
/*!*****************************************!*\
  !*** ./src/scss/dropdown-contacts.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/dropdown-menu.scss":
/*!*************************************!*\
  !*** ./src/scss/dropdown-menu.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/dropdown-navigation.scss":
/*!*******************************************!*\
  !*** ./src/scss/dropdown-navigation.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/feedback-modal.scss":
/*!**************************************!*\
  !*** ./src/scss/feedback-modal.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/fonts.scss":
/*!*****************************!*\
  !*** ./src/scss/fonts.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/languages-list.scss":
/*!**************************************!*\
  !*** ./src/scss/languages-list.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/navigation.scss":
/*!**********************************!*\
  !*** ./src/scss/navigation.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/page-footer.scss":
/*!***********************************!*\
  !*** ./src/scss/page-footer.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/page-header.scss":
/*!***********************************!*\
  !*** ./src/scss/page-header.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/page-main.scss":
/*!*********************************!*\
  !*** ./src/scss/page-main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/price-policy.scss":
/*!************************************!*\
  !*** ./src/scss/price-policy.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/prices.scss":
/*!******************************!*\
  !*** ./src/scss/prices.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/privacy-policy.scss":
/*!**************************************!*\
  !*** ./src/scss/privacy-policy.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/public-rules.scss":
/*!************************************!*\
  !*** ./src/scss/public-rules.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/social-btns.scss":
/*!***********************************!*\
  !*** ./src/scss/social-btns.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/tech-repair.scss":
/*!***********************************!*\
  !*** ./src/scss/tech-repair.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/user-menu.scss":
/*!*********************************!*\
  !*** ./src/scss/user-menu.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map