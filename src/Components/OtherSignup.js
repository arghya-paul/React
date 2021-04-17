import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class OtherSignup extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            address: '',
            phone: '',
            email_id: '',
            dob: '',
            gender: '',
            language: [],
            country: '',
            files: [],
            password: '',

            // name_error: '',
            address_error: '',
            phone_error: '',
            email_id_error: '',
            dob_error: '',
            gender_error: '',
            language_error: '',
            country_error: '',
            files_error: '',
            password_error: '',



        }
    }

    handleChange = (e) => {
        let index;
        if (e.target.name == 'language') {
            if (e.target.checked) {
                this.state.language.push(e.target.value);
            } else {
                index = this.state.language.indexOf(e.target.value);
                this.state.language.splice(index, 1);
            }
            console.log(this.state);
        } else {
            this.setState({ [e.target.name]: e.target.value })
            console.log(this.state.country);

        }
    }

    handleValidation = (e) => {
        e.preventDefault();
        let count = 0;

        //Name Vlaidaion

        if (this.state.name == "") {
            this.setState({ name_error: 'Name should not be blank' })
            count++;
        } else {
            this.setState({ name_error: '' })
        }

        //Address Validation

        if (this.state.address == "") {
            this.setState({ address_error: 'Address should not be blank' })
            count++;
        } else {
            this.setState({ address_error: '' })
        }

        //Phone validation

        if (this.state.phone == "") {
            this.setState({ phone_error: 'Phone should not be blank' })
            count++;
        } else {
            this.setState({ phone_error: '' })
        }
        if (this.state.phone !== "") {
            if (isNaN(this.state.phone)) {
                this.setState({ phone_error: 'Must be in number' })
                count++;
            } else if ((this.state.phone.length < 10) || (this.state.phone.length > 10)) {
                this.setState({ phone_error: 'phone no. must be in 10 digit' })
                count++;
            } else {
                this.setState({ phone_error: '' })
            }
        }

        //Email Validation

        if (this.state.email_id == "") {
            this.setState({ email_id_error: 'Email ID should not be blank' })
            count++;
        }

        if (this.state.email_id !== "") {
            if (this.state.email_id.indexOf('@') <= 0) {
                this.setState({ email_id_error: '@ position error' })
                count++
            } else {
                this.setState({ email_id_error: '' })
            }
        }

        //Date of Birth validation

        if (this.state.dob == "") {
            this.setState({ dob_error: 'Date Of Birth should not be blank' })
            count++
        } else {
            this.setState({ dob_error: '' })
        }

        //Gender Validation

        if (this.state.gender == "") {
            this.setState({ gender_error: 'Gender Missing' })
            count++
        } else {
            this.setState({ gender_error: '' })
        }

        //Language Validation

        if (this.state.language == "") {
            this.setState({ language_error: 'Language missing' })
            count++;
        } else {
            this.setState({ language_error: '' })
        }

        //Country Validation

        if (this.state.country == "") {
            this.setState({ country_error: 'Country missing' });
            count++;
        }
        else {
            this.setState({ country_error: '' });
        }

        //Files Validation

        if (this.state.id == "") {
            this.setState({ files_error: 'Files missing' })
            count++;
        } else {
            this.setState({ files_error: '' })
        }

        if (this.state.password == "") {
            this.setState({ password_error: 'Password should not be blank' })
            // this.setState.country_error.style.color="red";
            count++;
        } else {
            this.setState({ password_error: '' })
        }

        if (count !== 0) {
            // alert('Form error')
            return false;
        } else {
            this.handleClick();
            return true;

        }

    }

    handleClick() {
        axios.post(API + 'insertData',  
            JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                contact: this.state.phone,
                email: this.state.email_id,
                dob: this.state.dob,
                gender: this.state.gender,
                language: this.state.language,
                country: this.state.country,
                password: this.state.password,
            })
        )
            .then(response => {
                if (response.data.success == 1) {
                    swal('Success!', response.data.msg, 'success')
                } else {
                    swal('Error!', response.data.msg, 'error')
                }
            })
            .catch(err => {
                swal('Error1', 'something went wrong', 'error')
            })
    }

    handleFileupload = (e) => {
        if (e.target.files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < e.target.files.length; i++) {
                formData.append('files[' + i + ']', e.target.files[i],
                    e.target.files[i].name);
            }
            axios.post(API + 'uploadFile', formData)
                .then(response => {
                    // console.log(response.data.id)
                    if (response.data.success == 1) {
                        this.setState({ id: response.data.id });
                        swal('Success!', response.data.msg,
                            'success');
                    }
                    else {
                        swal('Error!', response.data.msg, 'error');
                    }
                })
                .catch(err => {
                    console.log(err);
                    swal('Error!', 'Something went wrong. Please try again', 'error')
                })
        }
    }



    render() {
        return (
            <center>
                <div>
                    <h3>SIgnup Form</h3>
                    <form method="POST">
                        <table border="1">
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" name="name" placeholder="Name" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span>{this.state.name_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Address:</td>
                                <td><input type="text" name="address" placeholder="Address" onChange={this.handleChange} />&nbsp;&nbsp;
                                 <span>{this.state.address_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Phone:</td>
                                <td><input type="text" name="phone" value={this.state.phone} placeholder="Phone" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span>{this.state.phone_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Email ID:</td>
                                <td><input type="text" name="email_id" placeholder="Email ID" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span>{this.state.email_id_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Date Of Birth:</td>
                                <td><input type="date" name="dob" placeholder="Date Of Birth" onChange={this.handleChange} />&nbsp;&nbsp;
                        <span>{this.state.dob_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Gender:</td>
                                <td>
                                    <input type="radio" name="gender" value="Male" onChange={this.handleChange} />Male
                                    <input type="radio" name="gender" value="Female" onChange={this.handleChange} />Female
                                    <input type="radio" name="gender" Value="Others" onChange={this.handleChange} />Others&nbsp;&nbsp;
                                    <span>{this.state.gender_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Language:</td>
                                <td>
                                    <input type="checkbox" name="language" value="Bengali" onChange={this.handleChange} />Bengali
                        <           input type="checkbox" name="language" value="Hindi" onChange={this.handleChange} />Hindi
                                    <input type="checkbox" name="language" value="English" onChange={this.handleChange} />English&nbsp;&nbsp;
                                    <span>{this.state.language_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Country:</td>
                                <td>
                                    <select name="country" onChange={this.handleChange}>
                                        <option value="">--Select--</option>
                                        <option value="India">India</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Canada">Canada</option>
                                    </select> &nbsp;&nbsp;
                            <span>{this.state.country_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Upload file:</td>
                                <td><input type="file" name="files[]" onChange={this.handleFileupload} />&nbsp;&nbsp;
                                <span>{this.state.files_error}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>Password:</td>
                                <td>
                                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />&nbsp;&nbsp;
                                    <span>{this.state.password_error}</span>
                                </td>
                            </tr>


                            <tr style={{ textAlign: 'center' }}>
                                <td colspan="2">
                                    <input type="submit" onClick={this.handleValidation} className="btn btn-success"/>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </center>
        )
    }
}
export default OtherSignup;