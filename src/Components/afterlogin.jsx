import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className='afterlogin'>
          <div className='afterlogin-p'>Hii ! { JSON.parse(localStorage.getItem("user"))}</div>
      </div>
    )
  }
}
