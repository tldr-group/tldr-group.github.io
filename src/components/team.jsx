import React, { Component } from "react";
import './projects.css'
import './team.css'

class Projects extends Component {
  render() {
    return (
      <div>
<div class="row">
  <div class="col">
  <button class="btn btn-dark team team-lead" data-toggle="collapse" href="#Sam" role="button" aria-expanded="false" aria-controls="Sam">Sam Cooper</button>
    <div class="collapse multi-collapse" id="Sam">
      <div class="card card-body">
        TauFactor is ... Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
      <button class="btn btn-dark team" type="button" data-toggle="collapse" data-target="#AGL" aria-expanded="false" aria-controls="AGL">Andrea Gayon-Lombardo</button>
      <div class="collapse multi-collapse" id="AGL">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
      </div>
  </div>
  <div class="row">
  <div class="col">
  <button class="btn btn-dark team" type="button" data-toggle="collapse" data-target="#Steve Kench" aria-expanded="false" aria-controls="Steve Kench">Steve Kench</button>
    <div class="collapse multi-collapse" id="Steve Kench">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
      <button class="btn btn-dark team" type="button" data-toggle="collapse" data-target="#Liam Yasin" aria-expanded="false" aria-controls="TraceX">Liam Yasin</button>
      <div class="collapse multi-collapse" id="Liam Yasin">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
      </div>
  </div>
  
  <div class="row">
      <div class="col">
      <button class="btn btn-dark team" type="button" data-toggle="collapse" data-target="#Amir Dahari" aria-expanded="false" aria-controls="SuperRes">Amir Dahari</button>
      <div class="collapse multi-collapse" id="Amir Dahari">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
      </div>
      <div class="col">
      <button class="btn btn-dark team" type="button" data-toggle="collapse" data-target="#Isaac Squires" aria-expanded="false" aria-controls="SuperRes">Isaac Squires</button>
      <div class="collapse multi-collapse" id="Isaac Squires">
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