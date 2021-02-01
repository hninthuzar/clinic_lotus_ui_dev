import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Calendar, Checkbox, Button } from "antd";
import moment from 'moment';
import "../css/mystyle.css";
import { UserOutlined } from "@ant-design/icons";
import { getAppointment, getAppointmentByID, saveAppointment, deleteAppointment } from "../store/actions/index";

const { Content } = Layout;
var defDate;
class Appointment extends Component {
  state = { value: moment(new Date()),checked: true, datacheck: {}, appointment: []};

  onChange = async (e) => {
    const {datacheck, appointment} = this.state;
    datacheck[defDate] = e.target.checked;
    let objData = appointment.filter(i => moment(new Date(i.date_f)).format('YYYY-MM-DD') === defDate)[0];

    if(objData === undefined) {
      objData = {
        appoint_id_f: 0,
        user_id_f: 1,
        date_f: defDate,
        is_appoint_f: e.target.checked};
    } else {
      objData.is_appoint_f = e.target.checked;
    }
    // await this.props.saveAppointment(objData);
    console.log("Save!" + JSON.stringify(objData));
    this.setState({
      datacheck,
    });
  };

  dateCellRender = (value) => {
    let {datacheck} = this.state;
    const dateval = value.format('YYYY-MM-DD');
    // console.log("dateval " + JSON.stringify(datacheck[dateval]));
    return (
      <div className="text-center mb-3">
        <Checkbox checked={datacheck[dateval]} onChange={this.onChange} />
      </div>
    );    
  };

  onSelect = (value) => {
    defDate = value.format('YYYY-MM-DD');
  };

  async componentDidMount(){
    await this.props.getAppointment();
    const appointment = this.props.appointment.collection_f === undefined ? [] : this.props.appointment.collection_f;
    let obj_appointment = {};
    appointment.map(i => {
      return (
        obj_appointment = {
          ...obj_appointment,
          [moment(new Date(i.date_f)).format('YYYY-MM-DD')]: i.is_appoint_f,
        }
      );
    });
    this.setState({datacheck: obj_appointment, appointment});
    // console.log("obj_appointment " + JSON.stringify(obj_appointment));
  }

  render() {
    return (
      <Content style={{ margin: "15px 5%" }}>
        <div>
          <div className="text-center"><h5 style={{color: "rgb(24, 144, 255)"}}>Calendar For Appointment</h5></div>
          <Button type="primary" style={{background: "green",borderColor: "green"}}><UserOutlined className="mr-1" />Appointment List</Button>
          <Calendar 
            dateCellRender={this.dateCellRender} 
            onSelect={this.onSelect}
          />
          <hr style={{marginTop: "0px"}}/>
          <div className="mb-3" style={{float: "right"}}>
          </div>          
        </div>
      </Content>
    );
  }
}

const mapStateToProps = ({ appointment }) => {
	return { appointment };
};

export default connect( mapStateToProps, { getAppointment, getAppointmentByID, saveAppointment, deleteAppointment })(Appointment);
