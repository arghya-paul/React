import React from 'react';
import swal from 'sweetalert';
class OtherValuepick extends React.Component{
constructor(){
    super()
    this.state={
        fullname:'',
        homeaddress:'',
        fullname1:'',
        homeaddress1:'',

       
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
handleSubmit=(e)=>{
  swal('Success',this.state.fullname,'success');
  swal('Success',this.state.homeaddress,'success');
}
render(){
    return(
    <div>
        <form onSubmit={this.handleSubmit}>
        Name:<input type="text" name="fullname" onChange={this.state.handleChange}/><br/>
        Address:<input type="text" name="homeaddress" onChange={this.state.handleChange}/>
        <input type='button' value="send" /><br/>
        <div >{this.state.fullname}</div>
        <div >{this.state.homeaddress}</div>
        </form>

    </div>)

}
}
export default OtherValuepick;