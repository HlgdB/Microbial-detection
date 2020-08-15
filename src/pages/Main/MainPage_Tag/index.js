import 'antd/dist/antd.css';
import { Link } from 'umi';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Statistic, Row, Col ,Button, Table, Tag} from 'antd';
import './Tag.css';
import titlepic from '../../static/cat.jpg'
import { Card, Avatar, Input } from 'antd';
import {  Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
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
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const menu = (   
    <Menu>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          全部
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          自己上传
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          他人上传
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          已检测
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          未检测
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          视频
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          图片
        </a>
      </Menu.Item>
    </Menu>
  );

  const data = [
    {
      key: '1',
      name: '文件1',
      status: '已检测',
      type: '视频',
      time: '2014-12-24 23:12:00',
      user: '自己',
      action_name: ['检测', '标注', '删除']
    },
    {
        key: '2',
        name: '文件2',
        status: '未检测',
        type: '图片',
        time: '2014-12-24 23:12:00',
        user: '他人',
        action_name: ['查看', '', '']
    },
    {
        key: '3',
        name: '文件3',
        status: '已检测',
        type: '图片',
        time: '2014-12-24 23:12:00',
        user: '自己',
        action_name: ['检测', '标注', '删除']
    },
    {
        key: '4',
        name: '文件4',
        status: '已检测',
        type: '图片',
        time: '2014-12-24 23:12:00',
        user: '他人',
        action_name: ['查看', '', '']
    },
    {
        key: '5',
        name: '文件5',
        status: '已检测',
        type: '视频',
        time: '2014-12-24 23:12:00',
        user: '自己',
        action_name: ['检测', '标注', '删除']
    },
    {
        key: '6',
        name: '文件6',
        status: '未检测',
        type: '图片',
        time: '2014-12-24 23:12:00',
        user: '他人',
        action_name: ['查看', '', '']
    },
  ];
  
  const columns = [
    {
      title: '应用名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '检测状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '创建时间',
      key: 'time',
      dataIndex: 'time',
    },
    {
        title: '上传者',
        key: 'user',
        dataIndex: 'user'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to='/main/MianPage_showResult'>{record.action_name[0]}</Link>
          <Link to='/main/MainPage_SourceTag'>{record.action_name[1]}</Link>
          <a>{record.action_name[2]}</a>
        </Space>
      ),
    },
  ];

  const paginationProps = {
    defaultPageSize: 4
  }


class TagPage extends React.Component {
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
                    <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" defaultOpenKeys={['sub1','sub2','sub3']}>
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
                            <Breadcrumb.Item>活体检测</Breadcrumb.Item>
                            <Breadcrumb.Item>检测列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <DatePicker />
                            <Input style={{width:300,marginLeft:790}} placeholder="搜索"/>
                            <Button style={{marginTop: 10,marginRight:1080}}>一键检测</Button>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                筛选目标 <DownOutlined />
                                </a>
                            </Dropdown>
                            <Table columns={columns} dataSource={data} style={{marginTop:20}} pagination={ paginationProps } rowSelection={{type:'checkbox'}} />
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default TagPage