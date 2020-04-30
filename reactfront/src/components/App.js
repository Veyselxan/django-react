import React, {Fragment} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {BrowserRouter as Router , Route, Switch, Redircet} from 'react-router-dom'
import store from "../store";
import Header from './layout/Header'
import Dashboard from "./Blog/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import {loadUser} from '../action/Auth'
import PrivateRoute from './common/PrivateRoute'

import Home from "./Blog/Home";
// optional cofiguration
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,

}

class App extends React.Component {
componentDidMount() {
    store.dispatch(loadUser());
  }
    render() {
        return (
         <Provider store={store}>
           <AlertProvider template={AlertTemplate} {...options}>
              <Router>
               <Fragment>
                    <Header />
                    <Alerts/>
                    <div className="container">
                       <Switch>
                           <Route exact path="/" component={Home} />
                           <PrivateRoute exact path="/adminblog" component={Dashboard} />
                           <Route exact path="/login" component={Login} />
                           <Route exact path="/register" component={Register} />
                       </Switch>
                    </div>
                </Fragment>
               </Router>
           </AlertProvider>
          </Provider>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('app'))