import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () =>{

return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="./Home.js">Dashboard<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="./About.js">Collect Rent</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="./Contact.js">Pay Rent</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="./Login.js">Login</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="./Signup.js">Registeration</a>
      </li>
    </ul>
    
  </div>
</nav>

)
}



export default Navbar