import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home.jsx";

class App extends Component {
    render() {
      return (
          <div className='home'>
        <HashRouter>
          <div>
              <div className='row'>
                  <div className='offset-3 col-6 text-center'>
                    {/* <Navbar /> */}
                    </div>
              </div>
            
          {/* <Title />  */}
          <div className="content">
                <Route exact path="/" component={Home}/>
          </div>
          </div>
        </HashRouter>
        </div>
      );
    }
  }
 
export default App;