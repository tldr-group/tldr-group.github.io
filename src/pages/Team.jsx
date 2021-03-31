import React, { Component } from "react";
import sam from '../assets/image12.jpeg'
import steve from '../assets/image8.png'
import amir from '../assets/image11.png'
import liam from '../assets/image9.png'
import isaac from '../assets/image10.png'
import andrea from '../assets/image7.png'
import './team.css'

class Team extends Component {
    render() {
      return (
        <div className=''>
            <div className='row'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>Core Team</h1>
            </div>
            </div>
            
            <div className='row'>
                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={sam}></img>
                    <h1 className='project-title m-2'>Sam Cooper</h1>
                    <p className='project-body m-4'>Sam...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={steve}></img>
                    <h1 className='project-title m-2'>Steve Kench</h1>
                    <p className='project-body m-4'>Steve...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={liam}></img>
                    <h1 className='project-title m-2'>Liam Yasin</h1>
                    <p className='project-body m-4'>Liam...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            <div className='row no-gutters'>
                <div className='project offset-lg-2 col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={isaac}></img>
                    <h1 className='project-title m-2'>Isaac Squires</h1>
                    <p className='project-body m-4'>Isaac...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={amir}></img>
                    <h1 className='project-title m-2'>Amir Dahari</h1>
                    <p className='project-body m-4'>Amir...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            <div className='row'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>MSc Students</h1>
            </div>
            </div>
            
            <div className='row'>
                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    {/* <img className='project-img m-4' src={sam}></img> */}
                    <h1 className='project-title m-2'>Owen O'Connor</h1>
                    <p className='project-body m-4'>Owen...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    {/* <img className='project-img m-4' src={steve}></img> */}
                    <h1 className='project-title m-2'>Linwei Li</h1>
                    <p className='project-body m-4'>Linwei...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    {/* <img className='project-img m-4' src={liam}></img> */}
                    <h1 className='project-title m-2'>Dominic Williamson</h1>
                    <p className='project-body m-4'>Dominic...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            <div className='row'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>Old Team Members</h1>
            </div>
            </div>
            
            <div className='row'>
                <div className='project offset-lg-4 col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={andrea}></img>
                    <h1 className='project-title m-2'>Andrea Gayon-Lombardo</h1>
                    <p className='project-body m-4'>Andrea...</p>
                    <a className='project-link fill-dark p-2' href="">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            </div>
      )
    }
}

export default Team