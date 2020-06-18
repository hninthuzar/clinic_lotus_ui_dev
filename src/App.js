import React, { Component } from 'react';
import { IntlProvider } from "react-intl";
import './App.css';
import messages from "./l10n/lanmessage";
import { BrowserRouter } from "react-router-dom";
import NavBar from './component/common/navBar';
import HomePage from './component/homePage';
import UserAccount from "./component/userAccount";
import LoginForm from './component/loginForm';
import Appointment from './component/appointment';
import TimeTable from './component/timeTable';
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    lang: "en",
  };
  changeLang = () => {
    let lang = this.state.lang;
    if (lang === "en") lang = "bm";
    else lang = "en";
    this.setState({ lang });
  };
  render() { 
    const { lang } = this.state;
    const user = false;
    if(user) {
      return (
        <IntlProvider locale={lang} messages={messages[lang]}>
          <BrowserRouter>
            <div>          
              <Switch>
                <Route path="/login" exact component={LoginForm}></Route>
                <Redirect to="/login" />
              </Switch>
            </div>
          </BrowserRouter>
        </IntlProvider>
      );
    }    
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <BrowserRouter>
          <div>          
            <NavBar changeLang={this.changeLang}></NavBar>
            <Switch>
              <Route path="/login" exact component={LoginForm}></Route>
              <Route path="/home" exact component={HomePage}></Route>
              <Route path="/user_account" exact component={UserAccount}></Route>
              <Route path="/home/appointment" exact component={Appointment}></Route>
              <Route path="/home/time_table" exact component={TimeTable}></Route>
              <Redirect to="/home" />
            </Switch>
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}
 
export default App;
