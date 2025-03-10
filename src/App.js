import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Showprojects from './components/ShowProjects/Showprojects';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Callback from './components/Callback';
import AddNewProject from "./components/AddNewProject/AddNewProject";
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";
import { GlobalStyles } from "./theme.js";
import { Switch as ToggleSwitch } from "antd";
import ContactUs from './components/ContactUs/contactus';
import TrendingProjects from './components/TrendingProjects/TrendingProjects';

function App()
{
  //Logic for Theme toggler to get dark mode
  const [theme, settheme] = useState("light");
  const styledApp = styled.div;

  const themeToggler = () => {
    theme === "light" ? settheme("dark") : settheme("light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <styledApp className="App">
        <Router>
          <Navbar themeToggler={themeToggler}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Showprojects} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/addnew" component={AddNewProject} />
            <Route exact path="/projectdetails" component={ProjectDetails}/>
            <Route exact path="/contact" component={ContactUs}/>
            <Route exact path="/trendings" component={TrendingProjects}/>
          </Switch>
          <Footer />
        </Router>
      </styledApp>
    </ThemeProvider>
  );
}

export default App;