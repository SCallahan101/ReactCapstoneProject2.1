function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { getAlignmentOffset } from './utilities/style-utilities';

var defaultButtonStyles = function defaultButtonStyles(disabled) {
  return {
    border: 0,
    background: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: 10,
    textTransform: 'uppercase',
    opacity: disabled && 0.3,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
};

export var PreviousButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PreviousButton, _React$Component);

  function PreviousButton() {
    var _this;

    _classCallCheck(this, PreviousButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreviousButton).apply(this, arguments));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PreviousButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.previousSlide();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$defaultCo = this.props.defaultControlsConfig,
          prevButtonClassName = _this$props$defaultCo.prevButtonClassName,
          _this$props$defaultCo2 = _this$props$defaultCo.prevButtonStyle,
          prevButtonStyle = _this$props$defaultCo2 === void 0 ? {} : _this$props$defaultCo2,
          prevButtonText = _this$props$defaultCo.prevButtonText;
      var disabled = this.props.currentSlide === 0 && !this.props.wrapAround || this.props.slideCount === 0;
      return React.createElement("button", {
        className: prevButtonClassName,
        style: _objectSpread({}, defaultButtonStyles(disabled), {}, prevButtonStyle),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "previous",
        type: "button"
      }, prevButtonText || 'Prev');
    }
  }]);

  return PreviousButton;
}(React.Component);
export var NextButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NextButton, _React$Component2);

  function NextButton() {
    var _this2;

    _classCallCheck(this, NextButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NextButton).apply(this, arguments));
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.nextButtonDisable = _this2.nextButtonDisabled.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(NextButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.nextSlide();
    }
  }, {
    key: "nextButtonDisabled",
    value: function nextButtonDisabled(params) {
      var cellAlign = params.cellAlign,
          cellSpacing = params.cellSpacing,
          currentSlide = params.currentSlide,
          frameWidth = params.frameWidth,
          positionValue = params.positionValue,
          slideCount = params.slideCount,
          slidesToShow = params.slidesToShow,
          slideWidth = params.slideWidth,
          wrapAround = params.wrapAround;
      var buttonDisabled = false;

      if (!wrapAround) {
        var alignmentOffset = getAlignmentOffset(currentSlide, {
          cellAlign: cellAlign,
          cellSpacing: cellSpacing,
          frameWidth: frameWidth,
          slideWidth: slideWidth
        });
        var relativePosition = positionValue - alignmentOffset;
        var width = slideWidth + cellSpacing;
        var endOffset = cellAlign === 'center' ? 2 * alignmentOffset : alignmentOffset;
        var endPosition = -width * slideCount + width * slidesToShow - endOffset;
        buttonDisabled = relativePosition < endPosition || Math.abs(relativePosition - endPosition) < 0.01;
      }

      return buttonDisabled;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cellAlign = _this$props.cellAlign,
          cellSpacing = _this$props.cellSpacing,
          currentSlide = _this$props.currentSlide,
          frameWidth = _this$props.frameWidth,
          left = _this$props.left,
          slideCount = _this$props.slideCount,
          slidesToShow = _this$props.slidesToShow,
          slideWidth = _this$props.slideWidth,
          top = _this$props.top,
          vertical = _this$props.vertical,
          wrapAround = _this$props.wrapAround;
      var _this$props$defaultCo3 = this.props.defaultControlsConfig,
          nextButtonClassName = _this$props$defaultCo3.nextButtonClassName,
          _this$props$defaultCo4 = _this$props$defaultCo3.nextButtonStyle,
          nextButtonStyle = _this$props$defaultCo4 === void 0 ? {} : _this$props$defaultCo4,
          nextButtonText = _this$props$defaultCo3.nextButtonText;
      var disabled = this.nextButtonDisabled({
        cellAlign: cellAlign,
        cellSpacing: cellSpacing,
        currentSlide: currentSlide,
        frameWidth: frameWidth,
        positionValue: vertical ? top : left,
        slideCount: slideCount,
        slidesToShow: slidesToShow,
        slideWidth: slideWidth,
        wrapAround: wrapAround
      });
      return React.createElement("button", {
        className: nextButtonClassName,
        style: _objectSpread({}, defaultButtonStyles(disabled), {}, nextButtonStyle),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "next",
        type: "button"
      }, nextButtonText || 'Next');
    }
  }]);

  return NextButton;
}(React.Component);
export var PagingDots =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(PagingDots, _React$Component3);

  function PagingDots() {
    _classCallCheck(this, PagingDots);

    return _possibleConstructorReturn(this, _getPrototypeOf(PagingDots).apply(this, arguments));
  }

  _createClass(PagingDots, [{
    key: "getDotIndexes",
    value: function getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign, scrollMode) {
      var dotIndexes = [];
      var lastDotIndex = slideCount - slidesToShow;

      switch (cellAlign) {
        case 'center':
        case 'right':
          lastDotIndex += slidesToShow - 1;
          break;
      }

      if (lastDotIndex < 0) {
        return [0];
      }

      for (var i = 0; i < lastDotIndex; i += slidesToScroll) {
        dotIndexes.push(i);
      }

      if (cellAlign === 'left' && scrollMode === 'page') {
        lastDotIndex = Math.floor(slideCount - (slideCount % slidesToShow || slidesToShow));
      }

      dotIndexes.push(lastDotIndex);
      return dotIndexes;
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      return {
        position: 'relative',
        top: -10,
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyleType: 'none'
      };
    }
  }, {
    key: "getButtonStyles",
    value: function getButtonStyles(active) {
      return {
        cursor: 'pointer',
        opacity: active ? 1 : 0.5,
        background: 'transparent',
        border: 'none',
        fill: 'black'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var indexes = this.getDotIndexes(this.props.slideCount, this.props.slidesToScroll, this.props.slidesToShow, this.props.cellAlign, this.props.scrollMode);
      var _this$props$defaultCo5 = this.props.defaultControlsConfig,
          pagingDotsContainerClassName = _this$props$defaultCo5.pagingDotsContainerClassName,
          pagingDotsClassName = _this$props$defaultCo5.pagingDotsClassName,
          _this$props$defaultCo6 = _this$props$defaultCo5.pagingDotsStyle,
          pagingDotsStyle = _this$props$defaultCo6 === void 0 ? {} : _this$props$defaultCo6;
      return React.createElement("ul", {
        className: pagingDotsContainerClassName,
        style: this.getListStyles()
      }, indexes.map(function (index) {
        var isActive = _this3.props.currentSlide === index;
        return React.createElement("li", {
          key: index,
          className: isActive ? 'paging-item active' : 'paging-item'
        }, React.createElement("button", {
          className: pagingDotsClassName,
          type: "button",
          style: _objectSpread({}, _this3.getButtonStyles(isActive), {}, pagingDotsStyle),
          onClick: _this3.props.goToSlide.bind(null, index),
          "aria-label": "slide ".concat(index + 1, " bullet")
        }, React.createElement("svg", {
          className: "paging-dot",
          width: "6",
          height: "6"
        }, React.createElement("circle", {
          cx: "3",
          cy: "3",
          r: "3"
        }))));
      }));
    }
  }]);

  return PagingDots;
}(React.Component);