import 'antd/dist/antd.css';
import { Link } from 'umi';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Statistic, Row, Col } from 'antd';
import './main.css';
import titlepic from '../static/cat.jpg'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  FolderOutlined,
  LikeOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
class Mainpage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" defaultOpenKeys={['sub1','sub2','sub3']}>
            <Menu.Item key="0">
              <Link to='/main'>首页</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<FolderOutlined />} title="数据搜集">
              <Menu.Item key="1">
                <Link to='/main/MainPage_Upload'>文件上传</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<FolderOutlined />} title="活体检测">
              <Menu.Item key="2">
                <Link to='/main/MainPage_Tag'>检测列表</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/main/MianPage_showResult'>检测结果</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/main/MainPage_SourceTag'>数据标注</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="标签管理">
              <Menu.Item key="5">
                <Link to='/main/MainPrivateTag'>
                  标签列表-个人
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to='/main/MainPublicTagList'>标签列表-公共</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <div className="id">
              <Link to="../login"><img className="titlepic" src={titlepic} alt="" /></Link>

              用户名
              </div>

          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div className="dataShow">
                
                <Row gutter={16}>
                  <img className="Userpic" src={titlepic} alt="" />
                  <div className="Usertext">

                    <p className="projectName">用户名：喵喵喵</p>

                    <p className="projectName">邮箱：yingying@yy.com</p>
                  </div>
                  <Col className="data" span={2}>
                    <Statistic title="文件数" value={56} />
                  </Col>
                  <Col className="data" span={2}>
                    <Statistic title="已检测" value={8} suffix="/ 100" />
                  </Col>
                  <Col className="data" span={2}>
                    <Statistic title="自己上传" value={1} suffix="/ 2" />
                  </Col>

                </Row>
              </div>
              <br />
              <br />
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                  <Card
                style={{ width:350}}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                style={{ width: 350 }}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                style={{ width: 350 }}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                </Row>
              </div>
              
              <br />
              <br />
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                  <Card
                style={{ width:350}}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                style={{ width: 350 }}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                style={{ width: 350 }}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                </Row>
              </div>

              <br />
              <br />
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                  <Card
                style={{ width:350}}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                style={{ width: 350 }}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                  <Col span={8}>
                  <Card
                style={{ width: 350 }}
                actions={[
                  // <SettingOutlined key="setting" />,
                  // <EditOutlined key="edit" />,
                  <p>操作1</p>,
                  <p>操作2</p>
                ]}
              >
                
                <Meta className="Cardtitle"
                  avatar={<Avatar src={titlepic} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
                  </Col>
                </Row>
              </div>

            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Mainpage