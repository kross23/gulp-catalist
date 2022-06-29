/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню
// import { burger } from './functions/burger';
// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/acordeon.js":
/*!***************************************!*\
  !*** ./src/js/components/acordeon.js ***!
  \***************************************/
/***/ ((module) => {

(function (window) {
  'use strict';

  var uniqueId = 0;
  /**
   * Core
   * @param {string|HTMLElement} selectorOrElement = container in which the script will be initialized
   * @param {object} userOptions = options defined by user
   */

  var Accordion = function Accordion(selectorOrElement, userOptions) {
    var _this5 = this;

    var _this = this;

    var eventsAttached = false; // Break the array with the selectors

    if (Array.isArray(selectorOrElement)) {
      if (selectorOrElement.length) {
        return selectorOrElement.map(function (single) {
          return new Accordion(single, userOptions);
        });
      }

      return false;
    }

    var core = {
      /**
       * Init accordion
       */
      init: function init() {
        var _this2 = this;

        var defaults = {
          duration: 600,
          // animation duration in ms {number}
          ariaEnabled: true,
          // add ARIA elements to the HTML structure {boolean}
          collapse: true,
          // allow collapse expanded panel {boolean}
          showMultiple: false,
          // show multiple elements at the same time {boolean}
          openOnInit: [],
          // show accordion elements during initialization {array}
          elementClass: 'ac',
          // element class {string}
          triggerClass: 'ac-trigger',
          // trigger class {string}
          panelClass: 'ac-panel',
          // panel class {string}
          activeClass: 'is-active',
          // active element class {string}
          beforeOpen: function beforeOpen() {},
          // calls before the item is opened {function}
          onOpen: function onOpen() {},
          // calls when the item is opened {function}
          beforeClose: function beforeClose() {},
          // calls before the item is closed {function}
          onClose: function onClose() {} // calls when the item is closed {function}

        }; // Extend default options

        this.options = Object.assign(defaults, userOptions);
        var _this$options = this.options,
            elementClass = _this$options.elementClass,
            openOnInit = _this$options.openOnInit;
        var isString = typeof selectorOrElement === 'string';
        this.container = isString ? document.querySelector(selectorOrElement) : selectorOrElement;
        this.elements = Array.from(this.container.childNodes).filter(function (el) {
          return el.classList && el.classList.contains(elementClass);
        });
        this.firstElement = this.elements[0];
        this.lastElement = this.elements[this.elements.length - 1];
        this.currFocusedIdx = 0;
        this.elements.map(function (element, idx) {
          // When JS is enabled, add the class to the element
          element.classList.add('js-enabled');

          _this2.generateIDs(element);

          _this2.setARIA(element);

          _this2.setTransition(element);

          uniqueId++;
          return openOnInit.includes(idx) ? _this2.showElement(element, false) : _this2.closeElement(element, false);
        });

        _this.attachEvents();
      },

      /**
       * Set transition
       * @param {object} element = accordion item
       * @param {boolean} clear = clear transition duration
       */
      setTransition: function setTransition(element) {
        var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _this$options2 = this.options,
            duration = _this$options2.duration,
            panelClass = _this$options2.panelClass;
        var el = element.querySelector(".".concat(panelClass));
        var transition = isWebkit('transitionDuration');
        el.style[transition] = clear ? null : "".concat(duration, "ms");
      },

      /**
       * Generate unique IDs for each element
       * @param {object} element = accordion item
       */
      generateIDs: function generateIDs(element) {
        var _this$options3 = this.options,
            triggerClass = _this$options3.triggerClass,
            panelClass = _this$options3.panelClass;
        var trigger = element.querySelector(".".concat(triggerClass));
        var panel = element.querySelector(".".concat(panelClass));
        element.setAttribute('id', "ac-".concat(uniqueId));
        trigger.setAttribute('id', "ac-trigger-".concat(uniqueId));
        panel.setAttribute('id', "ac-panel-".concat(uniqueId));
      },

      /**
       * Remove IDs
       * @param {object} element = accordion item
       */
      removeIDs: function removeIDs(element) {
        var _this$options4 = this.options,
            triggerClass = _this$options4.triggerClass,
            panelClass = _this$options4.panelClass;
        var trigger = element.querySelector(".".concat(triggerClass));
        var panel = element.querySelector(".".concat(panelClass));
        element.removeAttribute('id');
        trigger.removeAttribute('id');
        panel.removeAttribute('id');
      },

      /**
       * Create ARIA
       * @param {object} element = accordion item
       */
      setARIA: function setARIA(element) {
        var _this$options5 = this.options,
            ariaEnabled = _this$options5.ariaEnabled,
            triggerClass = _this$options5.triggerClass,
            panelClass = _this$options5.panelClass;
        if (!ariaEnabled) return;
        var trigger = element.querySelector(".".concat(triggerClass));
        var panel = element.querySelector(".".concat(panelClass));
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('aria-controls', "ac-panel-".concat(uniqueId));
        trigger.setAttribute('aria-disabled', false);
        trigger.setAttribute('aria-expanded', false);
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-labelledby', "ac-trigger-".concat(uniqueId));
      },

      /**
       * Update ARIA
       * @param {object} element = accordion item
       * @param {boolean} ariaExpanded = value of the attribute
       */
      updateARIA: function updateARIA(element, _ref) {
        var ariaExpanded = _ref.ariaExpanded,
            ariaDisabled = _ref.ariaDisabled;
        var _this$options6 = this.options,
            ariaEnabled = _this$options6.ariaEnabled,
            triggerClass = _this$options6.triggerClass;
        if (!ariaEnabled) return;
        var trigger = element.querySelector(".".concat(triggerClass));
        trigger.setAttribute('aria-expanded', ariaExpanded);
        trigger.setAttribute('aria-disabled', ariaDisabled);
      },

      /**
       * Remove ARIA
       * @param {object} element = accordion item
       */
      removeARIA: function removeARIA(element) {
        var _this$options7 = this.options,
            ariaEnabled = _this$options7.ariaEnabled,
            triggerClass = _this$options7.triggerClass,
            panelClass = _this$options7.panelClass;
        if (!ariaEnabled) return;
        var trigger = element.querySelector(".".concat(triggerClass));
        var panel = element.querySelector(".".concat(panelClass));
        trigger.removeAttribute('role');
        trigger.removeAttribute('aria-controls');
        trigger.removeAttribute('aria-disabled');
        trigger.removeAttribute('aria-expanded');
        panel.removeAttribute('role');
        panel.removeAttribute('aria-labelledby');
      },

      /**
       * Focus element
       * @param {object} e = event
       * @param {object} element = accordion item
       */
      focus: function focus(e, element) {
        e.preventDefault();
        var triggerClass = this.options.triggerClass;
        var trigger = element.querySelector(".".concat(triggerClass));
        trigger.focus();
      },

      /**
       * Focus first element
       * @param {object} e = event
       */
      focusFirstElement: function focusFirstElement(e) {
        this.focus(e, this.firstElement);
        this.currFocusedIdx = 0;
      },

      /**
       * Focus last element
       * @param {object} e = event
       */
      focusLastElement: function focusLastElement(e) {
        this.focus(e, this.lastElement);
        this.currFocusedIdx = this.elements.length - 1;
      },

      /**
       * Focus next element
       * @param {object} e = event
       */
      focusNextElement: function focusNextElement(e) {
        var nextElIdx = this.currFocusedIdx + 1;
        if (nextElIdx > this.elements.length - 1) return this.focusFirstElement(e);
        this.focus(e, this.elements[nextElIdx]);
        this.currFocusedIdx = nextElIdx;
      },

      /**
       * Focus previous element
       * @param {object} e = event
       */
      focusPrevElement: function focusPrevElement(e) {
        var prevElIdx = this.currFocusedIdx - 1;
        if (prevElIdx < 0) return this.focusLastElement(e);
        this.focus(e, this.elements[prevElIdx]);
        this.currFocusedIdx = prevElIdx;
      },

      /**
       * Show element
       * @param {object} element = accordion item
       * @param {boolean} calcHeight = calculate the height of the panel
       */
      showElement: function showElement(element) {
        var calcHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var _this$options8 = this.options,
            panelClass = _this$options8.panelClass,
            activeClass = _this$options8.activeClass,
            collapse = _this$options8.collapse,
            beforeOpen = _this$options8.beforeOpen;
        var panel = element.querySelector(".".concat(panelClass));
        var height = panel.scrollHeight;
        element.classList.add(activeClass);
        if (calcHeight) beforeOpen(element);
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            panel.style.height = calcHeight ? "".concat(height, "px") : 'auto';
          });
        });
        this.updateARIA(element, {
          ariaExpanded: true,
          ariaDisabled: collapse ? false : true
        });
      },

      /**
       * Close element
       * @param {object} element = accordion item
       * @param {boolean} calcHeight = calculate the height of the panel
       */
      closeElement: function closeElement(element) {
        var calcHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var _this$options9 = this.options,
            panelClass = _this$options9.panelClass,
            activeClass = _this$options9.activeClass,
            beforeClose = _this$options9.beforeClose;
        var panel = element.querySelector(".".concat(panelClass));
        var height = panel.scrollHeight;
        element.classList.remove(activeClass);

        if (calcHeight) {
          beforeClose(element); // Animation [X]px => 0

          requestAnimationFrame(function () {
            panel.style.height = "".concat(height, "px");
            requestAnimationFrame(function () {
              panel.style.height = 0;
            });
          });
          this.updateARIA(element, {
            ariaExpanded: false,
            ariaDisabled: false
          });
        } else {
          // Hide element without animation 'auto' => 0
          panel.style.height = 0;
        }
      },

      /**
       * Toggle element
       * @param {object} element = accordion item
       */
      toggleElement: function toggleElement(element) {
        var _this$options10 = this.options,
            activeClass = _this$options10.activeClass,
            collapse = _this$options10.collapse;
        var isActive = element.classList.contains(activeClass);
        if (isActive && !collapse) return;
        return isActive ? this.closeElement(element) : this.showElement(element);
      },

      /**
       * Close all elements without the current element
       */
      closeElements: function closeElements() {
        var _this3 = this;

        var _this$options11 = this.options,
            activeClass = _this$options11.activeClass,
            showMultiple = _this$options11.showMultiple;
        if (showMultiple) return;
        this.elements.map(function (element, idx) {
          var isActive = element.classList.contains(activeClass);

          if (isActive && idx != _this3.currFocusedIdx) {
            _this3.closeElement(element);
          }
        });
      },

      /**
       * Handle click
       * @param {object} e = event
       */
      handleClick: function handleClick(e) {
        var _this4 = this;

        var target = e.currentTarget;
        this.elements.map(function (element, idx) {
          if (element.contains(target) && e.target.nodeName !== 'A') {
            _this4.currFocusedIdx = idx;

            _this4.closeElements();

            _this4.focus(e, element);

            _this4.toggleElement(element);
          }
        });
      },

      /**
       * Handle keydown
       * @param {object} e = event
       */
      handleKeydown: function handleKeydown(e) {
        var KEYS = {
          ARROW_UP: 38,
          ARROW_DOWN: 40,
          HOME: 36,
          END: 35
        };

        switch (e.keyCode) {
          case KEYS.ARROW_UP:
            return this.focusPrevElement(e);

          case KEYS.ARROW_DOWN:
            return this.focusNextElement(e);

          case KEYS.HOME:
            return this.focusFirstElement(e);

          case KEYS.END:
            return this.focusLastElement(e);

          default:
            return null;
        }
      },

      /**
       * Handle transitionend
       * @param {object} e = event
       */
      handleTransitionEnd: function handleTransitionEnd(e) {
        if (e.propertyName !== 'height') return;
        var _this$options12 = this.options,
            onOpen = _this$options12.onOpen,
            onClose = _this$options12.onClose;
        var panel = e.currentTarget;
        var height = parseInt(panel.style.height);
        var element = this.elements.find(function (element) {
          return element.contains(panel);
        });

        if (height > 0) {
          panel.style.height = 'auto';
          onOpen(element);
        } else {
          onClose(element);
        }
      }
    };
    /**
     * Attach events
     */

    this.attachEvents = function () {
      if (eventsAttached) return;
      var _core$options = core.options,
          triggerClass = _core$options.triggerClass,
          panelClass = _core$options.panelClass;
      core.handleClick = core.handleClick.bind(core);
      core.handleKeydown = core.handleKeydown.bind(core);
      core.handleTransitionEnd = core.handleTransitionEnd.bind(core);
      core.elements.map(function (element) {
        var trigger = element.querySelector(".".concat(triggerClass));
        var panel = element.querySelector(".".concat(panelClass));
        trigger.addEventListener('click', core.handleClick);
        trigger.addEventListener('keydown', core.handleKeydown);
        panel.addEventListener('webkitTransitionEnd', core.handleTransitionEnd);
        panel.addEventListener('transitionend', core.handleTransitionEnd);
      });
      eventsAttached = true;
    };
    /**
     * Detach events
     */


    this.detachEvents = function () {
      if (!eventsAttached) return;
      var _core$options2 = core.options,
          triggerClass = _core$options2.triggerClass,
          panelClass = _core$options2.panelClass;
      core.elements.map(function (element) {
        var trigger = element.querySelector(".".concat(triggerClass));
        var panel = element.querySelector(".".concat(panelClass));
        trigger.removeEventListener('click', core.handleClick);
        trigger.removeEventListener('keydown', core.handleKeydown);
        panel.removeEventListener('webkitTransitionEnd', core.handleTransitionEnd);
        panel.removeEventListener('transitionend', core.handleTransitionEnd);
      });
      eventsAttached = false;
    };
    /**
     * Toggle accordion element
     * @param {number} elIdx = element index
     */


    this.toggle = function (elIdx) {
      var el = core.elements.find(function (_, idx) {
        return idx === elIdx;
      });
      if (el) core.toggleElement(el);
    };
    /**
     * Open accordion element
     * @param {number} elIdx = element index
     */


    this.open = function (elIdx) {
      var el = core.elements.find(function (_, idx) {
        return idx === elIdx;
      });
      if (el) core.showElement(el);
    };
    /**
     * Open all accordion elements
     */


    this.openAll = function () {
      core.elements.map(function (element) {
        return core.showElement(element, false);
      });
    };
    /**
     * Close accordion element
     * @param {number} elIdx = element index
     */


    this.close = function (elIdx) {
      var el = core.elements.find(function (_, idx) {
        return idx === elIdx;
      });
      if (el) core.closeElement(el);
    };
    /**
     * Close all accordion elements
     */


    this.closeAll = function () {
      core.elements.map(function (element) {
        return core.closeElement(element, false);
      });
    };
    /**
     * Destroy accordion instance
     */


    this.destroy = function () {
      _this5.detachEvents();

      _this5.openAll();

      core.elements.map(function (element) {
        core.removeIDs(element);
        core.removeARIA(element);
        core.setTransition(element, true);
      });
      eventsAttached = true;
    };
    /**
     * Get supported property and add webkit prefix if needed
     * @param {string} property = property name
     * @return {string} property = property with optional webkit prefix
     */


    var isWebkit = function isWebkit(property) {
      if (typeof document.documentElement.style[property] === 'string') {
        return property;
      }

      property = capitalizeFirstLetter(property);
      property = "webkit".concat(property);
      return property;
    };
    /**
     * Capitalize the first letter in the string
     * @param {string} string = string
     * @return {string} string = changed string
     */


    var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    core.init();
  };

  if ( true && typeof module.exports !== 'undefined') {
    module.exports = Accordion;
  } else {
    window.Accordion = Accordion;
  }
})(window);

