import 'antd/dist/antd.css';
import { Link } from 'umi';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Statistic, Row, Col } from 'antd';
import './PageprTagList.css'
import titlepic from '../../static/cat.jpg'
import pic1 from '../../static/pic1.png'
import { Card, Avatar } from 'antd';
import {
    DesktopOutlined,
    TeamOutlined,
    FolderOutlined,
} from '@ant-design/icons';
import { DatePicker, Space, Button } from 'antd';
import { List, Typography, Divider, Tag, Table } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const { RangePicker } = DatePicker;

const Picdata = [
    '文件名称：阿巴阿巴阿巴',
    '创建时间：2020.2.30',
    '类型：图片',
];
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
const columns = [
    {
        title: '标签名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '标签描述',
        dataIndex: 'describe',
        key: 'describe',
    },
    {
        title: '创建者',
        dataIndex: 'creator',
        key: 'creator',
    },
];

const data = [];
for (let i = 1; i <= 30; i++) {
    data.push({
        key: i,
        name: 'lable' + i,
        describe:`第${i}个标签描述`,
        creator:"管理员/个人"
    });

}


class PagePrTagList extends React.Component {
    state = {
        collapsed: false,
        bordered: false,
        loading: false,
        size: 'default',
        title: undefined,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { xScroll, yScroll, ...state } = this.state;
        const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline" defaultOpenKeys={['sub1','sub2','sub3']}>
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
                            <Breadcrumb.Item>标签列表</Breadcrumb.Item>
                            <Breadcrumb.Item>标签列表-个人</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content" style={{ padding: 24, minHeight: 360 }}>
                        <Button id="btn1" className = "Btn">批量删除</Button>
                        <Button id="btn2" className = "Btn" type ="primary">添加</Button>
                        <Button id="btn3" className = "Btn">公共</Button>
                        <Button id="btn4" className = "Btn">个人</Button>
                        <Search 
                        className = "Search"
                        placeholder="input search text" onSearch={value => console.log(value)} enterButton />

                            <br/><br/><br/><br/><br/>

                            <Table 
                             {...this.state}
                             className="SourceData" 
                             columns={columns} dataSource={data}
                            />
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default PagePrTagList