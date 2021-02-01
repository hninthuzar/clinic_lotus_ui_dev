import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Calendar, Checkbox, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import moment from 'moment';
import { getTimeTblList, getTimeTblByID, saveTimeTable, deleteTimeTable } from "../store/actions/index";
const { Content } = Layout;

var defDate;
class TimeTable extends Component {
  state = { value: moment(new Date()), datacheck: {}, timetable: [] };

  onChange = async (e, val) => {
    const {datacheck, timetable} = this.state;
    const fieldName = (val === "M")? defDate + '_M' : defDate + '_E';
    datacheck[fieldName] = e.target.checked;
    let objData = timetable.filter(i => moment(new Date(i.date_f)).format('YYYY-MM-DD') === defDate)[0];
    if(objData === undefined) {
      objData = {
        timetbl_id_f: 0,
        user_id_f: 1,
        date_f: defDate,
        is_morning_f: datacheck[defDate + '_M'],
        is_evening_f: datacheck[defDate + '_E']        
      };
    } else {
      (val === "M")? objData.is_morning_f = e.target.checked : objData.is_evening_f = e.target.checked;
    }
    // await this.props.saveTimeTable(objData);
    console.log("Save!" + JSON.stringify(objData));
    this.setState({
      datacheck,
    });
  };

  dateCellRender = (value) => {
    const {datacheck} = this.state;
    let dateval = value.format('YYYY-MM-DD');
    const fieldNameM = dateval + '_M';
    const fieldNameE = dateval + '_E';
    // console.log("dateval " + JSON.stringify(dateval));
    return (
      <div className="mb-3">
        <div>
        <Checkbox checked={datacheck[fieldNameM]} onChange={(e)=>this.onChange(e, "M")}> M </Checkbox>
        </div>
        <div>
        <Checkbox checked={datacheck[fieldNameE]} onChange={(e)=>this.onChange(e, "E")}> E </Checkbox>
        </div>        
      </div>
    );
  };

  onSelect = (value) => {
    defDate = value.format('YYYY-MM-DD');
  };

  async componentDidMount() {
    await this.props.getTimeTblList();
    const timetable = this.props.timetable.collection_f === undefined ? [] : this.props.timetable.collection_f;
    let obj_timetable = {};
    timetable.map(i => {
      const tempM = moment(new Date(i.date_f)).format('YYYY-MM-DD') + '_M';
      const tempE = moment(new Date(i.date_f)).format('YYYY-MM-DD') + '_E';
      return (
        obj_timetable = {
          ...obj_timetable,
          [tempM]: i.is_morning_f,
          [tempE]: i.is_evening_f,
        }
      );
    });
    this.setState({datacheck: obj_timetable, timetable});
  }

  render() {
    return (
      <Content style={{ margin: "15px 5%" }}>
        <div>
          <div className="text-center"><h5 style={{color: "rgb(24, 144, 255)"}}>Time Table</h5></div>
          <Button type="primary" style={{background: "blue",borderColor: "blue"}}> <MenuOutlined className="mr-1" />Time Table List</Button>
          <Calendar
            dateCellRender={this.dateCellRender}
            onSelect={this.onSelect}
          />
          <hr style={{marginTop: "0px", paddingBottom: "40px"}}/>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = ({ timetable }) => {
	return { timetable };
};

export default connect( mapStateToProps, { getTimeTblList, getTimeTblByID, saveTimeTable, deleteTimeTable })(TimeTable);
