import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/';

class UniqueView extends React.Component{

    constructor(){
        super()
        this.state={
            userdata:[]
        }
    }

    componentDidMount(){
        axios.get(API+'getAllData'
        )
        .then(response=>{
            console.log(response);
            if(response.data.success==1){
                this.setState({userdata:response.data.userdata})
            }else{
                swal('error','something went wrong','error')
            }
        })
        .catch(error=>{
            swal('error','something went wrong','error')
        })


    }



    render(){
        return(

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Date of Birth</td>
                        <td>Address</td>
                        <td>Contact</td>
                        <td>Email</td>
                        <td>Language</td>
                        <td>Country</td>
                        <td>Profile Image</td>
                        <td>Acction</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.userdata.map((item)=>{
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob}</td>
                                <td>{item.contact}</td>
                                <td>{item.email}</td>
                                <td>{item.language}</td>
                                <td>{item.country}</td>
                                <tr><img src={item.file_path + item.files} height="100px" width="100px"></img></tr>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default UniqueView;