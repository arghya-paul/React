import React from 'react';
import axios from 'axios';

import swal from 'sweetalert';

class RestApiList extends React.Component{

    constructor(){
        super()
        this.state={
            userdata:[]
        }
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(response=>{
            console.log(response);
            if(response.status==200){
                this.setState({userdata:response.data.data})
            }else{
                swal('error','something went wrong','error')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }


    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Email</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Avtar</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.userdata.map((item)=>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.avtar}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default RestApiList;