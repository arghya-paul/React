import { React, Component } from 'react';
class Form extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            
                <center>
                    <form>
                        <table border="1" >
                        
                            <tr style={{textAlign:'center'}}>
                               <td colSpan="2"> Registration Form</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" placeholder="Name"></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Address:</td>
                                <td><input type="text" placeholder="Address"></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Phone:</td>
                                <td><input type="text" placeholder="Phone"></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Email:</td>
                                <td><input placeholder="Email"></input>
                                </td>
                            </tr>

                            <tr>
                                <td>Gender:</td>
                                <td><input type="radio" name="Gen"></input>Male
                            <input type="radio" name="Gen"></input>Female
                            </td>
                            </tr>

                            <tr>
                                <td>Language:</td>
                                <td><input type="checkbox" name="lan"></input>Bengali
                            <input type="checkbox" name="Lan"></input>Hindi
                            <input type="checkbox" name="Lan"></input>English
                            </td>
                            </tr>

                            <tr>
                                <td>Country:</td>
                                <td>
                                    <select>
                                        <option>--Select--</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>Canada</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Upload Image:</td>
                                <td><input type="file"></input></td>
                            </tr>

                            <tr>
                                <td>Password:</td>
                                <td><input type="password" placeholder="Password"></input></td>
                            </tr>

                            <tr id="button" style={{textAlign:'center'}} >
                                <td colSpan="2"><input type="submit"></input>
                                <input type="reset"></input></td>
                            </tr>

                        </table>
                    </form>
                </center>
        )
    }
}
export default Form;