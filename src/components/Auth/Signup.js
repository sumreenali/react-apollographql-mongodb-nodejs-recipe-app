import React, {Component} from 'react'

class Signup extends Component{
    render(){
        return(
            <div className="center">
                <h2 className="center">Signup</h2>
                <form className="form">
                    <input type="text" name="username" placeholder="Username "/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="password" name="password" placeholder="Password "/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                   <button type="submit" className="button-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup