import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../logo.svg";

const colorInfo = {
  color: "#007bff"
};
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form
            className="mr-3 ml-3"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                style={{ width: "300px" }}
                prefix={<UserOutlined className="site-form-item-icon mr-1" style={colorInfo} />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                style={{ width: "300px" }}
                prefix={<LockOutlined className="site-form-item-icon mr-1" style={colorInfo} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item> */}
            <Form.Item>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </header>
      </div>
    );
  }
}

export default LoginForm;
