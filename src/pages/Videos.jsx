import React, { Component } from "react";
import Video from '../components/video.jsx'
import './projects.css'

class Videos extends Component {
    render() {
      return (
        <div className='videos'>
            <div className='row m-4'>
                <div className='project offset-lg-1 col-lg-5 col-sm-12 col-md-12 text-center'>
                <div className="project fill-light  m-4">
                    <Video url='https://www.youtube.com/embed/gBTOpOBD-Mo' title='SliceGAN Paper Summary' />
                </div>

                </div>

                <div className='project col-lg-5 col-sm-12 col-md-12 text-center'>
                    <div className="project fill-light  m-4">
                        <Video url='https://www.youtube.com/embed/kEKjkr9Vm8Y' title='ShenaniGANs Webinar' />
                    </div>
                    </div>
                </div>
            <div className='row m-4'>
                <div className='project offset-lg-1 col-lg-5 col-sm-12 col-md-12 text-center'>
                <div className="project fill-light  m-4">
                    <Video url='https://www.youtube.com/embed/m9ezkts8gGQ' title='Pores for Thought: STFC Batteries Webinar' />
                </div>

                </div>

                <div className='project col-lg-5 col-sm-12 col-md-12 text-center'>
                    <div className="project fill-light  m-4">
                        <Video url='https://www.youtube.com/embed/edl9I4lnbss' title='Pores for Thought: Energy Futures Lab Webinar' />
                    </div>
                    </div>
                </div>
                <div className='row m-4'>
                <div className='project offset-lg-3 col-lg-6 col-sm-12 col-md-12 text-center'>
                <div className="project fill-light  m-4">
                        <Video url='https://www.youtube.com/embed/LqN_JkTAsNE' title='Dramatic Pores: ARTISTIC Webinar' />
                    </div>

                </div>
                </div>
            </div>



      )
    }
}

export default Videos
