import React from 'react'

const Login = () =>{

return(

    <section className='Sign In'>
    <div className='container mt-5'>
    <div className="Signup-content">
    
    <div className="Sign In-form">
         <center><h2 className="form-title">Sign In</h2></center>
        <center> <form className='register-form ' id='register-form'>

    <div class="form-group col-md-6">
    <label for="inputAddress">Email</label>
    <input type="email" class="form-control" id="inputAddress" placeholder="abc@gmail.com"/>



   
  


  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Password</label>
    <input type="Password" class="form-control" id="inputAddress" placeholder="............................."/>
    </div>
    <center><button type="submit" class="btn btn-primary">Login</button></center>
  
</form>
</center>
</div>

</div>
</div>
</section>







)
}



export default Login