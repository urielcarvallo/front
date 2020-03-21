import React from 'react';
import { Link} from 'react-router-dom';
import '../App.css';
const Routers =()=>{
        return(
                <ul>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/Create_Account">Create Account</Link></li>
                </ul>
        );
        }

export default Routers;