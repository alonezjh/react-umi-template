import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import SiderMenu from '../components/SiderMenu';

const { Content } = Layout;

class BasicLayout extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toogleMenuCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentWillMount() {
    // 检查有户是否登录
    const user = window.localStorage.getItem('user');
    if (!user) {
      this.props.dispatch(routerRedux.replace('/login'));
    }
  }

  componentDidMount() {}

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout>
        <SiderMenu collapsed={collapsed}></SiderMenu>
        <Layout>
          <GlobalHeader collapsed={collapsed} onCollapse={this.toogleMenuCollapse} />
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps)(BasicLayout);
