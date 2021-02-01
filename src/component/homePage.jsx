import React from "react";
import { FormattedMessage } from "react-intl";
import { Layout } from 'antd';
const { Content } = Layout;
const HomePage = ({ history}) => {
  return (
    <Content className="text-center" style={{ margin: "150px 20px 20px" }}>
      <div>
        <button className="btn btn-success" style={{ width: "250px",padding: "30px 0px" }} onClick={() => history.push("/home/appointment")}>
        <FormattedMessage id="lbl.appoint" defaultMessage="Appointment" />          
        </button> 
      </div>  
      <div className="mt-5">
        <button className="btn btn-primary" style={{ width: "250px",padding: "30px 0px" }} onClick={() => history.push("/home/time_table")}>
          <FormattedMessage id="lbl.timetbl" defaultMessage="Time Table" />         
        </button> 
      </div>    
    </Content>
  );
};

export default HomePage;
