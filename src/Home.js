/* eslint-disable no-undef */
import React, { Component } from 'react'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showPassword : false
      }
    }
  render() {
      console.warn(this.state.showPassword)
    return (
       <section className='py-4 container'>
         <div className='row justify-content-center'>
             <div className='col-12 col-md-4 col-ms-8'>
               <div className='input-group mb-3 shadow border rounded'>
                <input className='form-control bg-dark text-light ' 
                type={this.state.showPassword ? "text" : "password"}/>
                <button onClick={() => this.setState({showPassword : !this.state.showPassword})}
                 className='input-group-text bg-dark text-light'
                 >
                {this.state.showPassword ? <ShowIcon /> : <ShowOffIcon />}
                    </button>
               </div>
               
             </div>

             <div className='col-12 col-md-4 col-ms-8'>
               <div className='input-group mb-3 shadow border rounded'>
                <input className='form-control bg-dark text-light ' 
                type={this.state.showPassword ? "text" : "password"}/>
                <button onClick={() => this.setState({showPassword : !this.state.showPassword})}
                 className='input-group-text bg-dark text-light'
                 >
                {this.state.showPassword ? <ShowIcon /> : <ShowOffIcon />}
                    </button>
               </div>
               
             </div>
          
         </div>
       </section>
    )
  }
}
