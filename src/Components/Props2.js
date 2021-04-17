import React from 'react';
// import FirstProps from './Props1';
class SecondProps extends React.Component{
constructor(){
super() 

}
render(){
    return(<div>
        <label>running in props 2</label><br/>
        
        <p>{this.props.value11}</p>
                </div>
    )
}
}
export default SecondProps;