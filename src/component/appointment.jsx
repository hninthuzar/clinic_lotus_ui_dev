import React, { Component } from "react";
import { Layout, Calendar, Checkbox, Button } from "antd";
import moment from 'moment';
import "../css/mystyle.css";
const { Content } = Layout;
class Appointment extends Component {
  state = { value: moment(new Date()),checked: true};

  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  dateCellRender = (value) => {
    const caldata = value;
    return (
      <div className="text-center mb-3">
        <Checkbox checked={this.state.checked} onChange={this.onChange} />
      </div>
    );
  };
  monthCellRender = (value) => {
    return (
      <div className="text-center mb-3">
        <Checkbox checked={this.state.checked} onChange={this.onChange} />
      </div>
    );
  };

  onSelect = (value) => {
    this.setState({
      value
    });
    console.log(value.format('YYYY-MM-DD'));
  };

  render() {
    return (
      <Content style={{ margin: "15px 5%" }}>
        <div>
          <div className="text-center"><h5 style={{color: "rgb(24, 144, 255)"}}>Calendar For Appointment</h5></div>
          <Calendar value={this.state.value}
            dateCellRender={this.dateCellRender}
            monthCellRender={this.monthCellRender}
            onSelect={this.onSelect}
          />
          <hr style={{marginTop: "0px"}}/>
          <div className="mb-3" style={{float: "right"}}>
          <Button type="default" shape="round">Cancel</Button>
          <Button type="primary" shape="round" className="ml-2" style={{background: "green",borderColor: "green"}}>Save</Button>
          </div>          
        </div>
      </Content>
    );
  }
}

export default Appointment;
