import 'antd/dist/antd.css';
import {Link} from 'umi';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Statistic, Row, Col, Table } from 'antd';
import './Upload.css';
import titlepic from '../../static/cat.jpg'
import { Card, Avatar } from 'antd';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { List, Typography, Divider } from 'antd';
import { Switch, Radio, Form, Space, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    FolderOutlined,
    LikeOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Dragger } = Upload;


///用来展示list的数据
const columns = [
    {
        title: '文件名',
        dataIndex: 'name',
    },
    {
        title: '创建时间',
        dataIndex: 'date',
        sorter: (a, b) => a.date - b.date,
    },
    {
        title: '状态',
        dataIndex: 'tags',
        key: 'tags',
        filters: [
            {
                text: '上传成功',
                value: '0',
            },
            {
                text: '上传失败',
                value: '1',
            },
        ],
        onFilter: (value, record) => record.tags.indexOf(value) === 0,
        render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === '上传失败') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
    },
    {
        title: '操作',
        key: 'action',
        sorter: true,
        render: () => (
            <>
            <Space size="middle">
                <a>删除</a>
                <a>重新上传</a>
                <a className="ant-dropdown-link">
                    更多 <DownOutlined />
                </a>
            </Space>
            </>
        ),
    },
];

const data = [];
for (let i = 1; i <= 30; i++) {
    if(i%2 == 1){
    data.push({
        key: i,
        name: '文件'+i,
        date: `2020.8.${i}`,
        tags: [`上传失败`],
        });
    }
    else{
        data.push({
            key: i,
            name: '文件'+i,
            date: `2020.8.${i}`,
            tags: [`上传成功`],
            });
    }
}

const title = () => 'Here is title';
const showHeader = true;
const pagination = { position: 'bottom' };

///
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    defaultFileList: [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', // custom error message to show
            url: 'http://www.baidu.com/xxx.png',
        },
        {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://www.baidu.com/yyy.png',
        },
        {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', // custom error message to show
            url: 'http://www.baidu.com/zzz.png',
        },
    ],
};

class PageUpload extends React.Component {
    state = {
        collapsed: false,
        bordered: true,
        loading: false,
        pagination,
        ellipsis:true,
        size: 'default',
        title: undefined,
        showHeader,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    };

    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };




    handleHeaderChange = enable => {
        this.setState({ showHeader: enable ? showHeader : false });
    };


    handleRowSelectionChange = enable => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };




    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { xScroll, yScroll, ...state } = this.state;

        const scroll = {};
        if (yScroll) {
            scroll.y = 240;
        }
        if (xScroll) {
            scroll.x = '100vw';
        }

        const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
        if (xScroll === 'fixed') {
            tableColumns[0].fixed = true;
            tableColumns[tableColumns.length - 1].fixed = 'right';
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" defaultOpenKeys={['sub1','sub2','sub3']}>
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
                        <div className="Userid">
                        <a href='/login'><img className="titlepic" src={titlepic} alt="" /></a>

                                用户名
                        </div>

                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>数据搜集</Breadcrumb.Item>
                            <Breadcrumb.Item>文件上传</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <div className="Uploadlist">
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
                                    <p className="ant-upload-hint">
                                        支持文件拓展名： .rar .jpg .mp3 ....
                                    </p>
                                </Dragger>
                            </div>

                            <div className="FileList">
                                <>
                                    <Form
                                        layout="inline"
                                        className="components-table-demo-control-bar"
                                        style={{ marginBottom: 16 }}
                                    >

                                        <Form.Item label="loading">
                                            <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
                                        </Form.Item>


                                    </Form>
                                    <Table
                                        {...this.state}
                                        pagination={{ position: [this.state.top, this.state.bottom] }}
                                        columns={tableColumns}
                                        dataSource={state.hasData ? data : null}
                                        scroll={scroll}
                                    />
                                </>
                            </div>

                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default PageUpload