import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Redirect,BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

class RestApicheck extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            email_error:'',
            password_error:'',
            login_status:false
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.email);

      
    }

    handleClick=(e)=>{
        e.preventDefault();
        var count=0;
        if(this.state.email==''){
            this.setState({email_error:'Name should not be blank'})
            count++;
        }else{
            this.setState({email_error:''})
        }

        if(this.state.password==''){
            this.setState({password_error:'Password should not be blank'})
            count++;
        }else{
            this.setState({password_error:''})
        }

        if(count!=0){
            return false;
        }else{
            this.setState({email:'',password:''})
            this.Apicalling();
            if(this.state.email=="eve.holt@reqres.in" && this.state.password=="cityslicka"){
                this.setState({login_status:true})
            }
           
        }
    }

    Apicalling(){
        axios.post('https://reqres.in/api/login',
        {
            email:this.state.email,
            password:this.state.password
        })
        .then(response=>{
            console.log(response);
            if(response.status==200){
                swal('Success',response.data.token,'success')
            }else if(response.status==400){
                swal('Error',response.data.error,'error')
                console.log('Else');
            }
        })
        .catch(err=>{
            swal('Error','Error Login','error')
        })
    }
    
    render(){

        if(this.state.login_status==true){
            return (<BrowserRouter><Redirect to="/signup"/></BrowserRouter> )
        }

        return(
            <form method="POST">
                Email:<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                <div>{this.state.email_error}</div>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                <div>{this.state.password_error}</div>
                <button onClick={this.handleClick}>Submit</button>                        
            </form>
        )
    }
}
export default RestApicheck;
