import React from 'react';
import './PressButton.css';
class PressButton extends React.Component{
    constructor(){
        super()
            this.state={
                message:'',
                color:"red"
            }
    }

    handleClick=(e)=>{
        this.setState({message:'Button clicked'})
        this.setState({color:"green"})
    }

    render(){
        return(
            <div>
                 <div className="Rectangle"
                 style={{backgroundColor: this.state.color}}>
                </div>
                <button className="press-button" onClick={this.handleClick}>Press</button>
                <div className="message">{this.state.message}</div>
               
            </div>

        )
    }
}
export default PressButton;