import React from 'react';
import './formStyle.css';
class Basicform extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            homeaddress: '',
            phoneno: '',
            username: '',
            password: '',
            gender: '',
            first_name_error: '',
            homeaddress_error: '',
            phone_error: '',
            username_error: '',
            password_error: '',
            gender_error: '',
            uid: 3,

        }

    }
    inputChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    validCheck = (e) => {
        let count = 0;
        e.preventDefault();

        if (this.state.firstname == '') {

            this.setState({ first_name_error: 'Name should not be blank' })
            count++;
        } else {
            this.setState({ first_name_error: '' })
        }

        if (this.state.homeaddress == '') {
            this.setState({ homeaddress_error: 'Address should not be blankk' })
            count++;
        }
        else {
            this.setState({ homeaddress_error: '' })
        }

        if (this.state.username == '') {
            this.setState({ username_error: 'Username should not be blank' })
            count++;
        } else {
            this.setState({ username_error: '' })
        }

        if (this.state.password == '') {
            this.setState({ password_error: 'password should not be blank' })
            count++;
        } else if ((this.state.password.length) < 3 || (this.state.password.length > 8)) {
            this.setState({ password_error: 'Password should be between 3 to 8 charr' })
            count++;
        } else {
            this.setState({ password_error: '' });
        }

        if (this.state.gender == '') {
            this.setState({ gender_error: 'Please select any gender' })
            count++;
        } else {
            this.setState({ gender_error: '' })
        }


        if (this.state.phoneno == '') {
            this.setState({ phone_error: 'Phone number should not be blank' })
            count++;
        } else {
            this.setState({ phone_error: '' })
        }

        if (this.state.phoneno != '') {
            if (isNaN(this.state.phoneno)) {
                this.setState({ phone_error: 'Must be number' })
                count++;
            }
            else if (this.state.phoneno.length < 10 || this.state.phoneno.length > 10) {
                this.setState({ phone_error: 'Phone no.length should be under 10 degits' })
                count++;
            }
            else {
                this.setState({ phone_error: '' })
            }

        }

        if (count != 0) {
            console.log('form error');
            return false;

        } else {
            console.log('form submitted');
            this.setState({ firstname:'',homeaddress:'',phoneno:'',username:'',password:'', gender:'' });
            return true;
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label><b>Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input name="firstname" type="text" placeholder="Name" value={this.state.firstname} onChange={this.inputChange} /><br /><br />
                    <div name="first_name_error" className="Text_change">{this.state.first_name_error}</div>

                    <label><b>Address:</b> </label>
                    <input name="homeaddress" type="text" placeholder="Address" value={this.state.homeaddress} onChange={this.inputChange} /><br /><br />
                    <div name="homeaddress_error" className="Text_change">{this.state.homeaddress_error}</div>

                    <label><b>Phone:</b>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="tel" name="phoneno" placeholder="Phone" value={this.state.phoneno} onChange={this.inputChange} />
                    <div name="phone_error" className="Text_change">{this.state.phone_error}</div><br />

                    <label><b>Usename:</b></label>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.inputChange} /><br />
                    <div name="password_error" className="Text_change">{this.state.username_error}</div><br />

                    <label><b>Password:</b></label>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.inputChange} /><br />
                    <div name="password_error" className="Text_change">{this.state.password_error}</div><br />

                    <label><b>Gender:</b></label>
                    <input type="radio" name="gender" value="Male" checked={this.state.gender=='Male'?true:false} onChange={this.inputChange} />Male
                    <input type="radio" name="gender" value="Female" checked={this.state.gender=='Female'?true:false} onChange={this.inputChange} />Female
                    <div name="gender_error" className="Text_change">{this.state.gender_error}</div><br />

                    <input type="submit" value="send" onClick={this.validCheck} />
                </form>

                {/* {this.state.uid==2 
             &&    <React.Fragment>
            <label>hellow India</label><br/>
            <label>Hellow Arghya</label>
           </React.Fragment>} */}

                {/* {this.state.uid==2 ?
            <div>
            <label>How are you</label>
            </div>
            : 
            <div>
            <label>Hii </label>
            </div>
            } */}

            </div>

        )
    }
}

export default Basicform;