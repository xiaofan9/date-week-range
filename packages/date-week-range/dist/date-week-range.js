module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/utils/date-util");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/utils/vue-popper");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/utils/clickoutside");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/mixins/locale");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/utils/util");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/mixins/emitter");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("element-ui/packages/input");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("element-ui/src/utils/merge");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("element-ui/packages/theme-chalk/src/date-picker.scss");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-week-range/src/picker.vue?vue&type=template&id=05e2c86e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.ranged
    ? _c(
        "el-input",
        _vm._b(
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleClose,
                expression: "handleClose"
              }
            ],
            ref: "reference",
            staticClass: "el-date-editor",
            class: "el-date-editor--" + (_vm.type || ""),
            attrs: {
              readonly: !_vm.editable || _vm.readonly,
              disabled: _vm.pickerDisabled,
              size: _vm.pickerSize,
              name: _vm.name,
              placeholder: _vm.placeholder,
              value: _vm.displayValue,
              validateEvent: false
            },
            on: {
              focus: _vm.handleFocus,
              input: function(value) {
                return (_vm.userInput = value)
              },
              change: _vm.handleChange
            },
            nativeOn: {
              keydown: function($event) {
                return _vm.handleKeydown($event)
              },
              mouseenter: function($event) {
                return _vm.handleMouseEnter($event)
              },
              mouseleave: function($event) {
                _vm.showClose = false
              }
            }
          },
          "el-input",
          _vm.firstInputId,
          false
        ),
        [
          _c("i", {
            staticClass: "el-input__icon",
            class: _vm.triggerClass,
            attrs: { slot: "prefix" },
            on: { click: _vm.handleFocus },
            slot: "prefix"
          }),
          _vm.haveTrigger
            ? _c("i", {
                staticClass: "el-input__icon",
                class: [_vm.showClose ? "" + _vm.clearIcon : ""],
                attrs: { slot: "suffix" },
                on: { click: _vm.handleClickIcon },
                slot: "suffix"
              })
            : _vm._e()
        ]
      )
    : _c(
        "div",
        {
          directives: [
            {
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.handleClose,
              expression: "handleClose"
            }
          ],
          ref: "reference",
          staticClass: "el-date-editor el-range-editor el-input__inner",
          class: [
            "el-date-editor--" + _vm.type,
            _vm.pickerSize ? "el-range-editor--" + _vm.pickerSize : "",
            _vm.pickerDisabled ? "is-disabled" : "",
            _vm.pickerVisible ? "is-active" : ""
          ],
          on: {
            click: _vm.handleRangeClick,
            mouseenter: _vm.handleMouseEnter,
            mouseleave: function($event) {
              _vm.showClose = false
            },
            keydown: _vm.handleKeydown
          }
        },
        [
          _c("i", {
            class: ["el-input__icon", "el-range__icon", _vm.triggerClass]
          }),
          _c(
            "input",
            _vm._b(
              {
                staticClass: "el-range-input",
                attrs: {
                  autocomplete: "off",
                  placeholder: _vm.startPlaceholder,
                  disabled: _vm.pickerDisabled,
                  readonly: !_vm.editable || _vm.readonly,
                  name: _vm.name && _vm.name[0]
                },
                domProps: { value: _vm.displayValue && _vm.displayValue[0] },
                on: {
                  input: _vm.handleStartInput,
                  change: _vm.handleStartChange,
                  focus: _vm.handleFocus
                }
              },
              "input",
              _vm.firstInputId,
              false
            )
          ),
          _vm._t("range-separator", [
            _c("span", { staticClass: "el-range-separator" }, [
              _vm._v(_vm._s(_vm.rangeSeparator))
            ])
          ]),
          _c(
            "input",
            _vm._b(
              {
                staticClass: "el-range-input",
                attrs: {
                  autocomplete: "off",
                  placeholder: _vm.endPlaceholder,
                  disabled: _vm.pickerDisabled,
                  readonly: !_vm.editable || _vm.readonly,
                  name: _vm.name && _vm.name[1]
                },
                domProps: { value: _vm.displayValue && _vm.displayValue[1] },
                on: {
                  input: _vm.handleEndInput,
                  change: _vm.handleEndChange,
                  focus: _vm.handleFocus
                }
              },
              "input",
              _vm.secondInputId,
              false
            )
          ),
          _vm.haveTrigger
            ? _c("i", {
                staticClass: "el-input__icon el-range__close-icon",
                class: [_vm.showClose ? "" + _vm.clearIcon : ""],
                on: { click: _vm.handleClickIcon }
              })
            : _vm._e()
        ],
        2
      )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/date-week-range/src/picker.vue?vue&type=template&id=05e2c86e&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(5);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "element-ui/src/utils/clickoutside"
var clickoutside_ = __webpack_require__(2);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// EXTERNAL MODULE: external "element-ui/src/utils/date-util"
var date_util_ = __webpack_require__(0);

// EXTERNAL MODULE: external "element-ui/src/utils/vue-popper"
var vue_popper_ = __webpack_require__(1);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// EXTERNAL MODULE: external "element-ui/src/mixins/emitter"
var emitter_ = __webpack_require__(6);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/packages/input"
var input_ = __webpack_require__(7);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "element-ui/src/utils/merge"
var merge_ = __webpack_require__(8);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/date-week-range/src/picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









const NewPopper = {
  props: {
    appendToBody: vue_popper_default.a.props.appendToBody,
    offset: vue_popper_default.a.props.offset,
    boundariesPadding: vue_popper_default.a.props.boundariesPadding,
    arrowOffset: vue_popper_default.a.props.arrowOffset
  },
  methods: vue_popper_default.a.methods,
  data() {
    return merge_default()({ visibleArrow: true, type: 'weekrange' }, vue_popper_default.a.data);
  },
  beforeDestroy: vue_popper_default.a.beforeDestroy
};

