import 'antd/dist/antd.css';
import { Link } from 'umi';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Statistic, Row, Col } from 'antd';
import './PageResult.css';
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

const { RangePicker } = DatePicker;

const Picdata = [
    '文件名称：阿巴阿巴阿巴',
    '创建时间：2020.2.30',
    '类型：图片',
];
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '描述',
        dataIndex: 'describe',
        key: 'describe',
    },
];

const data = [];
for (let i = 1; i <= 30; i++) {
    data.push({
        key: i,
        name: '名称' + i,
        describe:`第${i}个图片描述`
    });

}


class PageResult extends React.Component {
    state = {
        collapsed: false,
        bordered: false,
        loading: false,
        size: 'default',
        title: undefined,
        // rowSelection: {},
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
                    <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" defaultOpenKeys={['sub1','sub2','sub3']}>
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
                            <Breadcrumb.Item>检测列表</Breadcrumb.Item>
                            <Breadcrumb.Item>检测结果</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content" style={{ padding: 24, minHeight: 360 }}>
                            <img className="picture" src={pic1} />
                            <div className="List_ifo">
                                <List
                                    // className='List_ifo'
                                    size="large"
                                    bordered
                                    dataSource={Picdata}
                                    renderItem={item => <List.Item><h1>{item}</h1></List.Item>}
                                />

                                <div className="Tags">
                                    <Tag color="magenta">magenta</Tag>
                                    <Tag color="red">red</Tag>
                                    <Tag color="volcano">volcano</Tag>
                                    <Tag color="orange">orange</Tag>
                                    <Tag color="gold">gold</Tag>
                                    <Tag color="lime">lime</Tag>

                                </div>
                            </div>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                            <Table 
                             {...this.state}
                             className="SourceData" 
                             columns={columns} dataSource={data}
                            />
                            <br/><br/>
                 
                            <Button className="btn" id="btn1" type="primary">保存</Button>
                            <Button className="btn" id="btn2" type="primary"><Link to='/main/MainPage_SourceTag'>数据标注</Link></Button>
                            <Button className="btn" id="btn3" type="primary">返回</Button>
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default PageResult