import React, { Component } from "react";
import { Icon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import emailIcon from '@iconify-icons/akar-icons/envelope';
import { NavLink } from "react-router-dom"
import './footer.css'

class Footer extends Component {
    render() {
      return (
        <div className='container'>
             <div className='row'>
          <div className='offset-lg-1 col-lg-10 col-md-12 col-sm-12 text-center'>
              <div className='icon-container'>
              <span className='icon-footer'><a href='https://github.com/tldr-group'><Icon id='' icon={githubFill} width='40px'/></a></span>
              <span className='icon-footer'><a href='https://twitter.com/tldr_group'><Icon id='' icon={twitterFill} width='40px' /></a></span>
              <span className='icon-footer'><a href='mailto:samuel.cooper@imperial.ac.uk'><Icon icon={emailIcon} width='40px' /></a></span>
              </div>
              </div>
            </div>
            <div className='row'>
          <div className='offset-lg-1 col-lg-10 col-md-12 col-sm-12 text-center'>
            <p className='footer-text'>We use Google Analytics. <NavLink to='privacy-policy'>Privacy Policy</NavLink></p>
              </div>
            </div>

            </div>
      )
    }
}

export default Footer