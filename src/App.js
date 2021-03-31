import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/footer.jsx"
import { ReactComponent as Logo} from './assets/logo-bright-blue-gradient.svg'
import { NavLink } from "react-router-dom"
import './pages/home.css'
import './functions/typewriter.js'
class App extends Component {
    render() {
      return (
          <div className='home'>
        <HashRouter>
          <div>
          <div className='row no-gutters'>
              <div className='offset-lg-1 col-lg-10 col-md-12 col-sm-12 text-center'>
          <div className='logo-container'><NavLink to='/'><Logo/></NavLink></div>
          <NavLink className='title' to='/'><h1 className='title'>tldr</h1></NavLink>
          </div>
          </div>

          <div className='row no-gutters pb-4'>
              <div className='offset-lg-4 col-lg-2 col-md-12 col-sm-12 text-center'>
              <NavLink to='/projects'><h2 className='home-links'>Projects</h2></NavLink>
              </div>
              <div className='offset-lg-0 col-lg-2 col-md-12 col-sm-12 text-center'>
              <NavLink to='/team'><h2 className='home-links'>Team</h2></NavLink>
              </div>
          </div>

          
          <div className="content">
                <Route exact path="/" component={Home}/>
          </div>
          <div className="content">
                <Route exact path="/team" component={Team}/>
          </div>
          <div className="content">
                <Route exact path="/projects" component={Projects}/>
          </div>
          <div className='row no-gutters'>
                  <div className='offset-3 col-6 text-center'>
                    <Footer />
                    </div>
              </div>
          </div>
        </HashRouter>
        </div>
      );
    }
  }
 
export default App;