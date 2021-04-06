import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import './home.css'

class Home extends Component {
  render() {
    return (
      <div>

          <div className='row no-gutters p-2 mt-4'>
              <div className='offset-lg-3 col-lg-6 col-md-12 col-sm-12 p-4 mb-4 fill-light text-center'>
                <p className='home-body'>
                The Tools for Learning, Design and Research (tldr) group is a multidisciplinary team based in the Dyson school of Design engineering at Imperial College London. With activities spanning online education, generative design and simulation-based characterisation, this team is brought together by a common theme of creating tool making. As such, we strive to produce easy to use, high quality, open source code and publish supporting content that enables others to make use of it.
                </p>
              </div>
          </div>
          <div className='row no-gutters p-2 mt-4'>
              <div className='offset-lg-3 col-lg-6 col-md-12 col-sm-12 p-4 mb-4 text-center'>
              <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/tldr_group?ref_src=twsrc%5Etfw">Tweets by tldr_group</a>
              </div>
          </div>
            
          
      </div>
    );
  }
}
 
export default Home;