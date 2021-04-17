import React from 'react';

class ButtonClickedContent extends React.Component{

constructor(){
    super()
    this.state={
        error_message:'click the button'
    }
}

HandleClick=()=>{
    this.setState({error_message:'Button clicked'})
}

render(){
    return(
        <div>
            <button onClick={this.HandleClick}>Show</button>
            <span>{this.state.error_message}</span>
        </div>
    )
}
}
export default ButtonClickedContent;