const DEFAULT_FORMATS = {
  weekrange: 'yyyy-WW',
};
const HAVE_TRIGGER_TYPES = [
  'weekrange',
];

const TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser(text) {
      if (text === undefined || text === '') return null;
      return text;
    }
  },
  weekrange: {
    formatter(value, format) {
      function getDate(value, isChange) {
        if(isChange) {
          value = new Date(+new Date(value) + 1000 * 60 * 60 * 24);
        }

        const week = Object(date_util_["getWeekNumber"])(value);
        const month = value.getMonth();
        const trueDate = new Date(value);
        if (week === 1 && month === 11) {
          trueDate.setHours(0, 0, 0, 0);
          trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
        }
        let date = Object(date_util_["formatDate"])(trueDate, format);

        date = /WW/.test(date)
          ? date.replace(/WW/, week < 10 ? '0' + week : week)
          : date.replace(/W/, week);
        return date;
      }

      if(!Array.isArray(value)){
        return getDate(value);
      }

      let isFirst = true;

      const dateList = []
      for(const val of value) {
        dateList.push(getDate(val, isFirst));

        if(isFirst) {
          isFirst = false;
        }
      }
      
      return dateList;
    },
    parser(text, format) {
      // parse as if a normal date
      return TYPE_VALUE_RESOLVER_MAP.date.parser(text, format);
    }
  },
};
const PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
};

const parseAsFormatAndType = (value, customFormat, type, rangeSeparator = '-') => {
  if (!value) return null;
  const parser = (
    TYPE_VALUE_RESOLVER_MAP[type] ||
    TYPE_VALUE_RESOLVER_MAP['default']
  ).parser;
  const format = customFormat || DEFAULT_FORMATS[type];
  return parser(value, format, rangeSeparator);
};

const formatAsFormatAndType = (value, customFormat, type = 'weekrange') => {
  if (!value) return null;
  const formatter = (
    TYPE_VALUE_RESOLVER_MAP[type] ||
    TYPE_VALUE_RESOLVER_MAP['default']
  ).formatter;
  const format = customFormat || DEFAULT_FORMATS[type];
  return formatter(value, format);
};

/*
 * Considers:
 *   1. Date object
 *   2. date string
 *   3. array of 1 or 2
 */
