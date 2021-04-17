import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class ApiCall extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }

    }



    inputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    apiCheck=(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/register',
        {
            email:this.state.email,
            password:this.state.password
        })
        .then(response=>{
            console.log(response);
            if(response.status==200){
                swal('success',response.data.id,'success')
            }else{
                swal('error','','error')
            }
        })
        .catch(error=>{
            swal('error','something went wrong','error')
        })

    }


    render(){
        return(
            <div>
                <form method="post">
                <label>Email</label>
                <input type="text" name="email" onChange={this.inputValue}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={this.inputValue}/><br/>
                <button type="submit" onClick={this.apiCheck}>submit</button>
                </form>
            </div>
        )
    }
}
export default ApiCall;
