import React from 'react';
class PalindromeNo extends React.Component{
constructor(){
    super()
    this.state={
        rev:'',
      result:'',
      num:''
    }   
    }

inputGrab=(e)=>{
    this.setState({num:e.target.value});
}
palindromeCheck=(e)=>{
  var rev=0;
  var userinput=this.state.num;
  var store=userinput;

    while(store!=0){
        rev=(rev*10)+(store%10);
        store = parseInt(store/10);
    }

    if(userinput==rev){
       this.setState({result:'This is a palindrome no.'});
    }else{
        this.setState({result:'This is not a palndrome no.'});
    }
}


render(){return(
    <div>
        <input type="text" name="num"  onChange={this.inputGrab}/>
        <input type="button" value="check" onClick={this.palindromeCheck}/>
        <div type="text" name="result">{this.state.result}</div>
    </div>
)
}
}
export default PalindromeNo;