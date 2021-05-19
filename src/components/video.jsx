import React, { Component } from "react";
import { Icon } from '@iconify/react';
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import './person.css'
import moreCircle20Regular from '@iconify-icons/fluent/more-circle-20-regular';
import addCircle32Regular from '@iconify-icons/fluent/add-circle-32-regular';
import battery020Regular from '@iconify-icons/fluent/battery-0-20-regular';


class Video extends Component {
    render() {
      return (
                
            <div className='person fill-light m-4 '>
                    <h1 className='project-title m-2'>{this.props.title}</h1>
                    <iframe className='p-4' width="100%" height="315" src={this.props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
      )
    }
}

export default Video