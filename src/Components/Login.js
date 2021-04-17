import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

const API= 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            login_status:false
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleClick=(e)=>{
        e.preventDefault();
        // localStorage.setItem('login',1)
        // sessionStorage.setItem('isLogin',1)
        
        axios.post(API+'',
        JSON.stringify({
         email:this.state.email,
         password:this.state.password   
        }))
        .then(response=>{
            if(response.data.success==1){
                swal('Success',response.data.msg,'success')
                this.setState({login_status:true})
            }else{
                swal('Error',response.data.msg,'error')
            }
        })
        .catch(err=>{
            swal('Error','something went wrong,please try again','error')
        })
    }
    

render(){
    if(this.state.login_status==true){
        return <Redirect to="/dashboard"/>
    }
    return(
        <center>
        <form method="POST">
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="email" onChange={this.handleChange}/><br/>
        Password:<input type="password" name="password" onChange={this.handleChange}/><br/>
        <input type="submit" onClick={this.handleClick}/>    
    </form>
    </center>
    )   
}
}
export default Login;