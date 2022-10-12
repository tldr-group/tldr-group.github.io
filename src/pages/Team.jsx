import React, { Component } from "react";
import Person from '../components/person.jsx'
import sam from '../assets/image12.jpeg'
import samfur from '../assets/sam-fur.jpeg'
import steve from '../assets/Steve_Kench.png'
import stevefur from '../assets/steve-fur.png'
import amir from '../assets/image11.png'
import amirfur from '../assets/amir-fur.jpeg'
import liam from '../assets/image9.png'
import liamfur from '../assets/liam-fur.jpeg'
import isaac from '../assets/isaac.png'
import isaacfur from '../assets/isaac-fur.jpeg'
import andrea from '../assets/image7.png'
import andreafur from '../assets/andrea-fur.jpeg'
// import dominic from '../assets/image-dom.png'
// import dominicfur from '../assets/dom-fur.jpeg'
// import owen from '../assets/owen.JPG'
// import owenfur from '../assets/owen-fur.jpeg'
// import linwei from '../assets/Linwei.jpg'
// import linweifur from '../assets/linwei-fur.jpeg'


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

            <div>
                
            </div>
            
            <div className='row no-gutters'>
            <div className='project offset-lg-1 col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name='Sam Cooper' title='Group leader' body='Sam is the leader of the TLDR group and an associate professor in the Dyson School of Design Engineering at Imperial College London.'
                        link='https://www.imperial.ac.uk/people/samuel.cooper' twitter_link='https://twitter.com/camsooper' img={sam} img_fur={samfur}/>
            </div>
            <div className='project col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name='Steve Kench' title='PhD student' body='Steve is a Faraday PhD student working on developing machine learning methods for material science applications. His research focuses on the use of generative adversarial nets to explore and optimise cathode microstructures.'
                        link='https://www.imperial.ac.uk/people/s.kench19' twitter='no-twitter' img={steve} img_fur={stevefur}/>
                        </div>
            <div className='project col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name='Liam Yasin' title='PhD student' body='Liam is a PhD researcher working on extending the lifetime of Solid Oxide Fuel Cells (SOFCs) by investigating degradation processes at the cathode-electrolyte interface. His work involves combining experimental methods to trace oxygen diffusion across various types of layered half-cells and numerical modelling to better understand the material properties of these systems.'
                        link='https://www.imperial.ac.uk/people/liam.yasin15' twitter='no-twitter' img={liam} img_fur={liamfur}/>
        </div>

            <div className='project offset-sm-0 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name='Isaac Squires' title='PhD student' body='Isaac is a PhD student applying machine learning and software development to build tools that aid the design and optimisation of next generation battery materials.'
                        link='https://www.imperial.ac.uk/people/i.squires20' twitter_link='https://twitter.com/isaacsquires5' img={isaac} img_fur={isaacfur}/></div>
            <div className='project offset-sm-0 offset-lg-0 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name='Amir Dahari' title='PhD student' body='Amir is a PhD student working on super resolution techniques for microstructure imaging using Generative Adversarial Networks.'
                        link='https://github.com/amirDahari1' twitter='no-twitter' img={amir} img_fur={amirfur}/></div>


            </div>

            {/* <div className='row no-gutters'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>MSc Students</h1>
            </div>
            </div>
            
            <div className='row no-gutters'>

            <div className='project offset-lg-3 col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name="Owen O'Connor" title='MSc student' body='Owen is using machine learning for energy load forecasting.'
                        link='https://www.imperial.ac.uk/people/liam.yasin15' twitter='no-twitter' img={owen} img_fur={owenfur}/>
            </div>

            <div className='project col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name="Linwei Li" title='MSc student' body="Linwei's project is looking at building new machine learning driven segmentation tools for microstructural image data."
                        link='https://www.imperial.ac.uk/people/liam.yasin15' twitter='no-twitter' img={linwei} img_fur={linweifur}/>
            </div>

            <div className='project offset-lg-0 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center'>
            <Person name="Dominic Williamson" title='MSc student' body="Dominic's project is exploring transfer learning and canonical kernels for GANs trained on microstructural image data."
                        link='https://www.imperial.ac.uk/people/liam.yasin15' twitter='no-twitter' img={dominic} img_fur={dominicfur}/>
            </div>


            </div> */}

            <div className='row no-gutters'>
            <div className='project col-lg-12 col-sm-12 col-md-12 text-center'>
            <h1 className='team-title'>Former Team Members</h1>
            </div>
            </div>
            
            <div className='row no-gutters'>
                <div className='project offset-lg-5 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center'>
                <Person name="Andrea Gayon-Lombardo" title='Former PhD student' body="Andrea completed her PhD in early 2021, with a thesis entitled 'Machine learning and simulation for the optimisation and characterisation of electrodes for batteries.' In addition to developing the Pores for Thought GAN framework, Andrea also developed pore network models for redox flow batteries."
                        link='https://www.imperial.ac.uk/people/liam.yasin15' twitter='no-twitter' img={andrea} img_fur={andreafur}/>
                </div>
            </div>

            </div>
      )
    }
}

export default Team
