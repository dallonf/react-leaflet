'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _leaflet = require('leaflet');

var _MapLayer2 = require('./MapLayer');

var _MapLayer3 = _interopRequireDefault(_MapLayer2);

var LayerGroup = (function (_MapLayer) {
  _inherits(LayerGroup, _MapLayer);

  function LayerGroup() {
    _classCallCheck(this, LayerGroup);

    _get(Object.getPrototypeOf(LayerGroup.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LayerGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _get(Object.getPrototypeOf(LayerGroup.prototype), 'componentWillMount', this).call(this);
      this.leafletElement = (0, _leaflet.layerGroup)();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var children = _react2['default'].Children.map(this.props.children, function (child) {
        return child ? _react2['default'].cloneElement(child, {
          layerGroup: _this.leafletElement,
          map: _this.props.map
        }) : null;
      });

      return _react2['default'].createElement(
        'div',
        { style: { display: 'none' } },
        children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
      map: _react.PropTypes.instanceOf(_leaflet.Map)
    },
    enumerable: true
  }]);

  return LayerGroup;
})(_MapLayer3['default']);

exports['default'] = LayerGroup;
module.exports = exports['default'];