import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class signup extends Component {
    constructor(){
        super();
        this.state={
          username:''
        }
      }
      handleChanged = (event) => {
        this.setState({username:event.target.value});
      }
    

      handleFormSubmission=() =>{
        const { username} = this.state;
        localStorage.setItem('username', JSON.stringify(username));
      }

  render() {
    return (
      <div className='signup-main'>

<div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
        <div class="form-group">
			<div class="input-group">
				<input type="text" class="form-control" value={this.state.username} onChange={this.handleChanged} name="username" placeholder="Username" required="required"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<input type="email" class="form-control" name="email" placeholder="Email Address" required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
			</div>
        </div>
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button onClick={this.handleFormSubmission} type="submit" class="btn btn-primary btn-lg "><Link className='signuppage-button' to='/logged'>Sign Up</Link></button>
        </div>
	<div class="text-center">Already have an account? <a href="#">Login here</a></div>
    </form>
</div>

      </div>
    )
  }
}
