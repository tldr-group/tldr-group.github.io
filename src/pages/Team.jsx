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
import lei_ge from "../assets/lei_ge.jpg";
import lei_ge_fur from "../assets/lei_ge.jpg";
import rowena from "../assets/rowena.jpg";
import rowena_fur from "../assets/rowena.jpg";
import nina from "../assets/nina.jpg";
import nina_fur from "../assets/nina.jpg";



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
          <div className="project offset-lg-3 col-lg-2 col-sm-12 col-md-6 text-center">
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
              name="Isaac Squires"
              title="PhD student"
              body="Isaac is a PhD student applying machine learning and software development to build tools that aid the design and optimisation of next generation battery materials."
              link="https://www.imperial.ac.uk/people/i.squires20"
              twitter_link="https://twitter.com/isaacsquires5"
              img={isaac}
              img_fur={isaacfur}
            />
          </div>
          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
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
          <div className="project offset-sm-0 offset-lg-3 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Ronan Docherty"
              title="PhD student"
              body="Ronan is a PhD student working on deep learning segmentation techniques."
              link="https://profiles.imperial.ac.uk/ronan.docherty18"
              twitter="no-twitter"
              img={ronan}
              img_fur={ronan_fur}
            />
          </div>


          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
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

          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Lei Ge"
              title="PhD student"
              body="Lei Ge is a PhD student working on integrating LLMs into the scientific workflow."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={lei_ge}
              img_fur={lei_ge_fur}
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
          <div className="project offset-sm-0 offset-lg-3 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Steve Kench"
              title="Former PhD student and PDRA"
              body="Steve finished his Faraday-funded PhD in 2024 with the thesis 'Machine learning for battery electrode characterisation and optimisation', focussing on the use of generative adversarial nets to explore and optimise cathode microstructures. He continues this work as the CTO of the spin-out Polaron AI, which he co-founded with Isaac and Sam."
              link="https://polaron.ai/"
              twitter="no-twitter"
              img={steve}
              img_fur={stevefur}
            />
          </div>

          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Liam Yasin"
              title="Former PhD student"
              body="Liam completed his PhD in 2024 with his thesis, 'Modelling diffusion across solid-solid interfaces in electroceramic materials'. In it he combined experimental methods to trace oxygen diffusion across various types of layered half-cells with numerical modelling to better understand their material properties."
              link="https://www.imperial.ac.uk/people/liam.yasin15"
              twitter="no-twitter"
              img={liam}
              img_fur={liamfur}
            />
          </div>
          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Sam Hair"
              title="Former PhD student"
              body="Sam completed his PhD in 2023, with a thesis entitled 'Beyond slurry cast: structured electrodes by design'. In it he motivated the use of laser patterning on monolithic graphite sheets to produce high energy density cells. He now works as an engineering consultant at TTP PLC."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={samh}
              img_fur={samh_fur}
            />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="project offset-sm-0 offset-lg-2 offset-md-0 col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Ruimin Song"
              title="Former Visiting PhD student"
              body="Ruimin was a PhD student working on developing machine learning methods for dimensionality expansion of EBSD data. Specifically, the research focused on using Generative Adversarial Networks (GANs) to produce plausible 3D EBSD data of particles from a single 2D slice."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={ruimin}
              img_fur={ruimin_fur}
            />
          </div>

          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
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

          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Rowena Brugge"
              title="Former PDRA"
              body="Rowena Brugge joined the TLDR group in 2019 to develop isotropic methods for the characterisation of solid state battery materials. She then went to work at the Cambridge battery start-up Nyobolt."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={rowena}
              img_fur={rowena_fur}
            />
          </div>

          <div className="project col-lg-2 col-sm-12 col-md-6 text-center">
            <Person
              name="Nina Meddings"
              title="Former PDRA"
              body="Nina joined the TLDR group in 2018 to develop isotropic methods for the characterisation of solid state battery materials, sponsored by the Faraday institution. She then went to work as a Senior Cell Engineer at Dyson."
              link="https://www.imperial.ac.uk/people/"
              twitter="no-twitter"
              img={nina}
              img_fur={nina_fur}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
