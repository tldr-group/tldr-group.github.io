import React, { Component } from "react";
import { ReactComponent as Logo} from '../assets/logo-bright.svg'
import './home.css'
import '../functions/typewriter.js'
import Projects from '../components/projects.jsx'
import Team from '../components/team.jsx'
import { Icon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import emailIcon from '@iconify-icons/akar-icons/envelope';

class Home extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='offset-lg-1 col-lg-10 col-md-12 col-sm-12 text-center'>
                <div className='logo-container'><Logo/></div>
                <h1 className='title'>tldr</h1>
                <div className='row'>
              <div className='offset-lg-1 col-lg-5 col-md-12 col-sm-12 text-center'>
              <h2 className='subtitle'>Projects</h2>
                <Projects />
              </div>
              <div className='col-lg-5 col-md-12 col-sm-12 text-center'>
              <h2 className='subtitle purple'>Team</h2>
                <Team />
              </div>
              </div>
              </div>
          </div>
          <div className='row'>
          <div className='offset-lg-1 col-lg-10 col-md-12 col-sm-12 text-center'>
              <div className='icon-container'>
              <span className='icon'><a href='https://github.com/tldr-group'><Icon id='icon' icon={githubFill} width='40px'/></a></span>
              <span className='icon'><a href='https://twitter.com/tldr_group'><Icon id='icon' icon={twitterFill} width='40px' /></a></span>
              <span className='icon'><a href='mailto:samuel.cooper@imperial.ac.uk'><Icon icon={emailIcon} width='40px' /></a></span>
              </div>
              </div>
            
          </div>
          
      </div>
    );
  }
}
 
export default Home;