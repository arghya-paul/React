import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class ListingGet extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.GetDatas()
    }


    GetDatas(){
        axios.get('https://reqres.in/api/unknown'
        )
        .then(response=>{
            console.log(response);
            if(response.status==200){
                this.setState({data:response.data.data})
            }else{
                console.log(response);
            }
        })
        .catch(err => {
            console.log('Err', err);
            swal('Error!','Something went wrong. Please try again','error')
        })
    }

   

    render(){
        return(
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>year</td>
                            <td>color</td>
                            <td>pantone_value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item)=>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.year}</td>
                                    <td>{item.color}</td>
                                    <td>{item.pantone_value}</td>
                                </tr>
                             ))
                        }
                    
                    </tbody>
                    </table>
            </React.Fragment>
        )
    }
}
export default ListingGet;