import React, { Component } from "react";
import './projects.css'
import taufactor from '../assets/tau_example.png'

class Projects extends Component {
  render() {
    return (
      <div>
<div class="row">
  <div class="col">
  <button class="btn btn-dark" data-toggle="collapse" href="#TauFactor" role="button" aria-expanded="false" aria-controls="TauFactor">TauFactor</button>
    <div class="collapse multi-collapse" id="TauFactor">
        <div class='card'>
    <img class="card-img-top mx-auto" src={taufactor} alt="TauFactor" />
      <div class="card-body">
        TauFactor is ... Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        <a href="#" class="btn btn-dark card-link">Find out more</a>
      </div>
    </div>
    </div>
  </div>
  <div class="col">
  <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#SliceGAN" aria-expanded="false" aria-controls="SliceGan">SliceGAN</button>
    <div class="collapse multi-collapse" id="SliceGAN">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  </div>
  <div class="row">
  <div class="col">
      <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#TraceX" aria-expanded="false" aria-controls="TraceX">TraceX</button>
      <div class="collapse multi-collapse" id="TraceX">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
      </div>
      <div class="col">
      <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#SuperRes" aria-expanded="false" aria-controls="SuperRes">SuperRes</button>
      <div class="collapse multi-collapse" id="SuperRes">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
      </div>
</div>
          
      </div>
    );
  }
}
 
export default Projects;