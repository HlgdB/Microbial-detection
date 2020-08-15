import { Link } from 'umi';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import {
  Form,
  Input,
  Button
} from 'antd';
import titlepic from '../static/cat.jpg'
import './post.css'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';


class Post extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="title">
          <img className="pic" src={titlepic} alt="" />

          <font className="projectName" size="5">{"     ".replace(/ /g, "\u00a0")}微生物活镜检测系统</font>

        </div>
        <div className="center-in-center">
          <font className="projectName" size="3" color="#0099ff" >注册</font>
          <br /><br />
          <Form
            className="post-form"
            name="register"
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label=""
              rules={[
                {
                  required: true,
                  message: '请输入邮箱',
                },
                {
                  type: 'email',
                  message: '邮箱格式错误',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="注册邮箱" />

            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入你的用户名！' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="昵称" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入您的密码',
                },
              ]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined />} placeholder="6到16位密码，区分大写小写" />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '确认密码',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('密码不一致！');
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
            </Form.Item>
            <div className="Btn">
              <Button className="PostBtn" type="primary" htmlType="submit">
                注册
            </Button>

              <Button className="PostBtn" type="link" block>
                <Link to='login'>使用已有账户登录</Link>
            </Button>
            </div>
          </Form>

        </div>

      </div>
    );
  }
}

export default Post
