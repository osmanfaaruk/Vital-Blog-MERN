import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/main.scss";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/common/Navbar/MainNavbar";
import NotFound from "./components/common/Notfound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import PrivateRoutes from "./Private/PrivateRoutes";
import RouteLinks from "./Private/RouteLinks";
import CreatePost from "./components/Create/CreatePost";
import UpperNavbar from "./components/common/Navbar/UpperNavbar";
import EditPost from "./components/Create/EditPost";
import UnderConstruction from "./components/common/UnderConstruction/UnderConstruction";
import EditCoverImage from "./components/Create/EditCoverImage";
import ProfileSetting from "./components/Dashboard/Setting/SettiingsPart/ProfileSetting";
import PasswordSetting from "./components/Dashboard/Setting/SettiingsPart/PasswordSetting";
import Details from "./components/PostDetails/Details";
import Footer from "./components/common/Footer/Footer";




const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
        </Route>
        <Route path="/home/:page" exact>
          <Navbar />
          <Home />
        </Route>
        <Route path="/post/details/:id" exact component={props => <> <Navbar/> <Details/> <Footer/></> } />
        <RouteLinks path="/register" exact component={props => <> <Navbar/> <Register/></> } />
        <RouteLinks path="/login" exact component={props => <> <Navbar/> <Login/></> } />
        <PrivateRoutes path="/dashboard/:page?" exact  component={ props => <> <UpperNavbar/> <Dashboard/></> }/>
        <PrivateRoutes path="/new-post" exact  component={props => <> <UpperNavbar/> <CreatePost/></> }/>
        <PrivateRoutes path="/me/setting" exact  component={props => <> <UpperNavbar/> <UnderConstruction/></> }/>
        <PrivateRoutes path="/edit/:id" exact  component={props => <> <UpperNavbar/> <EditPost/></> }/>
        <PrivateRoutes path="/edit/cover-photo/:id" exact  component={props => <> <UpperNavbar/> <EditCoverImage/></> }/>
        <PrivateRoutes path="/me/profile" exact  component={props => <> <UpperNavbar/> <ProfileSetting/></> }/>
        <PrivateRoutes path="/me/password" exact  component={props => <> <UpperNavbar/> <PasswordSetting/></> }/>
        <PrivateRoutes path="/test" exact  component={props => <> <UpperNavbar/> <Footer/></> }/>
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
