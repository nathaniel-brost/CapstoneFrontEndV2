import React from "react";
import {
    useNavigate,
    // Link
} from "react-router-dom"


const Login = (props) => {
    let navigate = useNavigate();
    const loggingIn = () => {
        navigate('/home')
        
    }
    return (
        <div>
            <h2>Welcome Back, Friend!</h2>
            <form onSubmit={loggingIn}>

                <div >
                    <span className="input-group-text" id="basic-addon1">Email: </span>
                    <input name='email' value={props.info.email} type="text" className="form-control" aria-label="Email" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Password: </span>
                    <input name='password' value={props.info.password} type="password" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"  >Login</button>
                </div>
            </form>
            <h2>Or, enter Your Information to Create an Account</h2>
            <form className="register-user" >
                <div className="input-group mb-3" >
                    <span className="input-group-text" id="basic-addon3">First Name: </span>
                    <input name='firstName' value={props.info.firstName} type="text" className="form-control" aria-label="First Name" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon4">Last Name: </span>
                    <input name='lastName' value={props.info.lastName} type="text" className="form-control" aria-label="Last Name" aria-describedby="basic-addon2" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon5">Email: </span>
                    <input name='email' value={props.info.email} type="text" className="form-control" aria-label="New Email" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon6">Password: </span>
                    <input name='password' value={props.info.password}  type="password" className="form-control" aria-label="New Password" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Login