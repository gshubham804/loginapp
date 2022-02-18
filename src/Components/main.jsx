import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class main extends Component {
  constructor(){
    super();
    this.state={
      user:''
    }
  }

  handleChange = (event) => {
    this.setState({user:event.target.value});
   }

  handleFormSubmit=() =>{
    const { user} = this.state;
    localStorage.setItem('user', JSON.stringify(user));
  }
  render() {
    return (
      <div className='login-wrapper'>
      <div class="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">Log in</h2>       
          <div class="form-group">
              <input value={this.state.user} onChange={this.handleChange} type="text" class="form-control" placeholder="Username" required="required"/>
          </div>
          <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" required="required"/>
          </div>

          <div class="clearfix">
              <label class="pull-left checkbox-inline"><input required type="checkbox"/> Remember me </label>
              <a href="#" class="pull-right">Forgot Password?</a>
          </div>

          <div class="form-group">
              <button onClick={this.handleFormSubmit} type="submit" class="btn btn-primary btn-block"><Link className='submit' to='/logged'>Log in</Link></button>
          </div>
                  
      </form>
      <p class="text-center"><a href="#">Create an Account</a></p>
  </div>
  </div>
  
    )
  }
}