const valueEquals = function(a, b) {
  // considers Date object and string
  const dateEquals = function(a, b) {
    const aIsDate = a instanceof Date;
    const bIsDate = b instanceof Date;
    if (aIsDate && bIsDate) {
      return a.getTime() === b.getTime();
    }
    if (!aIsDate && !bIsDate) {
      return a === b;
    }
    return false;
  };

  const aIsArray = a instanceof Array;
  const bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => dateEquals(item, b[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};

const isString = function(val) {
  return typeof val === 'string' || val instanceof String;
};

const validator = function(val) {
  // either: String, Array of String, null / undefined
  return (
    val === null ||
    val === undefined ||
    isString(val) ||
    (Array.isArray(val) && val.length === 2 && val.every(isString))
  );
};

/* harmony default export */ var pickervue_type_script_lang_js_ = ({
  mixins: [emitter_default.a, NewPopper],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    name: {
      default: '',
      validator
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    defaultTime: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  components: { ElInput: input_default.a },

  directives: { Clickoutside: clickoutside_default.a },

  data() {
    return {
      pickerVisible: false,
      showClose: false,
      userInput: null,
      valueOnOpen: null, // value when picker opens, used to determine whether to emit change
      unwatchPickerOptions: null
    };
  },

  watch: {
    pickerVisible(val) {
      if (this.readonly || this.pickerDisabled) return;
      if (val) {
        this.showPicker();
        this.valueOnOpen = Array.isArray(this.value) ? [...this.value] : this.value;
      } else {
        this.hidePicker();
        this.emitChange(this.value);
        this.userInput = null;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur');
        }
        this.$emit('blur', this);
        this.blur();
      }
    },
    parsedValue: {
      immediate: true,
      handler(val) {
        if (this.picker) {
          this.picker.value = val;
        }
      }
    },
    defaultValue(val) {
      // NOTE: should eventually move to jsx style picker + panel ?
      if (this.picker) {
        this.picker.defaultValue = val;
      }
    },
    value(val, oldVal) {
      if (!valueEquals(val, oldVal) && !this.pickerVisible && this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    }
  },

  computed: {
    ranged() {
      return (this.type || '').indexOf('range') > -1;
    },

    reference() {
      const reference = this.$refs.reference;
      return reference.$el || reference;
    },

    refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },

    valueIsEmpty() {
      const val = this.value;
      if (Array.isArray(val)) {
        for (let i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else {
        if (val) {
          return false;
        }
      }
      return true;
    },

    triggerClass() {
      return this.prefixIcon || 'el-icon-date';
    },

    selectionMode() {
      return 'week';
    },

    haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },

    displayValue() {
      const formattedValue = formatAsFormatAndType(this.parsedValue, this.format, this.type, this.rangeSeparator);
      if (Array.isArray(this.userInput)) {
        return [
          this.userInput[0] || (formattedValue && formattedValue[0]) || '',
          this.userInput[1] || (formattedValue && formattedValue[1]) || ''
        ];
      } else if (this.userInput !== null) {
        return this.userInput;
      } else if (formattedValue) {
        return formattedValue;
      } else {
        return '';
      }
    },

    parsedValue() {
      if (!this.value) return this.value; // component value is not set

      const valueIsDateObject = Object(date_util_["isDateObject"])(this.value) || (Array.isArray(this.value) && this.value.every(date_util_["isDateObject"]));
      if (valueIsDateObject) {
        return this.value;
      }

      if (this.valueFormat) {
        return parseAsFormatAndType(this.value, this.valueFormat, this.type, this.rangeSeparator) || this.value;
      }

      // NOTE: deal with common but incorrect usage, should remove in next major version
      // user might provide string / timestamp without value-format, coerce them into date (or array of date)
      return Array.isArray(this.value) ? this.value.map(val => new Date(val)) : new Date(this.value);
    },

    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    pickerSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },

    pickerDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },

    firstInputId() {
      const obj = {};
      let id;
      if (this.ranged) {
        id = this.id && this.id[0];
      } else {
        id = this.id;
      }
      if (id) obj.id = id;
      return obj;
    },

    secondInputId() {
      const obj = {};
      let id;
      if (this.ranged) {
        id = this.id && this.id[1];
      }
      if (id) obj.id = id;
      return obj;
    }
  },

  created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;

    this.$on('fieldReset', this.handleFieldReset);
  },

  methods: {
    focus() {
      if (!this.ranged) {
        this.$refs.reference.focus();
      } else {
        this.handleFocus();
      }
    },

    blur() {
      this.refInput.forEach(input => input.blur());
    },

    // {parse, formatTo} Value deals maps component value with internal Date
    parseValue(value) {
      const isParsed = Object(date_util_["isDateObject"])(value) || (Array.isArray(value) && value.every(date_util_["isDateObject"]));
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(value, this.valueFormat, this.type, this.rangeSeparator) || value;
      } else {
        return value;
      }
    },

    formatToValue(date) {
      const isFormattable = Object(date_util_["isDateObject"])(date) || (Array.isArray(date) && date.every(date_util_["isDateObject"]));
      if (this.valueFormat && isFormattable) {
        return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
      } else {
        return date;
      }
    },

    // {parse, formatTo} String deals with user input
    parseString(value) {
      const type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return parseAsFormatAndType(value, this.format, type);
    },

    formatToString(value) {
      const type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return formatAsFormatAndType(value, this.format, type);
    },

    handleMouseEnter() {
      if (this.readonly || this.pickerDisabled) return;
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },

    handleChange() {
      if (this.userInput) {
        const value = this.parseString(this.displayValue);
        if (value) {
          this.picker.value = value;
          if (this.isValidValue(value)) {
            this.emitInput(value);
            this.userInput = null;
          }
        }
      }
      if (this.userInput === '') {
        this.emitInput(null);
        this.emitChange(null);
        this.userInput = null;
      }
    },

    handleStartInput(event) {
      if (this.userInput) {
        this.userInput = [event.target.value, this.userInput[1]];
      } else {
        this.userInput = [event.target.value, null];
      }
    },

    handleEndInput(event) {
      if (this.userInput) {
        this.userInput = [this.userInput[0], event.target.value];
      } else {
        this.userInput = [null, event.target.value];
      }
    },

    handleStartChange() {
      const value = this.parseString(this.userInput && this.userInput[0]);
      if (value) {
        this.userInput = [this.formatToString(value), this.displayValue[1]];
        const newValue = [value, this.picker.value && this.picker.value[1]];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },

    handleEndChange() {
      const value = this.parseString(this.userInput && this.userInput[1]);
      if (value) {
        this.userInput = [this.displayValue[0], this.formatToString(value)];
        const newValue = [this.picker.value && this.picker.value[0], value];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },

    handleClickIcon(event) {
      if (this.readonly || this.pickerDisabled) return;
      if (this.showClose) {
        this.valueOnOpen = this.value;
        event.stopPropagation();
        this.emitInput(null);
        this.emitChange(null);
        this.showClose = false;
        if (this.picker && typeof this.picker.handleClear === 'function') {
          this.picker.handleClear();
        }
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },

    handleClose() {
      if (!this.pickerVisible) return;
      this.pickerVisible = false;
    },

    handleFieldReset(initialValue) {
      this.userInput = initialValue === '' ? null : initialValue;
    },

    handleFocus() {
      const type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;

      // ESC
      if (keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      // Tab
      if (keyCode === 9) {
        if (!this.ranged) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
          event.stopPropagation();
        } else {
          // user may change focus between two input
          setTimeout(() => {
            if (this.refInput.indexOf(document.activeElement) === -1) {
              this.pickerVisible = false;
              this.blur();
              event.stopPropagation();
            }
          }, 0);
        }
        return;
      }

      // Enter
      if (keyCode === 13) {
        if (this.userInput === '' || this.isValidValue(this.parseString(this.displayValue))) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
        }
        event.stopPropagation();
        return;
      }

      // if user is typing, do not let picker handle key input
      if (this.userInput) {
        event.stopPropagation();
        return;
      }

      // delegate other keys to panel
      if (this.picker && this.picker.handleKeydown) {
        this.picker.handleKeydown(event);
      }
    },

    handleRangeClick() {
      const type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },

    hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },

    showPicker() {
      if (this.$isServer) return;
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;

      this.updatePopper();

      this.picker.value = this.parsedValue;
      this.picker.resetView && this.picker.resetView();

      this.$nextTick(() => {
        this.picker.adjustSpinners && this.picker.adjustSpinners();
      });
    },

    mountPicker() {
      this.picker = new external_vue_default.a(this.panel).$mount();
      this.picker.defaultValue = this.defaultValue;
      this.picker.defaultTime = this.defaultTime;
      this.picker.popperClass = this.popperClass;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = false;
      this.picker.selectionMode = this.selectionMode;
      this.picker.unlinkPanels = this.unlinkPanels;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
      this.$watch('format', (format) => {
        this.picker.format = format;
      });

      const updateOptions = () => {
        const options = this.pickerOptions;

        if (options && options.selectableRange) {
          let ranges = options.selectableRange;
          const parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          const format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          this.picker.selectableRange = ranges.map(range => parser(range, format, this.rangeSeparator));
        }

        for (const option in options) {
          if (Object.hasOwnProperty.call(options, option) &&
              // 忽略 time-picker 的该配置项
              option !== 'selectableRange') {
            this.picker[option] = options[option];
          }
        }

        // main format must prevail over undocumented pickerOptions.format
        if (this.format) {
          this.picker.format = this.format;
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', () => updateOptions(), { deep: true });
      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', (date = '', visible = false) => {
        this.userInput = null;
        this.pickerVisible = this.picker.visible = visible;

        this.emitInput(date);
        this.picker.resetView && this.picker.resetView();
      });

      this.picker.$on('select-range', (start, end, pos) => {
        if (this.refInput.length === 0) return;
        if (!pos || pos === 'min') {
          this.refInput[0].setSelectionRange(start, end);
          this.refInput[0].focus();
        } else if (pos === 'max') {
          this.refInput[1].setSelectionRange(start, end);
          this.refInput[1].focus();
        }
      });
    },

    unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    },

    emitChange(val) {
      // determine user real change only
      if (!valueEquals(val, this.valueOnOpen)) {
        this.$emit('change', val);
        this.valueOnOpen = val;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', val);
        }
      }
    },

    emitInput(val) {
      const formatted = this.formatToValue(val);
      if (!valueEquals(this.value, formatted)) {
        this.$emit('input', formatted);
      }
    },

    isValidValue(value) {
      if (!this.picker) {
        this.mountPicker();
      }
      if (this.picker.isValidValue) {
        return value && this.picker.isValidValue(value);
      } else {
        return true;
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/date-week-range/src/picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pickervue_type_script_lang_js_ = (pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/date-week-range/src/picker.vue





/* normalize component */

var component = normalizeComponent(
  src_pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/date-week-range/src/picker.vue"
/* harmony default export */ var picker = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-week-range/src/panel/week-range.vue?vue&type=template&id=02b7be0a&
var week_rangevue_type_template_id_02b7be0a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          return _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-picker-panel el-date-range-picker el-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "el-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "el-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "el-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "el-picker-panel__body" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "el-picker-panel__content el-date-range-picker__content is-left"
                  },
                  [
                    _c("div", { staticClass: "el-date-range-picker__header" }, [
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-d-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevYear }
                      }),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevMonth }
                      }),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-d-arrow-right",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableYearArrow
                            },
                            on: { click: _vm.leftNextYear }
                          })
                        : _vm._e(),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-arrow-right",
                            class: { "is-disabled": !_vm.enableMonthArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableMonthArrow
                            },
                            on: { click: _vm.leftNextMonth }
                          })
                        : _vm._e(),
                      _c("div", [_vm._v(_vm._s(_vm.leftLabel))])
                    ]),
                    _c("date-table", {
                      attrs: {
                        "selection-mode": "weekrange",
                        date: _vm.leftDate,
                        "default-value": _vm.defaultValue,
                        "min-date": _vm.minDate,
                        "max-date": _vm.maxDate,
                        "range-state": _vm.rangeState,
                        "disabled-date": _vm.disabledDate,
                        "cell-class-name": _vm.cellClassName,
                        "first-day-of-week": _vm.firstDayOfWeek
                      },
                      on: {
                        changerange: _vm.handleChangeRange,
                        pick: _vm.handleRangePick
                      }
                    })
                  ],
                  1
                ),
                _c(
                  "div",
                  {
                    staticClass:
                      "el-picker-panel__content el-date-range-picker__content is-right"
                  },
                  [
                    _c("div", { staticClass: "el-date-range-picker__header" }, [
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-d-arrow-left",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableYearArrow
                            },
                            on: { click: _vm.rightPrevYear }
                          })
                        : _vm._e(),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-arrow-left",
                            class: { "is-disabled": !_vm.enableMonthArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableMonthArrow
                            },
                            on: { click: _vm.rightPrevMonth }
                          })
                        : _vm._e(),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-d-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextYear }
                      }),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextMonth }
                      }),
                      _c("div", [_vm._v(_vm._s(_vm.rightLabel))])
                    ]),
                    _c("date-table", {
                      attrs: {
                        "selection-mode": "weekrange",
                        date: _vm.rightDate,
                        "default-value": _vm.defaultValue,
                        "min-date": _vm.minDate,
                        "max-date": _vm.maxDate,
                        "range-state": _vm.rangeState,
                        "disabled-date": _vm.disabledDate,
                        "cell-class-name": _vm.cellClassName,
                        "first-day-of-week": _vm.firstDayOfWeek
                      },
                      on: {
                        changerange: _vm.handleChangeRange,
                        pick: _vm.handleRangePick
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          )
        ]
      )
    ]
  )
}
var week_rangevue_type_template_id_02b7be0a_staticRenderFns = []
week_rangevue_type_template_id_02b7be0a_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-week-range/src/panel/week-range.vue?vue&type=template&id=02b7be0a&

