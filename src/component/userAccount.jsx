import React, { Component } from "react";
import { Form, Input, Button, DatePicker, Table } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";
const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 7,
  },
};
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "User Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
];

const data = [
  {
    key: "1",
    date: "2020/06/01",
    user_name: "John Brown",
    password: 32,
  },
  {
    key: "2",
    date: "2020/06/02",
    user_name: "Jim Green",
    password: 42,
  },
  {
    key: "3",
    date: "2020/06/03",
    user_name: "Joe Black",
    password: 32,
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {    
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class UserAccount extends Component {
  state = { userData: {date: moment(new Date()), user_name: '', password: ''} };
  onChange = (value, dateString) => {
    console.log("Formatted Selected Date: ", dateString);
    if (!value) return;
    console.log("Selected Date: ", value.format(dateFormat));
  };

  onFinish = (values) => {
    console.log(values);
  };

  render() { 
    const {userData} = this.state;
    return (
      <div className="mt-4">
        <Form
          className="mb-4"
          {...layout}
          name="control-ref"
          onFinish={this.onFinish}
        >
          <div className="mr-3 ml-3">
            <Form.Item className="mb-2" label="Date">
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={userData.date}
                format={dateFormat}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item
              className="mb-2"
              name="user_name"
              label="User Name"              
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={userData.user_name}/>
            </Form.Item>
            <Form.Item
              className="mb-2"
              name="password"
              label="Password"              
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={userData.password}/>
            </Form.Item>
          </div>
          <div className="col-md-4 offset-md-4 text-right">
            <Button
              className="mr-2"
              type="primary"
              htmlType="button"
              onClick={this.onReset}
            >
              New
            </Button>
            <Button
              className="mr-2"
              htmlType="button"
              type="danger"
              onClick={this.onReset}
            >
              Delete
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "green", borderColor: "green" }}
            >
              Save
            </Button>
          </div>
        </Form>
        <div className="mr-3 ml-3 mb-3">
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            bordered
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}

export default UserAccount;
