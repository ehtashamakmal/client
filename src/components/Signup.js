import React from 'react'

const Signup = () =>{

return(


    <section className='Signup'>
<div className='container mt-5'>
<div className="Signup-content">

<div className="Signup-form">
     <center><h2 className="form-title">Signup</h2></center>
     <form className='register-form ' id='register-form'>
     <form>
     <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Name"/>
    </div>
   

    <div class="form-group col-md-6">
    <label for="inputAddress">Email</label>
    <input type="email" class="form-control" id="inputAddress" placeholder="abc@gmail.com"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Phone</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="+92 3152143937"/>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">Work</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Software Engineer"/>
  </div>
  <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Confirm Password</label>
      <input type="Password" class="form-control" id="inputCity"/>
    </div>
    
    </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <center><button type="submit" class="btn btn-primary">Sign Up</button></center>
</form>
</form>


















     </form>
</div>


</div>
</div>
    </section>

)
}



export default Signup