// EXTERNAL MODULE: external "element-ui/src/mixins/locale"
var locale_ = __webpack_require__(3);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/date-week-range/src/basic/date-table.vue?vue&type=template&id=9be2482a&
var date_tablevue_type_template_id_9be2482a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      staticClass: "el-date-table",
      class: {
        "is-week-mode":
          _vm.selectionMode === "week" || _vm.selectionMode === "weekrange"
      },
      attrs: { cellspacing: "0", cellpadding: "0" },
      on: { click: _vm.handleClick, mousemove: _vm.handleMouseMove }
    },
    [
      _c(
        "tbody",
        [
          _c(
            "tr",
            [
              _vm.showWeekNumber
                ? _c("th", [_vm._v(_vm._s(_vm.t("el.datepicker.week")))])
                : _vm._e(),
              _vm._l(_vm.WEEKS, function(week, key) {
                return _c("th", { key: key }, [
                  _vm._v(_vm._s(_vm.t("el.datepicker.weeks." + week)))
                ])
              })
            ],
            2
          ),
          _vm._l(_vm.rows, function(row, key) {
            return _c(
              "tr",
              {
                key: key,
                staticClass: "el-date-table__row",
                class: { current: _vm.isWeekActive(row[1]) }
              },
              _vm._l(row, function(cell, key) {
                return _c("td", { key: key, class: _vm.getCellClasses(cell) }, [
                  _c("div", [
                    _c("span", [
                      _vm._v("\n          " + _vm._s(cell.text) + "\n        ")
                    ])
                  ])
                ])
              }),
              0
            )
          })
        ],
        2
      )
    ]
  )
}
var date_tablevue_type_template_id_9be2482a_staticRenderFns = []
date_tablevue_type_template_id_9be2482a_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-week-range/src/basic/date-table.vue?vue&type=template&id=9be2482a&