/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _acordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acordeon */ "./src/js/components/acordeon.js");
/* harmony import */ var _acordeon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_acordeon__WEBPACK_IMPORTED_MODULE_0__);

new (_acordeon__WEBPACK_IMPORTED_MODULE_0___default())('.accordion-container');
$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() < 600) {
      // $('.header').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
      $('.header h1').css('top', 50 + $(window).scrollTop() * .1 + '%');
      $('.header h1').css('opacity', 1 - $(window).scrollTop() * .003);
    }

    var navBg = document.querySelector('.nav-bg'); //  window.addEventListener('scroll', function(e) {
    //  let scroll = e;
    //  console.log("scroll: ", scroll);
    // });
    //   if($(window).scrollTop() >= $('.header').offset().top - 50) {
    //     navBg.classList.remove('bg-hidden');
    //     navBg.classList.add('bg-visible');
    //     // $('.nav-bg').removeClass('bg-hidden');
    //     // $('.nav-bg').addClass('bg-visible');
    //   } else {
    //     navBg.classList.remove('bg-visible');
    //     navBg.classList.add('bg-hidden');
    //     // $('.nav-bg').removeClass('bg-visible');
    //     // $('.nav-bg').addClass('bg-hidden');
    //   }
  });
});

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var mobileCheck = function mobileCheck() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components_acordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/acordeon */ "./src/js/components/acordeon.js");
/* harmony import */ var _components_acordeon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_acordeon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ex */ "./src/js/components/ex.js");





})();

/******/ })()
;
//# sourceMappingURL=main.js.map