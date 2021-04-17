import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            userdata: {
                id: '',
                name: '',
                gender: '',
                dob: '',
                address: '',
                contact: '',
                email: '',
                language: [],
                country: '',
                files: '',
                file_path: '',

            }
        }
    }

    componentDidMount(){
        axios.post(API+'getDataByID',
        JSON.stringify({
            userID:this.props.location.id
        }))
        .then(response=>{
            if(response.data.success==1){
                console.log(response.data.userdata);
                let userdata = response.data.userdata[0];
                let str = userdata.language;
                userdata.language = str.split(",");
                this.setState({ userdata: userdata })
            }else{
                console.log(response);
            }
        })
        .catch(err=>{
            swal('Error','something went wrong,please try again','error')
        })
        }

        handleChange = (e) => {
            let userdata = this.state.userdata;
    
            // alert('aa');
            if (e.target.name == 'language') {
                // if (e.target.checked) {
                //     this.state.userdata.language.push(e.target.value);
                // }
                // else {
                //     index = this.state.userdata.language.indexOf(+e.target.value);
                //     this.state.userdata.language.splice(index, 1);
                // }
                if (userdata.language.indexOf(e.target.value) > -1) {
                    let language = userdata.language.filter((item, i) => {
                        if (item == e.target.value)
                            return false;
                        else
                            return true;
                    });
                    userdata.language = language;
                } else {
                    userdata.language.push(e.target.value)
                }
        
                this.setState({ userdata: userdata }, () => {
        
                });
            }
            else {
                //  this.setState({userdata[e.target.name]:e.target.value})
                userdata[e.target.name] = e.target.value;
                this.setState({ userdata })
            }
    
        }

        handleFileUpload = (e) => {
            if (e.target.files.length > 0) {
                let formData = new FormData();
                for (let i = 0; i < e.target.files.length; i++) {
                    formData.append('files[' + i + ']', e.target.files[i], e.target.files[i].name);
                }
                formData.append('id', this.state.userdata.id);
    
                axios.post(API+'editUploadFile', formData)
                    .then(response => {
                        console.log(response.data.id)
                        if (response.data.success == 1) {
                            // this.setState({ id: response.data.id });
                            swal('Success!', response.data.msg, 'success');
                        }
                        else {
                            swal('Error!', response.data.msg, 'error');
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        // swal('Error!','Something went wrong','error');  
                    })
    
                }
            }

            handleSubmit = (e) => {
                e.preventDefault();
                // console.log(this.state.userdata);
                // return;
                axios.post(API+'editData', JSON.stringify({
                    id: this.state.userdata.id,
                    name: this.state.userdata.name,
                    gender: this.state.userdata.gender,
                    dob: this.state.userdata.dob,
                    address: this.state.userdata.address,
                    contact: this.state.userdata.contact,
                    email: this.state.userdata.email,
                    language: this.state.userdata.language,
                    country: this.state.userdata.country,
        
                }))
                    .then(response => {
                        console.log(response)
                        if (response.data.success == "1") {
                            swal('Success!', response.data.msg, 'success');
                        }
                        else {
                            swal('Error!', response.data.msg, 'error');
                        }
                    })
                    .catch(err => {
                        swal('Error!', 'Something went wrong', 'error')
                    })
        
            }
    
    
    render() {
        {
        return (
                <center>
                    <div>
                        <h3>Edit Form</h3>
                        <form method="POST">
                            <table border="1">
                                <tr>
                                    <td>Name:</td>
                                    <td><input type="text" name="name" value={this.state.userdata.name} placeholder="Name" onChange={this.handleChange} />&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Address:</td>
                                    <td><input type="text" name="address" placeholder="Address" value={this.state.userdata.address} onChange={this.handleChange} />&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Phone:</td>
                                    <td><input type="text" name="contact" value={this.state.phone} placeholder="Phone" value={this.state.userdata.contact} onChange={this.handleChange} />&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Email ID:</td>
                                    <td><input type="text" name="email" placeholder="Email ID" value={this.state.userdata.email} onChange={this.handleChange} />&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Date Of Birth:</td>
                                    <td><input type="date" name="dob" placeholder="Date Of Birth" value={this.state.userdata.dob} onChange={this.handleChange} />&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Gender:</td>
                                    <td>
                                        <input type="radio"  value="Male"  checked={this.state.userdata.gender == "Male"? this.state.userdata.gender :''} name="gender" onChange={this.handleChange} />Male
                                        <input type="radio" name="gender" value="Female" checked={this.state.userdata.gender=='Female'? this.state.userdata.gender :''} onChange={this.handleChange} />Female
                                        <input type="radio" name="gender" Value="Others" checked={this.state.userdata.gender=='Others'? this.state.userdata.gender :''} onChange={this.handleChange} />Others&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Language:</td>
                                    <td>
                                        <input type="checkbox" name="language" value="Bengali" checked={this.state.userdata.language.indexOf('Bengali')> -1 ? this.state.userdata.language:''} onChange={this.handleChange} />Bengali
                                        <input type="checkbox" name="language" value="Hindi" checked={this.state.userdata.language.indexOf('Hindi')> -1 ? this.state.userdata.language:''} onChange={this.handleChange} />Hindi
                                        <input type="checkbox" name="language" value="English" checked={this.state.userdata.language.indexOf('English')> -1 ? this.state.userdata.language:''} onChange={this.handleChange} />English&nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Country:</td>
                                    <td>
                                        <select name="country" onChange={this.handleChange}>
                                            <option value={this.state.userdata.country}>{this.state.userdata.country}</option>
                                            <option value="India" >India</option>
                                            <option value="Nepal" >Nepal</option>
                                            <option value="Canada" >Canada</option>
                                        </select> &nbsp;&nbsp;
                                    </td>
                                </tr>

                                <tr>
                                    <td>Upload file:</td>
                                    <td><input type="file" name="files[]" onChange={this.handleFileupload} />&nbsp;&nbsp;
                                    <img src={this.state.userdata.file_path + this.state.userdata.files} colspan="2" style={{textAlign:'center'}} height="100px" width="100px"></img>
                                    </td>
                                </tr>


                                <tr style={{ textAlign: 'center' }}>
                                    <td colspan="2">
                                        <input type="submit" onClick={this.handleSubmit} />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </center>
            )
        }

    }
        }

export default Edit;

