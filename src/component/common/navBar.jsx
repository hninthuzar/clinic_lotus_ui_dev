import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import 'antd/dist/antd.css';
import logo from '../../logo.svg';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { HomeOutlined, UserOutlined ,MenuOutlined , LoginOutlined, KeyOutlined} from "@ant-design/icons";
const { Header } = Layout;
const NavBar = ({changeLang}) => {
  const headerstyle = {
    height: "auto",
    padding: "0 10px",
    color: "rgba(0, 0, 0, 0.65)",
    lineHeight: "54px",
    background: "#001529"
  };
  const colorInfo = {
    color: "#007bff"
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/user_account"><UserOutlined className="mr-2" style={colorInfo}/>Personal Information</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/"><KeyOutlined className="mr-2" style={colorInfo}/>Change Password</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/login" ><LoginOutlined className="mr-2" style={colorInfo}/>Log Out</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="layout">
      <Header style={headerstyle}>
        <div className="logo"><img src={logo} className="nav-logo" alt="logo" /></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1"><Link to="/home"><HomeOutlined/></Link></Menu.Item>
          <Menu.Item key="2"><Link to="/user_account"><UserOutlined/></Link></Menu.Item>
          <div key="3" style={{float: "right"}}>
            {/* <Button type="default" onClick={changeLang}>
              <FormattedMessage id="lbl.changeLang" defaultMessage="English" />
            </Button> */}

            <Dropdown overlay={menu}>
              <Button type="default">
                <MenuOutlined />
              </Button>
            </Dropdown>
          </div>          
        </Menu>        
      </Header>
    </Layout>
  );
};

export default NavBar;
