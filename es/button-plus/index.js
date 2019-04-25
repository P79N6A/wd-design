import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
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
import * as React from 'react';
import { Button, Popconfirm } from 'antd';

var ButtonPlus = function (_React$Component) {
    _inherits(ButtonPlus, _React$Component);

    function ButtonPlus() {
        _classCallCheck(this, ButtonPlus);

        return _possibleConstructorReturn(this, (ButtonPlus.__proto__ || Object.getPrototypeOf(ButtonPlus)).apply(this, arguments));
    }

    _createClass(ButtonPlus, [{
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
                    Popconfirm,
                    { title: '\u786E\u8BA4\u8981\u5220\u9664\u5417?', onConfirm: onClick, style: { width: 200 } },
                    React.createElement(
                        Button,
                        _extends({ type: 'danger', className: nClassName, onClick: function onClick(e) {
                                return e.preventDefault();
                            } }, restProps),
                        '\u5220\u9664'
                    )
                );
            } else {
                return React.createElement(Button, this.props);
            }
        }
    }]);

    return ButtonPlus;
}(React.Component);

export default ButtonPlus;