// EXTERNAL MODULE: external "element-ui/src/utils/util"
var util_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/date-week-range/src/basic/date-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const getDateTimestamp = function(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return Object(date_util_["clearTime"])(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return Object(date_util_["clearTime"])(time).getTime();
  } else {
    return NaN;
  }
};

// remove the first element that satisfies `pred` from arr
// return a new array if modification occurs
// return the original array otherwise
const removeFromArray = function(arr, pred) {
  const idx = typeof pred === 'function' ? Object(util_["arrayFindIndex"])(arr, pred) : arr.indexOf(pred);
  return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr;
};

/* harmony default export */ var date_tablevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  props: {
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: val => val >= 1 && val <= 7
    },

    value: {},

    defaultValue: {
      validator(val) {
        // either: null, valid Date object, Array of valid Date objects
        return val === null || Object(date_util_["isDate"])(val) || (Array.isArray(val) && val.every(date_util_["isDate"]));
      }
    },

    date: {},

    selectionMode: {
      default: 'day'
    },

    showWeekNumber: {
      type: Boolean,
      default: false
    },

    disabledDate: {},

    cellClassName: {},

    minDate: {},

    maxDate: {},

    rangeState: {
      default() {
        return {
          endDate: null,
          selecting: false,
          startDate: 0
        };
      }
    }
  },

  computed: {
    offsetDay() {
      const week = this.firstDayOfWeek;
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week;
    },

    WEEKS() {
      const week = this.firstDayOfWeek;
      return WEEKS.concat(WEEKS).slice(week, week + 7);
    },

    year() {
      return this.date.getFullYear();
    },

    month() {
      return this.date.getMonth();
    },

    startDate() {
      return Object(date_util_["getStartDateOfMonth"])(this.year, this.month);
    },

    rows() {
      // TODO: refactory rows / getCellClasses
      const date = new Date(this.year, this.month, 1);
      let day = Object(date_util_["getFirstDayOfMonth"])(date); // day of first day
      const dateCountOfMonth = Object(date_util_["getDayCountOfMonth"])(date.getFullYear(), date.getMonth());
      const dateCountOfLastMonth = Object(date_util_["getDayCountOfMonth"])(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

      day = (day === 0 ? 7 : day);

      const offset = this.offsetDay;
      const rows = this.tableRows;
      let count = 1;

      const startDate = this.startDate;
      const disabledDate = this.disabledDate;
      const cellClassName = this.cellClassName;
      const selectedDate = this.selectionMode === 'dates' ? Object(util_["coerceTruthyValueToArray"])(this.value) : [];
      const now = getDateTimestamp(new Date());

      for (let i = 0; i < 6; i++) {
        const row = rows[i];

        if (this.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: Object(date_util_["getWeekNumber"])(Object(date_util_["nextDate"])(startDate, i * 7 + 1)) };
          }
        }

        for (let j = 0; j < 7; j++) {
          let cell = row[this.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          const index = i * 7 + j;
          const time = Object(date_util_["nextDate"])(startDate, index - offset).getTime();
          cell.inRange = time >= getDateTimestamp(this.minDate) && time <= getDateTimestamp(this.maxDate);
          cell.start = this.minDate && time === getDateTimestamp(this.minDate);
          cell.end = this.maxDate && time === getDateTimestamp(this.maxDate);
          const isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }

          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset;

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++;
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
              cell.type = 'prev-month';
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = 'next-month';
            }
          }

          const cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          cell.selected = Object(util_["arrayFind"])(selectedDate, date => date.getTime() === cellDate.getTime());
          cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate);
          this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
        }

        if (this.selectionMode === 'week') {
          const start = this.showWeekNumber ? 1 : 0;
          const end = this.showWeekNumber ? 7 : 6;
          const isWeekActive = this.isWeekActive(row[start + 1]);

          row[start].inRange = isWeekActive;
          row[start].start = isWeekActive;
          row[end].inRange = isWeekActive;
          row[end].end = isWeekActive;
        }
      }

      return rows;
    }
  },

  watch: {
    'rangeState.endDate'(newVal) {
      this.markRange(this.minDate, newVal);
    },

    minDate(newVal, oldVal) {
      if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },

    maxDate(newVal, oldVal) {
      if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  data() {
    return {
      tableRows: [ [], [], [], [], [], [] ],
      lastRow: null,
      lastColumn: null
    };
  },

  methods: {
    cellMatchesDate(cell, date) {
      const value = new Date(date);
      return this.year === value.getFullYear() &&
        this.month === value.getMonth() &&
        Number(cell.text) === value.getDate();
    },

    getCellClasses(cell) {
      const selectionMode = this.selectionMode;
      const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

      const classes = [];
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available');
        if (cell.type === 'today') {
          classes.push('today');
        }
      } else {
        classes.push(cell.type);
      }

      if (cell.type === 'normal' && defaultValue.some(date => this.cellMatchesDate(cell, date))) {
        classes.push('default');
      }

      if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
        classes.push('current');
      }

      if (cell.inRange && ((cell.type === 'normal' || cell.type === 'today')) ) {
        if(Object(date_util_["isDate"])(this.minDate) && Object(date_util_["isDate"])(this.maxDate) || this.rangeState.selecting) {
          classes.push('in-range');
        }

        if (cell.start) {
          classes.push('start-date');
        } else if (cell.end) {
          classes.push('end-date');
        }
      }

      if (cell.disabled) {
        classes.push('disabled');
      }

      if (cell.selected) {
        classes.push('selected');
      }

      if (cell.customClass) {
        classes.push(cell.customClass);
      }

      return classes.join(' ');
    },

    getDateOfCell(row, column) {
      const offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;
      return Object(date_util_["nextDate"])(this.startDate, offsetFromStart);
    },

    isWeekActive(cell) {
      if (this.selectionMode !== 'week' && this.selectionMode !== 'weekrange') return false;
      const newDate = new Date(this.year, this.month, 1);
      const year = newDate.getFullYear();
      const month = newDate.getMonth();

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1);
        newDate.setFullYear(month === 0 ? year - 1 : year);
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1);
        newDate.setFullYear(month === 11 ? year + 1 : year);
      }

      newDate.setDate(parseInt(cell.text, 10));

      if (Object(date_util_["isDate"])(this.value)) {
        const dayOffset = (this.value.getDay() - this.firstDayOfWeek + 7) % 7 - 1;
        const weekDate = Object(date_util_["prevDate"])(this.value, dayOffset);
        return weekDate.getTime() === newDate.getTime();
      }
      return false;
    },

    markRange(minDate, maxDate) {
      minDate = getDateTimestamp(minDate);
      maxDate = getDateTimestamp(maxDate) || minDate;
      [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];

      const startDate = this.startDate;
      const rows = this.rows;
      for (let i = 0, k = rows.length; i < k; i++) {
        const row = rows[i];
        for (let j = 0, l = row.length; j < l; j++) {
          if (this.showWeekNumber && j === 0) continue;

          const cell = row[j];
          const index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
          const time = Object(date_util_["nextDate"])(startDate, index - this.offsetDay).getTime();

          cell.inRange = minDate && time >= minDate && time <= maxDate;
          cell.start = minDate && time === minDate;
          cell.end = maxDate && time === maxDate;
        }
      }
    },

    handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      let target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      const row = target.parentNode.rowIndex - 1;

      const isMinGreatMax = +new Date(this.rangeState.startDate) >= +new Date(this.getDateOfCell(row, 6));

      let column = this.selectionMode === 'weekrange' ? isMinGreatMax ? 0 : 6 : target.cellIndex;

      const findIndex = this.rows[row].findIndex(item => !item.disabled);
      const isExistDis = this.rows[row].some(item => item.disabled);

      if(isExistDis && findIndex >= 0) {
        column = findIndex;
      }

      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        const minDateList = this.rangeState.minDateList;
        const endDate = this.getDateOfCell(row, column);

        if(isMinGreatMax && !this.isMinGreatMax && minDateList.length === 2) {
          this.$emit('pick', {minDate: minDateList[1], maxDate: null});

          this.isMinGreatMax = true;
        } else if(this.isMinGreatMax && !isMinGreatMax) {
          this.$emit('pick', {minDate: minDateList[0], maxDate: null});

          this.isMinGreatMax = false;
        }

        this.$nextTick(() => {
          this.$emit('changerange', {
            minDate: this.minDate,
            maxDate: this.maxDate,
            rangeState: {
              selecting: true,
              endDate,
              startDate: this.rangeState.startDate,
              minDateList: this.rangeState.minDateList
            }
          });

          this.lastRow = row;
          this.lastColumn = target.cellIndex;
        })
      }
    },

    handleClick(event) {
      let target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      if (target.tagName !== 'TD') return;

      const row = target.parentNode.rowIndex - 1;
      let column = this.selectionMode === 'week' ? 1 : this.selectionMode === 'weekrange' ? this.rangeState.selecting ? 6 : 0 : target.cellIndex;

      const findIndex = this.rows[row].findIndex(item => !item.disabled);
      const isExistDis = this.rows[row].some(item => item.disabled);

      if(this.selectionMode === 'weekrange' && this.rangeState.startDate && this.rangeState.selecting) {
        column = +new Date(this.rangeState.startDate) >= +new Date(this.getDateOfCell(row, 6)) ? 0 : 6;
      }

      if(isExistDis && findIndex >= 0) {
        column = findIndex;
      }

      const cell = this.rows[row][column];

      if (cell.disabled || cell.type === 'week') return;

      const newDate = this.getDateOfCell(row, column);

      if (this.selectionMode === 'range' || this.selectionMode === 'weekrange') {
        if (!this.rangeState.selecting) {
          this.rangeState.startDate = newDate;
          this.rangeState.minDateList = [
            this.getDateOfCell(row, 0),
            this.getDateOfCell(row, 6)
          ];

          this.$emit('pick', {minDate: newDate, maxDate: null});
          this.rangeState.selecting = true;

          this.$nextTick(() =>{
            this.handleMouseMove({
              target: {
                tagName:'TD',
                parentNode: {
                  rowIndex: row + 1,
                  cellIndex: column
                }
              }
            })
          })
        } else {
          if (newDate >= this.minDate) {
            this.$emit('pick', {minDate: this.minDate, maxDate: newDate});
          } else {
            this.$emit('pick', {minDate: newDate, maxDate: this.minDate});
          }
          this.rangeState.selecting = false;
        }
      } else if (this.selectionMode === 'day') {
        this.$emit('pick', newDate);
      } else if (this.selectionMode === 'week') {
        const weekNumber = Object(date_util_["getWeekNumber"])(newDate);
        const value = newDate.getFullYear() + 'w' + weekNumber;
        this.$emit('pick', {
          year: newDate.getFullYear(),
          week: weekNumber,
          value: value,
          date: newDate
        });
      } else if (this.selectionMode === 'dates') {
        const value = this.value || [];
        const newValue = cell.selected
          ? removeFromArray(value, date => date.getTime() === newDate.getTime())
          : [...value, newDate];
        this.$emit('pick', newValue);
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/date-week-range/src/basic/date-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_date_tablevue_type_script_lang_js_ = (date_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-week-range/src/basic/date-table.vue





/* normalize component */

var date_table_component = normalizeComponent(
  basic_date_tablevue_type_script_lang_js_,
  date_tablevue_type_template_id_9be2482a_render,
  date_tablevue_type_template_id_9be2482a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_table_api; }
date_table_component.options.__file = "packages/date-week-range/src/basic/date-table.vue"
/* harmony default export */ var date_table = (date_table_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/date-week-range/src/panel/week-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), Object(date_util_["nextDate"])(new Date(defaultValue), 1)];
  } else {
    return [new Date(), Object(date_util_["nextDate"])(new Date(), 1)];
  }
};

