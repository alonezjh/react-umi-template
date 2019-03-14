import React from 'react';
import { Layout, Avatar, Dropdown, Tooltip, Menu, Icon } from 'antd';
import styles from './index.scss';
const { Header } = Layout;

import avatar from '../../assets/avatar.jpg';

class GlobalHeader extends React.Component<any, any> {
  state = {
    isCollapsed: false,
    isFullScreen: false,
  };

  toggleSiderMenu = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  toggleFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen,
    });
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  render() {
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]}>
        <Menu.Item disabled>
          <Icon type="user" />
          个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />
          设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={this.state.isCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleSiderMenu}
        />
        <div className={styles.right}>
          <Tooltip title="全屏显示">
            <a onClick={this.toggleFullScreen} className={styles.action}>
              <Icon type={this.state.isFullScreen ? 'fullscreen-exit' : 'fullscreen'} />
            </a>
          </Tooltip>
          <Tooltip title="使用文档">
            <a
              target="_blank"
              href="http://pro.ant.design/docs/getting-started"
              rel="noopener noreferrer"
              className={styles.action}
            >
              <Icon type="question-circle" />
            </a>
          </Tooltip>
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar size="small" className={styles.avatar} src={avatar} />
              <span className={styles.name}>盒儿里的人</span>
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

export default GlobalHeader;
