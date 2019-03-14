import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.scss';
import Link from 'umi/link';
const { Sider } = Layout;
const { SubMenu } = Menu;

import logo from '../../assets/yay.jpg';

class SiderMenu extends React.Component<any, any> {
  
  render() {
    const { collapsed, onCollapse } = this.props;
    return (
      <Sider collapsed={collapsed} onCollapse={onCollapse} className={styles.sider}>
        <div className={styles.logo} key="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Alonez</h1>
          </Link>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span>用户管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="database" />
            <span>数据管理</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="setting" />
            <span>系统设置</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;
