import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
class LiveApicheck extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    inputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleClick=(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/register',
        {
           email:"eve.holt@reqres.in",
           password:"pistol"
        }
        )
        .then(response=>{

            swal('Success',response.data.token,'success')
            // if(response.data.id == 4){
            //     console.log(response);
            //     swal('Success',response.data.token,'success')
            // }else{
            //     swal('Error',response.error,'error')
            // }
             })
        .catch(error=>{
            swal('Error','something went wrong','error')
        })
    }


    render(){
        return(
            <div>
                Email:<input type="email" name="email" onChange={this.inputChange}/><br/>
                Password:<input type="password" name="email" onChange={this.inputChange}/><br/>
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
    
}
export default LiveApicheck;