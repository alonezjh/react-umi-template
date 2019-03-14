import React from 'react';
import { Checkbox, Form, Input, Button, Icon } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';

const { Item: FormItem } = Form;

import logo from '../../assets/yay.jpg';

class Login extends React.PureComponent<any, any> {
  handleLogin = () => {
    const { dispatch, form } = this.props;
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: 'login/login', payload: values });
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className={styles.login}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={logo} />
            <span />
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '用户名不能为空' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '密码不能为空' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                  onPressEnter={this.handleLogin}
                />
              )}
            </FormItem>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>保持登录</Checkbox>)}
              <Button type="primary" onClick={this.handleLogin}>
                登录
              </Button>
              <a className={styles.forget} href="">
                忘记了密码？
              </a>
            </Form.Item>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Form.create({})(Login));
