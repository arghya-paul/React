import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class AnotherListing extends React.Component{
    constructor(){
        super()
        this.state={
            userdata:[],
        }
    }

    GetListItems(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response=>{
            console.log(response);
            if(response.data.status=="success"){
                this.setState({userdata:response.data.data})
            }else{
                console.log();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    componentDidMount(){
        this. GetListItems();
    }
   
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Employee Name</td>
                            <td>Employee Salary</td>
                            <td>Employee Age</td>
                            <td>Employee Profile Image</td>
                        </tr>
                    </thead>

                    <tbody>
                       {this.state.userdata.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                            <td>{item.profile_image}</td>
                        </tr>
                       ))} 
                    </tbody>
                </table>        
            </div>
        )
    }
}
export default AnotherListing;
