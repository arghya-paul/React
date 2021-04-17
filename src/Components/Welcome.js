import React from 'react';
import {NavLink} from 'react-router-dom';
import './Welcome.css';
class Welcome extends React.Component{


    render(){
        return(
        <ul className="unorderlist_items">
            <li className="orderlist_items"><NavLink to='/' className="Nav_items">Welcome</NavLink></li>
            <li className="orderlist_items"><NavLink to='/signup' className="Nav_items">Signup</NavLink></li>
            <li className="orderlist_items"><NavLink to='/edit' className="Nav_items">Edit</NavLink></li>
            <li className="orderlist_items"><NavLink to='/view' className="Nav_items">View</NavLink></li>
            <li className="orderlist_items"><NavLink to='/login' className="Nav_items">Login</NavLink></li>
        </ul>)
    }
}
export default Welcome;