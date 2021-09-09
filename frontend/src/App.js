import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/common/Navbar/MainNavbar";
import NotFound from "./components/common/Notfound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import "./scss/main.scss";
import PrivateRoutes from "./Private/PrivateRoutes";
import RouteLinks from "./Private/RouteLinks";
import CreatePost from "./components/Create/CreatePost";
import UpperNavbar from "./components/common/Navbar/UpperNavbar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
        </Route>
        <RouteLinks path="/register" exact component={props => <> <Navbar/> <Register/></> } />
        <RouteLinks path="/login" exact component={props => <> <Navbar/> <Login/></> } />
        <PrivateRoutes path="/dashboard" exact  component={props => <> <Navbar/> <Dashboard/></> }/>
        <PrivateRoutes path="/new-post" exact  component={props => <> <UpperNavbar/> <CreatePost/></> }/>
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
