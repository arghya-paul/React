import React from 'react';
import swal from 'sweetalert';
class InputValuepickup extends React.Component{
constructor(){
    super()
    this.state={
        fullname:'',
        homeaddress:'',
        message1:'',
       
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   
}
handleSubmit=(e)=>{
    // swal('success','ok','success');
    this.message1.innerHTML=`<b>Name:</b> ${this.state.fullname}`
    this.message2.innerHTML=`<b>Address:</b> ${this.state.homeaddress}`  
    // swal('success',this.state.fullname,'success');
}
render(){
    return(
    <div>
        Name:<input type="text" name="fullname" onChange={this.handleChange}/><br/>
        Address:<input type="text" name="homeaddress" onChange={this.handleChange}/>
        <input type='button' value="send" onClick={this.handleSubmit}/><br/>
        <div ref={(val)=>this.message1=val}>{this.state.message1}</div>
        <div ref={(val)=>this.message2=val}>{this.state.message2}</div>

    </div>)

}
}
export default InputValuepickup;