import React, { Component } from "react";
import { Icon } from '@iconify/react';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import './person.css'
import moreCircle20Regular from '@iconify-icons/fluent/more-circle-20-regular';
import addCircle32Regular from '@iconify-icons/fluent/add-circle-32-regular';
import battery020Regular from '@iconify-icons/fluent/battery-0-20-regular';


class Person extends Component {
    render() {
      return (
                
            <div className='person fill-light m-4 '>
                <img className='project-img mt-4' src={this.props.img}
                    onMouseOver={e => (e.currentTarget.src = this.props.img_fur)}
                    onMouseOut={e => (e.currentTarget.src = this.props.img)} />
                    <h1 className='project-title m-2'>{this.props.name}</h1>
                    <h1 className='person-subtitle m-2'>{this.props.title}</h1>
                    <div className='reveal'>
                    <Icon id='icon' icon={addCircle32Regular} width='40px' />
                    <Icon id='hidden' icon={battery020Regular} width='40px' />
                    <div className='hide'>
                    <p className='project-body m-2 mb-4'>{this.props.body}</p>
                    <a className='project-link fill-dark p-2 mt-4' href={this.props.link}>Find out more</a>
                    <div className='mt-4' ><a className='team-icon' id={this.props.twitter} href={this.props.twitter_link}><Icon id='twitter' icon={twitterFill} width='40px' /></a>
                    </div>
                    </div>
                    </div>
                </div>
      )
    }
}

export default Person