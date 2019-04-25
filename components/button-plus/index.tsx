/**
 * 封装Button
 * @author: huangzhenjie
 * @since: 2019-04-25 14:14:00
 */
import * as React from 'react';
import { Button, Popconfirm } from 'antd';
export default class ButtonPlus extends React.Component<any> {
  render() {
    const { type, className = '', onClick, ...restProps } = this.props;
    if (type === 'del') {
      return (
        <Popconfirm title="确认要删除吗?" onConfirm={onClick} style={{ width: 200 }}>
          <Button type="danger" className={`button-plus ${className}`} onClick={(e: any) => e.preventDefault()} {...restProps}>
            删除
          </Button>
        </Popconfirm>
      );
    } else {
      return <Button {...this.props} />;
    }
  }
}
