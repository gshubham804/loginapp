import React, { Component } from "react";
import { Link } from "react-router-dom";
import vdo from './Black.mp4';
export default class welcome extends Component {
  render() {
    return (
      <div className="body">
        <div className="welcome">
         
            <video autoPlay loop muted src={vdo}></video>
           
           <div className="content-wrapper">
           <h1>Techphobia</h1>
           <p className="text">Welcome again !</p>
           <div className="login-signup-wrapper">
            <button
              type="button"
              class="btn btn-outline-info btn-welcome btn-lg"
            >
              <Link className="login-button" to="/login">
                Login
              </Link>{" "}
            </button>
            <button
              type="button"
              class="btn btn-outline-info btn-welcome btn-lg"
            >
              <Link className="signup-button" to="/signUpForm">
                Signup
              </Link>
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
