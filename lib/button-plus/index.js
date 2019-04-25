'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _antd = require('antd');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/**
 * 封装Button
 * @author: huangzhenjie
 * @since: 2019-04-25 14:14:00
 */

var ButtonPlus = function (_React$Component) {
    (0, _inherits3['default'])(ButtonPlus, _React$Component);

    function ButtonPlus() {
        (0, _classCallCheck3['default'])(this, ButtonPlus);
        return (0, _possibleConstructorReturn3['default'])(this, (ButtonPlus.__proto__ || Object.getPrototypeOf(ButtonPlus)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ButtonPlus, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                _a$className = _a.className,
                className = _a$className === undefined ? '' : _a$className,
                onClick = _a.onClick,
                restProps = __rest(_a, ["type", "className", "onClick"]);
            var nClassName = 'button-plus ' + className;
            if (type === 'del') {
                return React.createElement(
                    _antd.Popconfirm,
                    { title: '\u786E\u8BA4\u8981\u5220\u9664\u5417?', onConfirm: onClick, style: { width: 200 } },
                    React.createElement(
                        _antd.Button,
                        (0, _extends3['default'])({ type: 'danger', className: nClassName, onClick: function onClick(e) {
                                return e.preventDefault();
                            } }, restProps),
                        '\u5220\u9664'
                    )
                );
            } else {
                return React.createElement(_antd.Button, this.props);
            }
        }
    }]);
    return ButtonPlus;
}(React.Component);

exports['default'] = ButtonPlus;
module.exports = exports['default'];