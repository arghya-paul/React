import React from 'react';
class PropsEx extends React.Component{
   
render(){
    return(
        <div>
            welcome User={this.props.name}
         </div>
    )
}
}
export default PropsEx;