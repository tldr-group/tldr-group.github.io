import React, { Component } from "react";
import taufactor from '../assets/tau_example.png'
import superres from '../assets/super-res-icon.png'
import slicegan from '../assets/website_slicegan_img.png'
import tracex from '../assets/TraceX_logo.png'
import './projects.css'

class Projects extends Component {
    render() {
      return (
        <div className=''>
            <div className='row m-4'>
                <div className='project offset-lg-1 col-lg-5 col-sm-12 col-md-12 text-center'>
                <div className="project fill-light  m-4">
                    <img className='project-img m-4' src={taufactor}></img>
                    <h1 className='project-title m-2'>TauFactor</h1>
                    <p className='project-body m-4'>TauFactor is an application for calculating tortuosity factors from tomographic data. TauFactor uses CuPy_ which is an implementation of NumPy-compatible multi-dimensional array on CUDA.</p>
                    <a className='project-link fill-dark p-2' href="https://github.com/tldr-group/taufactor">Find out more</a>
                    <div class="span mb-4">...</div>
                </div>

                <div className="project fill-light  m-4">
                    <img className='project-img m-4 pt-4' src={tracex}></img>
                    <h1 className='project-title m-2'>TraceX</h1>
                    <p className='project-body m-4'>TraceX is a MATLAB application designed to consistently allow the fitting of Isotope Exchange Depth Profile data from Secondary Ion Mass Spectrometry measurements. This allows the extraction of materials properties such as the tracer diffusion coefficient and the surface exchange coefficient.</p>
                    <a className='project-link fill-dark p-2' href="https://github.com/tldr-group/TraceX-2.0">Find out more</a>
                    <div class="span mb-4">...</div>
                </div>


                </div>

                <div className='project col-lg-5 col-sm-12 col-md-12 text-center'>
                    <div className="project fill-light  m-4">
                    <img className='project-img m-4' src={slicegan}></img>
                    <h1 className='project-title m-2'>SliceGAN</h1>
                    <p className='project-body m-4'>SliceGAN is a machine learning algorithm used to generate 3D datasets from a single cross sectional 2D slice.</p>
                    <a className='project-link fill-dark p-2' href="https://github.com/stke9/SliceGAN">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>

                    <div className="project fill-light  m-4">
                    <img className='project-img m-4' src={superres}></img>
                    <h1 className='project-title m-2'>Super-Res</h1>
                    <p className='project-body m-4'>Super resolution technique that takes as input low-res 3D volume and a high-res multi-phase 2D micrograph and outputs a high-res 3D multi-phase volume.</p>
                    <a className='project-link fill-dark p-2' href="https://github.com/tldr-group/SuperRes">Find out more</a>
                    <div class="span mb-4">...</div>
                    </div>


                </div>

            </div>


            </div>


            

            
      )
    }
}

export default Projects

// {/* <div class="row">
//         <div class="col">
//         <button class="btn btn-dark" data-toggle="collapse" href="#TauFactor" role="button" aria-expanded="false" aria-controls="TauFactor">TauFactor</button>
//             <div class="collapse multi-collapse" id="TauFactor">
//                 <div class='card'>
//             <img class="card-img-top mx-auto" src={taufactor} alt="TauFactor" />
//             <div class="card-body">
//             TauFactor is an application for calculating tortuosity factors from tomographic data. TauFactor uses CuPy_ which is an implementation of NumPy-compatible multi-dimensional array on CUDA.
//                 <a href="https://github.com/tldr-group/taufactor" class="btn btn-dark card-link">Find out more</a>
//             </div>
//             </div>
//             </div>
//         </div>
//         <div class="col">
//         <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#SliceGAN" aria-expanded="false" aria-controls="SliceGan">SliceGAN</button>
//             <div class="collapse multi-collapse" id="SliceGAN">
//             <div class="card card-body">
//             <a href="https://github.com/tldr-group/" class="btn btn-dark card-link">Find out more</a>
//             </div>
//             </div>
//         </div>
//         </div>
//         <div class="row">
//         <div class="col">
//             <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#TraceX" aria-expanded="false" aria-controls="TraceX">TraceX</button>
//             <div class="collapse multi-collapse" id="TraceX">
//             <div class="card card-body">
//             <a href="https://github.com/tldr-group/" class="btn btn-dark card-link">Find out more</a>
//             </div>
//             </div>
//             </div>
//             <div class="col">
//             <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#SuperRes" aria-expanded="false" aria-controls="SuperRes">SuperRes</button>
//             <div class="collapse multi-collapse" id="SuperRes">
//             <div class="card card-body">
//             <a href="https://github.com/tldr-group/" class="btn btn-dark card-link">Find out more</a>
//             </div>
//             </div>
//             </div>
//         </div>

//         <div class="row">
//         <div class="col">
//             <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#Pores4Thought" aria-expanded="false" aria-controls="Pores4Thought">Pores4Thought</button>
//             <div class="collapse multi-collapse" id="Pores4Thought">
//             <div class="card card-body">
//             <a href="https://github.com/camsooper/pores4thought" class="btn btn-dark card-link">Find out more</a>
//             </div>
//             </div>
//             </div>
//             </div> */}
