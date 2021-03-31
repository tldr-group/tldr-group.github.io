import React, { Component } from "react";
import sam from '../assets/image12.jpeg'
import steve from '../assets/image8.png'
import amir from '../assets/image11.png'
import liam from '../assets/image9.png'
import isaac from '../assets/image10.png'
import andrea from '../assets/image7.png'
import twitterFill from '@iconify-icons/akar-icons/twitter-fill';
import { Icon } from '@iconify/react';


import './team.css'

class Team extends Component {
    render() {
      return (
        <div className=''>
            <div className='row no-gutters'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>Core Team</h1>
            </div>
            </div>
            
            <div className='row no-gutters'>
                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={sam}></img>
                    <h1 className='project-title m-2'>Sam Cooper</h1>
                    <p className='project-body m-4'>Sam is the leader of the TLDR group and an associate professor in the Dyson School of Design Engineering at Imperial College London.</p>
                    <a className='project-link fill-dark p-2' href="https://www.imperial.ac.uk/people/samuel.cooper">Find out more</a>
                    <div className='mt-4'><a className='team-icon' href='https://twitter.com/camsooper'><Icon id='icon' icon={twitterFill} width='40px' /></a>
                    </div>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={steve}></img>
                    <h1 className='project-title m-2'>Steve Kench</h1>
                    <p className='project-body m-4'>Steve is a Faraday PhD student working on developing machine learning methods for material science applications. His research focuses on the use of generative adversarial nets to explore and optimise cathode microstructures.</p>
                    <a className='project-link fill-dark p-2' href="https://www.imperial.ac.uk/people/s.kench19">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={liam}></img>
                    <h1 className='project-title m-2'>Liam Yasin</h1>
                    <p className='project-body m-4'>Liam is a PhD researcher working on extending the lifetime of Solid Oxide Fuel Cells (SOFCs) by investigating degradation processes at the cathode-electrolyte interface. His work involves combining experimental methods to trace oxygen diffusion across various types of layered half-cells and numerical modelling to better understand the material properties of these systems. </p>
                    <a className='project-link fill-dark p-2' href="https://www.imperial.ac.uk/people/liam.yasin15">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            <div className='row no-gutters'>
                <div className='project offset-lg-2 col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={isaac}></img>
                    <h1 className='project-title m-2'>Isaac Squires</h1>
                    <p className='project-body m-4'>Isaac is a PhD student applying machine learning and software development to build tools that aid the design and optimisation of next generation battery materials. </p>
                    <a className='project-link fill-dark p-2' href="https://www.imperial.ac.uk/people/i.squires20">Find out more</a>
                    <div className='mt-4'><a className='team-icon' href='https://twitter.com/isaacsquires5'><Icon id='icon' icon={twitterFill} width='40px' /></a></div>
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={amir}></img>
                    <h1 className='project-title m-2'>Amir Dahari</h1>
                    <p className='project-body m-4'>Amir is a Research Assistant working on super resolution techniques for microstructure imaging using Generative Adversarial Networks.</p>
                    {/* <a className='project-link fill-dark p-2' href="">Find out more</a> */}
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            <div className='row no-gutters'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>MSc Students</h1>
            </div>
            </div>
            
            <div className='row no-gutters'>
                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    {/* <img className='project-img m-4' src={sam}></img> */}
                    <h1 className='project-title m-2'>Owen O'Connor</h1>
                    <p className='project-body m-4'>Owen is using machine learning for energy load forecasting.</p>
                    {/* <a className='project-link fill-dark p-2' href="">Find out more</a> */}
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    {/* <img className='project-img m-4' src={steve}></img> */}
                    <h1 className='project-title m-2'>Linwei Li</h1>
                    <p className='project-body m-4'>Linwei's project is looking at building new machine learning driven segmentation tools for microstructural image data.</p>
                    {/* <a className='project-link fill-dark p-2' href="">Find out more</a> */}
                    <div class="span mb-4">...</div>
                    </div>
                </div>

                <div className='project col-lg-4 col-sm-12 col-md-12 text-center'>
                <div className='person fill-light m-4 '>
                    {/* <img className='project-img m-4' src={liam}></img> */}
                    <h1 className='project-title m-2'>Dominic Williamson</h1>
                    <p className='project-body m-4'>Dominic's project is exploring transfer learning and canonical kernels for GANs trained on microstructural image data.</p>
                    {/* <a className='project-link fill-dark p-2' href="">Find out more</a> */}
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            <div className='row no-gutters'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>Former Team Members</h1>
            </div>
            </div>
            
            <div className='row no-gutters'>
                <div className='project offset-lg-4 col-lg-4 col-sm-12 col-md-12 text-center'>
                    <div className='person fill-light m-4 '>
                    <img className='project-img m-4' src={andrea}></img>
                    <h1 className='project-title m-2'>Andrea Gayon-Lombardo</h1>
                    <p className='project-body m-4'>Andrea completed her PhD in early 2021, with a thesis entitled "Machine learning and simulation for the optimisation and characterisation of electrodes for batteries." In addition to developing the Pores for Thought GAN framework, Andrea also developed pore network models for redox flow batteries.</p>
                    {/* <a className='project-link fill-dark p-2' href="">Find out more</a> */}
                    <div class="span mb-4">...</div>
                    </div>
                </div>

            </div>

            </div>
      )
    }
}

export default Team