/* harmony default export */ var week_rangevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  directives: { Clickoutside: clickoutside_default.a },

  computed: {
    btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },

    leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t(`el.datepicker.month${ this.leftDate.getMonth() + 1 }`);
    },

    rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t(`el.datepicker.month${ this.rightDate.getMonth() + 1 }`);
    },

    leftYear() {
      return this.leftDate.getFullYear();
    },

    leftMonth() {
      return this.leftDate.getMonth();
    },

    leftMonthDate() {
      return this.leftDate.getDate();
    },

    rightYear() {
      return this.rightDate.getFullYear();
    },

    rightMonth() {
      return this.rightDate.getMonth();
    },

    rightMonthDate() {
      return this.rightDate.getDate();
    },

    minVisibleDate() {
      if (this.dateUserInput.min !== null) return this.dateUserInput.min;
      if (this.minDate) return Object(date_util_["formatDate"])(this.minDate, this.dateFormat);
      return '';
    },

    maxVisibleDate() {
      if (this.dateUserInput.max !== null) return this.dateUserInput.max;
      if (this.maxDate || this.minDate) return Object(date_util_["formatDate"])(this.maxDate || this.minDate, this.dateFormat);
      return '';
    },

    minVisibleTime() {
      if (this.timeUserInput.min !== null) return this.timeUserInput.min;
      if (this.minDate) return Object(date_util_["formatDate"])(this.minDate, this.timeFormat);
      return '';
    },

    maxVisibleTime() {
      if (this.timeUserInput.max !== null) return this.timeUserInput.max;
      if (this.maxDate || this.minDate) return Object(date_util_["formatDate"])(this.maxDate || this.minDate, this.timeFormat);
      return '';
    },

    timeFormat() {
      if (this.format) {
        return Object(date_util_["extractTimeFormat"])(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },

    dateFormat() {
      if (this.format) {
        return Object(date_util_["extractDateFormat"])(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    },

    enableMonthArrow() {
      const nextMonth = (this.leftMonth + 1) % 12;
      const yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels && new Date(this.leftYear + yearOffset, nextMonth) < new Date(this.rightYear, this.rightMonth);
    },

    enableYearArrow() {
      return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
    }
  },

  data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: Object(date_util_["nextMonth"])(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      shortcuts: '',
      visible: '',
      disabledDate: '',
      cellClassName: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: false,
      maxTimePickerVisible: false,
      format: '',
      arrowControl: false,
      unlinkPanels: false,
      dateUserInput: {
        min: null,
        max: null
      },
      timeUserInput: {
        min: null,
        max: null
      }
    };
  },

  watch: {
    minDate(val) {
      this.dateUserInput.min = null;
      this.timeUserInput.min = null;
      this.$nextTick(() => {
        if (this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
          const format = 'HH:mm:ss';
          this.$refs.maxTimePicker.selectableRange = [
            [
              Object(date_util_["parseDate"])(Object(date_util_["formatDate"])(this.minDate, format), format),
              Object(date_util_["parseDate"])('23:59:59', format)
            ]
          ];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },

    maxDate(val) {
      this.dateUserInput.max = null;
      this.timeUserInput.max = null;
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },

    minTimePickerVisible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.minTimePicker.date = this.minDate;
          this.$refs.minTimePicker.value = this.minDate;
          this.$refs.minTimePicker.adjustSpinners();
        });
      }
    },

    maxTimePickerVisible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.maxTimePicker.date = this.maxDate;
          this.$refs.maxTimePicker.value = this.maxDate;
          this.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },

    value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = Object(date_util_["isDate"])(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = Object(date_util_["isDate"])(newVal[1]) ? new Date(newVal[1]) : null;

        if(this.minDate && this.maxDate) {
          if(this.minDate.getTime() > this.maxDate.getTime()) {
            const maxDate = this.minDate;

            this.minDate = this.maxDate;
            this.maxDate = maxDate;
          }

          const prevWeekDay = Math.abs(7 - this.firstDayOfWeek + this.minDate.getDay()) % 7;
          this.minDate = new Date(this.minDate.getTime() - prevWeekDay * 60 * 60 * 24 * 1000);
        
          const nextWeekDay = Math.abs(this.firstDayOfWeek - 1 - this.maxDate.getDay()) % 7;
          this.maxDate = new Date(this.maxDate.getTime() + nextWeekDay * 60 * 60 * 24 * 1000);
        }

        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            const minDateYear = this.minDate.getFullYear();
            const minDateMonth = this.minDate.getMonth();
            const maxDateYear = this.maxDate.getFullYear();
            const maxDateMonth = this.maxDate.getMonth();
            this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth
              ? Object(date_util_["nextMonth"])(this.maxDate)
              : this.maxDate;
          } else {
            this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
          }
        } else {
          this.leftDate = calcDefaultValue(this.defaultValue)[0];
          this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
        }
      }
    },

    defaultValue(val) {
      if (!Array.isArray(this.value)) {
        const [left, right] = calcDefaultValue(val);
        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels
          ? right
          : Object(date_util_["nextMonth"])(this.leftDate);
      }
    }
  },

  methods: {
    handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = calcDefaultValue(this.defaultValue)[0];
      this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      this.$emit('pick', null);
    },

    handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },

    handleDateInput(value, type) {
      this.dateUserInput[type] = value;
      if (value.length !== this.dateFormat.length) return;
      const parsedValue = Object(date_util_["parseDate"])(value, this.dateFormat);

      if (parsedValue) {
        if (typeof this.disabledDate === 'function' &&
          this.disabledDate(new Date(parsedValue))) {
          return;
        }
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyDate"])(this.minDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.leftDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
          }
        } else {
          this.maxDate = Object(date_util_["modifyDate"])(this.maxDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.rightDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.leftDate = Object(date_util_["prevMonth"])(parsedValue);
          }
        }
      }
    },

    handleDateChange(value, type) {
      const parsedValue = Object(date_util_["parseDate"])(value, this.dateFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyDate"])(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
        } else {
          this.maxDate = Object(date_util_["modifyDate"])(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
        }
      }
    },

    handleTimeInput(value, type) {
      this.timeUserInput[type] = value;
      if (value.length !== this.timeFormat.length) return;
      const parsedValue = Object(date_util_["parseDate"])(value, this.timeFormat);

      if (parsedValue) {
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyTime"])(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(() => this.$refs.minTimePicker.adjustSpinners());
        } else {
          this.maxDate = Object(date_util_["modifyTime"])(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(() => this.$refs.maxTimePicker.adjustSpinners());
        }
      }
    },

    handleTimeChange(value, type) {
      const parsedValue = Object(date_util_["parseDate"])(value, this.timeFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyTime"])(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
          this.$refs.minTimePicker.value = this.minDate;
          this.minTimePickerVisible = false;
        } else {
          this.maxDate = Object(date_util_["modifyTime"])(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
          this.$refs.maxTimePicker.value = this.minDate;
          this.maxTimePickerVisible = false;
        }
      }
    },

    handleRangePick(val, close = true) {
      const defaultTime = this.defaultTime || [];
      const minDate = Object(date_util_["modifyWithTimeString"])(val.minDate, defaultTime[0]);
      const maxDate = Object(date_util_["modifyWithTimeString"])(val.maxDate, defaultTime[1]);
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(() => {
        this.maxDate = maxDate;
        this.minDate = minDate;
      }, 10);
      if (!close) return;
      this.handleConfirm();
    },

    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },

    handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = Object(date_util_["modifyTime"])(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.minTimePickerVisible = visible;
      }

      if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },

    handleMinTimeClose() {
      this.minTimePickerVisible = false;
    },

    handleMaxTimePick(value, visible, first) {
      if (this.maxDate && value) {
        this.maxDate = Object(date_util_["modifyTime"])(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.maxTimePickerVisible = visible;
      }

      if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
        this.minDate = new Date(this.maxDate);
      }
    },

    handleMaxTimeClose() {
      this.maxTimePickerVisible = false;
    },

    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear() {
      this.leftDate = Object(date_util_["prevYear"])(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      }
    },

    leftPrevMonth() {
      this.leftDate = Object(date_util_["prevMonth"])(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      }
    },

    rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = Object(date_util_["nextYear"])(this.leftDate);
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      } else {
        this.rightDate = Object(date_util_["nextYear"])(this.rightDate);
      }
    },

    rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = Object(date_util_["nextMonth"])(this.leftDate);
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      } else {
        this.rightDate = Object(date_util_["nextMonth"])(this.rightDate);
      }
    },

    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear() {
      this.leftDate = Object(date_util_["nextYear"])(this.leftDate);
    },

    leftNextMonth() {
      this.leftDate = Object(date_util_["nextMonth"])(this.leftDate);
    },

    rightPrevYear() {
      this.rightDate = Object(date_util_["prevYear"])(this.rightDate);
    },

    rightPrevMonth() {
      this.rightDate = Object(date_util_["prevMonth"])(this.rightDate);
    },

    handleConfirm(visible = false) {
      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },

    isValidValue(value) {
      return Array.isArray(value) &&
        value && value[0] && value[1] &&
        Object(date_util_["isDate"])(value[0]) && Object(date_util_["isDate"])(value[1]) &&
        value[0].getTime() <= value[1].getTime() && (
        typeof this.disabledDate === 'function'
          ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
          : true
      );
    },

    resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      if (this.minDate && this.maxDate == null) this.rangeState.selecting = false;
      this.minDate = this.value && Object(date_util_["isDate"])(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && Object(date_util_["isDate"])(this.value[0]) ? new Date(this.value[1]) : null;
    }
  },

  components: { DateTable: date_table }
});

