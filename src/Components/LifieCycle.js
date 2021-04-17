import React from 'react';
class LifecycleEx extends React.Component{
    constructor(){
        super()
        this.state={
            user_ID:''
        }
    }
// componentWillMount(){
//     this.setState({user_ID:11111});
// }    

handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value});
}

componentDidUpdate(prevProps,prevState){
    if(prevState.user_ID!==this.state.user_ID){
        alert('Status Updated');
    }

}

render(){
    return(
        <div>
            <label>{this.state.user_ID}</label>
            <input type="text" name="user_ID" onChange={this.handleChange}/>
        </div>
    )

}    
}
export default LifecycleEx;