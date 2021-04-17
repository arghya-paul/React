import React from 'react';
import SecondProps from './Props2';
class FirstProps extends React.Component{
constructor(){
    super();
    this.state={
        username:"",
        btn:false
    }
}

handleChange=(e)=>{
    this.setState({username:e.target.value});
}
handleClick=(e)=>{
    this.setState({btn:true});
}

render(){
    return(
    <div>
        Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>send</button>
        {this.state.btn==true ?
         <SecondProps  value11={this.state.username}></SecondProps>:''}

    </div>
    );

}
}

export default FirstProps;