// CONCATENATED MODULE: ./packages/date-week-range/src/panel/week-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_week_rangevue_type_script_lang_js_ = (week_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-week-range/src/panel/week-range.vue





/* normalize component */

var week_range_component = normalizeComponent(
  panel_week_rangevue_type_script_lang_js_,
  week_rangevue_type_template_id_02b7be0a_render,
  week_rangevue_type_template_id_02b7be0a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var week_range_api; }
week_range_component.options.__file = "packages/date-week-range/src/panel/week-range.vue"
/* harmony default export */ var week_range = (week_range_component.exports);
// CONCATENATED MODULE: ./packages/date-week-range/src/picker/date-picker.js



const getPanel = function() {
  return week_range;
};

/* harmony default export */ var date_picker = ({
  mixins: [picker],

  name: 'DateWeekRange',

  props: {
    timeArrowControl: Boolean
  },

  watch: {
    type(type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(type);
        this.mountPicker();
      } else {
        this.panel = getPanel(type);
      }
    }
  },

  created() {
    this.panel = getPanel(this.type);
  }
});

// EXTERNAL MODULE: external "element-ui/packages/theme-chalk/src/date-picker.scss"
var date_picker_scss_ = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/date-week-range/src/index.js



/* istanbul ignore next */
date_picker.install = function install(Vue) {
  Vue.component(date_picker.name, date_picker)
}

/* harmony default export */ var src = __webpack_exports__["default"] = (date_picker);


/***/ })
/******/ ]);