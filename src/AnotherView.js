import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/';

class Anotherview extends React.Component {

    constructor() {
        super()
        this.state = {
            userdata: [],

        }
    }

    componentDidMount(){
        axios.get(API+'getAllData',
        )
        .then(response=>{
            if(response.data.success==1){
                this.setState({userdata: response.data.userdata})
            }else{
                swal('error','something went wront','error')
            }
        })
        .catch(error=>{
           swal('error','something went wrong','error') 
        })
    }


    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>DOB</td>
                        <td>Address</td>
                        <td>Contact</td>
                        <td>Email</td>
                        <td>Language</td>
                        <td>Country</td>
                        <td>Profile Image</td>
                        <td>Action</td>
                    </tr>
                    </thead>

                   <tbody>
                       {this.state.userdata.map((item)=>(
                        
                        <tr>
                           <td>{item.id}</td>
                           <tr>{item.name}</tr>
                           <tr>{item.gender}</tr>
                           <tr>{item.dob}</tr>
                           <tr>{item.contact}</tr>
                           <tr>{item.email}</tr>
                           <tr>{item.language}</tr>
                           <tr>{item.country}</tr>
                           <tr><img src={item.file_path + item.files} height="100px" width="100px"></img></tr>
                           <tr>
                               <td><button>Edit</button></td>
                               <td><button>Delete</button></td>
                           </tr>
                        </tr>
                       ))
                       }
                      
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Anotherview;