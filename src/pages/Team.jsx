import React, { Component } from "react";
import Person from "../components/person.jsx";
import sam from "../assets/sam.jpg";
import samfur from "../assets/sam_fur.jpg";
import steve from "../assets/steve.jpg";
import stevefur from "../assets/steve_fur.jpg";
import amir from "../assets/amir.jpg";
import amirfur from "../assets/amir_fur.jpg";
import liam from "../assets/liam.jpg";
import liamfur from "../assets/liam_fur.jpg";
import isaac from "../assets/isaac.jpg";
import isaacfur from "../assets/isaac_fur.jpg";
import andrea from "../assets/andrea.jpg";
import andreafur from "../assets/andrea_fur.jpg";
import samh_fur from "../assets/samh_fur.jpg";
import samh from "../assets/samh.jpg";
import ronan_fur from "../assets/ronan_fur.jpg";
import ronan from "../assets/ronan.jpg";
import antonis_fur from "../assets/antonis_fur.jpg";
import antonis from "../assets/antonis.jpg";
import ruimin from "../assets/ruimin.jpg";
import ruimin_fur from "../assets/ruimin_fur.jpg";

import "./team.css";

class Team extends Component {
  render() {
    return (
      <div className="">
        <div className="row no-gutters">
          <div className="project col-lg-12 col-sm-12 col-md-12 text-center">
            <h1 className="team-title">Core Team</h1>
          </div>
        </div>

        <div></div>

        <div className="row no-gutters">
          <div className="project offset-lg-1 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Sam Cooper"
              title="Group leader"
              body="Sam is the leader of the TLDR group and an associate professor in the Dyson School of Design Engineering at Imperial College London."
              link="https://www.imperial.ac.uk/people/samuel.cooper"
              twitter_link="https://twitter.com/camsooper"
              img={sam}
              img_fur={samfur}
            />
          </div>
          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Steve Kench"
              title="PhD student"
              body="Steve is a Faraday PhD student working on developing machine learning methods for material science applications. His research focuses on the use of generative adversarial nets to explore and optimise cathode microstructures."
              link="https://www.imperial.ac.uk/people/s.kench19"
              twitter="no-twitter"
              img={steve}
              img_fur={stevefur}
            />
          </div>
          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Liam Yasin"
              title="PhD student"
              body="Liam is a PhD researcher working on extending the lifetime of Solid Oxide Fuel Cells (SOFCs) by investigating degradation processes at the cathode-electrolyte interface. His work involves combining experimental methods to trace oxygen diffusion across various types of layered half-cells and numerical modelling to better understand the material properties of these systems."
              link="https://www.imperial.ac.uk/people/liam.yasin15"
              twitter="no-twitter"
              img={liam}
              img_fur={liamfur}
            />
          </div>

          <div className="project offset-sm-0 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Isaac Squires"
              title="PhD student"
              body="Isaac is a PhD student applying machine learning and software development to build tools that aid the design and optimisation of next generation battery materials."
              link="https://www.imperial.ac.uk/people/i.squires20"
              twitter_link="https://twitter.com/isaacsquires5"
              img={isaac}
              img_fur={isaacfur}
            />
          </div>
          <div className="project offset-sm-0 offset-lg-0 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Amir Dahari"
              title="PhD student"
              body="Amir is a PhD student working on super resolution techniques for microstructure imaging using Generative Adversarial Networks."
              link="https://www.imperial.ac.uk/people/a.dahari"
              twitter="no-twitter"
              img={amir}
              img_fur={amirfur}
            />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="project offset-sm-0 offset-lg-2 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Ronan Docherty"
              title="PhD student"
              body="Ronan is a PhD student working on deep learning segmentation techniques."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={ronan}
              img_fur={ronan_fur}
            />
          </div>

          <div className="project offset-sm-0 offset-lg-0 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Sam Hair"
              title="PhD student"
              body="Sam is a PhD student working on novel anode architectures."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={samh}
              img_fur={samh_fur}
            />
          </div>

          <div className="project offset-sm-0 offset-lg-0 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Antony Vamvakeros"
              title="Royal Society Industry Fellow"
              body="Antony is a Royal Society Industry Fellow working on machine learning approaches to improve the spatiotemporal resolution of chemical imaging and tomography methods"
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={antonis}
              img_fur={antonis_fur}
            />
          </div>

          <div className="project offset-sm-0 offset-lg-0 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Ruimin Song"
              title="Visiting PhD student"
              body="Ruimin is a PhD student working on developing machine learning methods for status diagnosis and data preprocessing. Specifically, the research focuses on using Generative Adversarial Networks (GANs) to enhance measured data and help diagnose on-site equipment, as well as design power materials."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={ruimin}
              img_fur={ruimin_fur}
            />
          </div>
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

        <div className="row no-gutters">
          <div className="project col-lg-12 col-sm-12 col-md-12 text-center">
            <h1 className="team-title">Former Team Members</h1>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="project offset-sm-0 offset-lg-5 offset-md-3 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Andrea Gayon-Lombardo"
              title="Former PhD student"
              body="Andrea completed her PhD in early 2021, with a thesis entitled 'Machine learning and simulation for the optimisation and characterisation of electrodes for batteries.' In addition to developing the Pores for Thought GAN framework, Andrea also developed pore network models for redox flow batteries."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={andrea}
              img_fur={andreafur}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
