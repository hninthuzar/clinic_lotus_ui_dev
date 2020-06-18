import React, { Component } from "react";
import { Layout, Calendar, Checkbox, Button } from "antd";
import moment from 'moment';
const { Content } = Layout;
class TimeTable extends Component {
  state = { value: moment(new Date()) };

  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  dateCellRender = (value) => {
    const caldata = value;
    return (
      <div className="mb-3">
        <div>
        <Checkbox onChange={this.onChange}> M </Checkbox>
        </div>
        <div>
        <Checkbox onChange={this.onChange}> E </Checkbox>
        </div>        
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
          <div className="text-center"><h5 style={{color: "rgb(24, 144, 255)"}}>Time Table</h5></div>
          <Calendar
            value={this.state.value}
            dateCellRender={this.dateCellRender}
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

export default TimeTable;
