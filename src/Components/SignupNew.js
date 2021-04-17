import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'
class SignupNew extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            first_name: '',
            address: '',
            phone: '',
            email_id: '',
            date_of_birth: '',
            gender: '',
            language: [],
            country: '',
            files: [],
            password: '',
            // confirm_password: '',
            first_name_err: '',
            address_err: '',
            phone_err: '',
            email_id_err: '',
            date_of_birth_err: '',
            gender_err: '',
            language_err: '',
            country_err: '',
            files_err: '',
            password_err: '',
            // confirm_password_err: '',
            // fields: {
            //     name: '',
            //     id: ''
            // }
        }
    }
    handleChange = (e) => {
        let index;
        if (e.target.name == 'language') {
            if (e.target.checked) {
                this.state.language.push(e.target.value);
            }
            else {
                index = this.state.language.indexOf(e.target.value);
                this.state.language.splice(index, 1);
                console.log(this.state.language);
            }
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    handleSubmit() {
        axios.post(API + 'insertData',
            JSON.stringify({
                id: this.state.id,
                name: this.state.first_name,
                gender: this.state.gender,
                dob: this.state.date_of_birth,
                address: this.state.address,
                contact: this.state.phone,
                email: this.state.email_id,
                password: this.state.password,
                language: this.state.language,
                country: this.state.country,
            })
        )
            .then(response => {
                console.log(response);
                if (response.data.success == "1") {
                    swal('Success!', response.data.msg, 'success');
                }
                else {
                    swal('Error!', response.data.msg, 'error');
                }
            })
            .catch(err => {
                swal('Error!', 'Something went wrong. Please try again', 'error')
            })
    }
    handleFileUpload = (e) => {
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
    showData = (e) => {
        e.preventDefault();
        console.log(this.state);
        let count = 0;
        // NAME
        if (this.state.first_name == "") {
            this.setState({ first_name_err: "->Name is blank" });
            count++;
        }
        else {
            this.setState({ first_name_err: "" });
        }

        // ADDRESS
        if (this.state.address == "") {
            this.setState({ address_err: "->Address is blank" });
            count++;
        }
        else {
            this.setState({ address_err: "" });
        }

        // PHONE

        if (this.state.phone == "") {
            this.setState({ phone_err: "->Phone no. is blank" });
            count++;
        }
        if (this.state.phone != "") {
            let x = this.state.phone;

            if (isNaN(parseInt(x))) {
                this.setState({ phone_err: "->Must be number" });
                count++;
            }
            else if (this.state.phone.length < 10 ||
                this.state.phone.length > 10) {
                this.setState({ phone_err: "->Invalid" });
                count++;
            }
            else if (this.state.phone.index == -1) {
                this.setState({
                    phone_err: "->Phone no must be startwith 9 / 8 / 7 / 6"
                });
                count++;
            }
            else {
                this.setState({ phone_err: "" });
            }
        }

        // EMAIL ID
        if (this.state.email_id == "") {
            this.setState({ email_id_err: "->Email_id is blank" });
            count++;
        }
        else {
            this.setState({ email_id_err: "" });
        }

        // D.O.B
        if (this.state.date_of_birth == "") {
            this.setState({
                date_of_birth_err: "->Date_of_birth isblank"
            });
            count++;
        }
        else {
            this.setState({ date_of_birth_err: "" });
        }

        // GENDER
        if (this.state.gender == "") {
            this.setState({ gender_err: "->Gender missing" });
            count++;
        }
        else {
            this.setState({ gender_err: "" });
        }

        // LANGUAGE
        if (this.state.language == "") {
            this.setState({ language_err: "->Language missing" });
            count++;
        }
        else {
            this.setState({ language_err: "" });
        }
        // COUNTRY
        if (this.state.country == "") {
            this.setState({ country_err: "->Country missing" });
            count++;
        }
        else {
            this.setState({ country_err: "" });
        }
        // FILES
        if (this.state.id == "") {
            this.setState({ id_err: "->File missing" });
            count++;
        }
        else {
            this.setState({ id_err: "" });
        }

        // PASSWORD
        if (this.state.password == "") {
            this.setState({ password_err: "->Password missing" });
            count++;
        }
        if (this.state.password !== "") {
            if ((this.state.password.length > 0 &&
                this.state.password.length < 8) || (this.state.password.length > 14)) {
                this.setState({
                    password_err: "->Password length mustbe 10-14 chars long"
                });
                count++;
            }
            else if ((this.state.password.length >= 8 &&
                this.state.password.length <= 14)) {
                if (!this.state.password.match('[A-Z]')) {
                    this.setState({
                        password_err: "->Enter at leastone uppercase letter"
                    });
                    count++;
                }
                else if (!this.state.password.match('[a-z]')) {
                    this.setState({
                        password_err: "->Enter at leastone uppercase letter"
                    });
                    count++;
                }
                else if (!this.state.password.match('[0-9]')) {
                    this.setState({
                        password_err: "->Enter at leastone number"
                    });
                    count++;
                }
                else if (!this.state.password.match('[@$&%]')) {
                    this.setState({
                        password_err: "->Enter at leastone character from @, $,&,% "
                    });
                    count++;
                }
            }
            else {
                this.setState({ password_err: "" });
            }
        }
        // CONFIRM PASSWORD
        // if (this.state.confirm_password !== this.state.password) {
        // this.setState({ confirm_password_err: "->Wrong
        // password.Try again" });
        // count++;
        // }
        // else {
        // this.setState({ confirm_password_err: "" });
        // }
        if (count != 0) {
            alert("error");
            // swal("error");
            // swal('Error!', 'Something went wrong. Please try again', 'error')
        }

        else {
            e.preventDefault()
            this.handleSubmit()
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2>Sign Up page :-</h2>
                <center>
                    <form className="form-horizontal" method="POST" encType="multipart/form-data">
                        <table border="4" cellpadding="2"
                            cellspacing="5">
                            <tr style={{
                                color: 'red',
                                backgroundColor: 'black', textAlign: 'center'
                            }}>
                                <td colspan="2">
                                    Sign Up</td>
                            </tr>
                            <tr>
                                <td>NAME :-</td>
                                {/* <label for="Name">Name</label> */}
                                <td> <input type="text"
                                    name='first_name' onChange={this.handleChange} placeholder=" ROHANKUMAR" value={this.state.first_name} >
                                </input>
                                    <span name="first_name_err">
                                        {this.state.first_name_err}</span></td>
                            </tr>
                            <tr>
                                <td>ADDRESS :-</td>
                                <td> <input type="text" name='address'
                                    onChange={this.handleChange} placeholder=" Sector-5, Salt lake" value=
                                    {this.state.address} style={{ textAlign: 'center' }} >
                                </input>
                                    <span name="address_err">
                                        {this.state.address_err}</span> </td>
                            </tr>
                            <tr>
                                <td>PHONE (+91) :-</td>
                                <td> <input type="text" name='phone'
                                    onChange={this.handleChange} placeholder=" 1234567890" value=
                                    {this.state.phone} style={{ textAlign: 'center' }}>
                                </input>
                                    <span name="phone_err">
                                        {this.state.phone_err}</span> </td>
                            </tr>
                            <tr>
                                <td>EMAIL ID :-</td>
                                <td> <input type="email"
                                    name='email_id' onChange={this.handleChange} placeholder="abcd@gmail.com" value={this.state.email_id} style={{
                                        textAlign:
                                            'center'
                                    }}>
                                </input>
                                    <span name="email_id_err">
                                        {this.state.email_id_err}</span> </td>
                            </tr>
                            <tr>
                                <td>D.O.B :-</td>
                                <td> <input type="date"
                                    name='date_of_birth' onChange={this.handleChange} value=
                                    {this.state.date_of_birth} style={{ textAlign: 'center' }}>
                                </input>
                                    <span name="date_of_birth_err">
                                        {this.state.date_of_birth_err}</span> </td>
                            </tr>
                            <tr>
                                <td>GENDER :-</td>
                                <td>
                                    <input type="radio" name='gender'
                                     onChange={this.handleChange} value="male" checked={this.state.gender == 'male' ? true : false}/>MALE 
                                     <input type="radio" name='gender'
                                     onChange={this.handleChange} value="female" checked={this.state.gender == 'female' ? true : false}/>FEMALE
                                     <input type="radio" name='gender'  onChange={this.handleChange} value="other" checked={this.state.gender == 'other' ? true : false}/>OTHER
                                       
                                     <span name="gender_err">{this.state.gender_err}</span>
                                        
                                </td>
                            </tr>
                            <tr>
                                <td>LANGUAGE :-</td>
                                <td>
                                    <input type="checkbox"  name='language' onChange={this.handleChange} value="Hindi" />Hindi
                                       
                                     <input type="checkbox" name='language' onChange={this.handleChange} value="Bengali" />Bengali
                                        
                                     <input type="checkbox" name='language' onChange={this.handleChange} value="English" />English
                                      
                                    <span name="language_err"> {this.state.language_err}</span>
                                       
                                </td>
                            </tr>
                            <tr>
                                <td>COUNTRY :-</td>
                                <td>
                                    <select name='country' onChange=
                                        {this.handleChange} value={this.state.country}>
                                        <option value="">--Select--</option>
                                        <option
                                            value="India">INDIA</option>
                                        <option
                                            value="USA">USA</option>
                                        <option
                                            value="Canada">Canada</option>
                                        <option
                                            value="Nepal">Nepal</option>
                                    </select>
                                    <span name="country_err">
                                        {this.state.country_err}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>UPLOAD FILE :-</td>
                                <td>
                                    <input type="file" name="files[]"
                                        onChange={this.handleFileUpload} multiple={true}></input>
                                    <span name="id_err">
                                        {this.state.id_err}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>PASSWORD :-</td>
                                <td>
                                    <input type="password"
                                        name='password' onChange={this.handleChange} placeholder="RoHaN@123"
                                        value={this.state.password} style={{ textAlign: 'center' }}></input>
                                    <span name="password_err">
                                        {this.state.password_err}</span>
                                </td>
                            </tr>
                            {/* <tr>
 <td>CONFIRM PASSWORD :-</td>
 <td>
 <input type="password"
name="confirm_password" onChange={this.handleChange}
placeholder="RoHaN@123" value={this.state.confirm_password} style={{
textAlign: 'center' }}></input>
 <span name="confirm_password_err">
{this.state.confirm_password_err}</span>
 </td>
 </tr> */}
                            <tr style={{ textAlign: 'center' }}>
                                <td colspan="2">
                                    <button style={{
                                        color: 'white',
                                        backgroundColor: 'blue'
                                    }} type="submit" value="Submit" onClick=
                                        {this.showData} >Sign Up</button>
                                </td>
                            </tr>
                            <tr style={{ textAlign: 'center' }}>
                                <td colspan="2">
                                    <Link to="/SignIn"> Existing User?Sign In</Link>
                                </td>
                            </tr>
                        </table>
                    </form>
                </center>
            </React.Fragment >
        );
    }
}
export default SignupNew;