import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
class LiveApicheck extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})      
    }
    handleClick=(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/login',
        {
            email:this.state.email,
            password:this.state.password,
        }
        )
        .then(response=>{
            console.log(response)
            swal('Success',response.data.token,'success')
            
        })
        .catch(err=>{
            // swal('Error!',err.error,'error')
            console.log(err);
        })
    }
    render(){
        return(
            <form method="POST">
                Email: <input type="email" name="email" onChange={this.handleChange}/><br/>
                Password: <input type="password" name="password" onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleClick}/>
            </form>
        )
    }
}
export default LiveApicheck;