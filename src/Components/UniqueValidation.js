import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class UniqueVlidation extends React.Component{

    constructor(){
        super()
            this.state={
                name:'',
                address:'',
                phone:'',
                email_id:'',
                dob:'',
                gender:'',
                password:'',
                name_error:'',
                address_error:'',
                phone_error:'',
                email_error:'',
                dob_error:'',
                gender_error:'',
                password_error:'',

        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }

    handleClick=(e)=>{
        e.preventDefault();
        var count=0;
        if(this.state.name==""){
            this.setState({name_error:'Name should not be blank'});
            count++;
        }else{
            this.setState({name_error:''})
        }

        if(this.state.address==''){
            this.setState({address_error:'Address should not be blank'})
            count++;
        }else{
            this.setState({address_error:''})
        }

        if(this.state.phone==''){
            this.setState({phone_error:'Phone should not be blank'})
            count++
        }else{
            this.setState({phone_error:''})
        }

        if(this.state.email_id==''){
            this.setState({email_error:'Email Id should not be blank'})
            count++;
        }else{
            this.setState({email_error:''})
        }

        if(this.state.dob==''){
            this.setState({dob_error:'Date of birth should not be blank'})
            count++;
        }else{
            this.setState({dob_error:''})
        }

        if(this.state.gender==''){
            this.setState({gender_error:'Gender should not be blank'})
            count++;
        }else{
            this.setState({gender_error:''})
        }

        if(this.state.password==''){
            this.setState({password_error:'Password should not be blank'})
            count++;
        }else{
            this.setState({password_error:''})
        }

        if(count!==0){
            alert('form not submitted')
            return false
        }else{
            alert('Form submitted')
            return true;
        }

    }

    insertdata=()=>{
       axios.post(API+'insertData',
       JSON.stringify({
           id:this.state.id,
           name:this.state.name,
           address:this.state.address
       })) 
       .then(response=>{
           if(response.data.success==1){
               swal('success','success')
           }else{
               swal('error','error')
           }
           
       })
       .catch(error=>{
           swal('error')
       })


    }




    render(){
        return(
            <div>
                <form>
                    <table>
                        <tr>
                            <td>
                            <label>Name</label>
                            <input type="text" name="name" onChange={this.handleChange}/>
                            <div name="name_error">{this.state.name_error}</div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <label>Address</label>
                            <input type="text" name="address" onChange={this.handleChange}/>
                            <div name="address_error">{this.state.address_error}</div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <label>Phone</label>
                            <input type="text" name="phone" onChange={this.handleChange}/>
                            <div name="phone_error">{this.state.phone_error}</div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <label>Email ID</label>
                            <input type="text" name="email_id" onChange={this.handleChange}/>
                            <div name="email_error">{this.state.email_error}</div>
                            </td>
                        </tr>

                        <tr>
                            <label>Date of Birth</label>
                            <input type="date" name="dob" onChange={this.handleChange}/>
                            <div name="dob_error">{this.state.dob_error}</div>
                        </tr>

                        <tr>
                            <label>Gender</label>
                            <input type="radio" name="gender" value="male" onChange={this.handleChange}/>Male
                            <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female
                            <input type="radio" name="gender" value="others" onChange={this.handleChange}/>Others
                            <div name="gender_error">{this.state.gender_error}</div>
                        </tr>

                        <tr>
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.handleChange}/>
                            <div name="password_error">{this.state.password_error}</div>
                        </tr>

                        <tr>
                           <input type="submit" onClick={this.handleClick} />
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
export default UniqueVlidation;