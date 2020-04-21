import React, {Component} from 'react'

class Signup extends Component{

    state={
        username:"",
        email:"",
        password:"",
        passwordconfirmation:""
    }

    handleChange = event =>{
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render(){
        const {username, email, password, passwordconfirmation} = this.state
        return(
            <div className="center">
                <h2 className="center">Signup</h2>
                <form className="form">
                    <input type="text" name="username" value={username} placeholder="Username " onChange={this.handleChange} />
                    <input type="email" name="email" value={email} placeholder="Email Address" onChange={this.handleChange} />
                    <input type="password" name="password" value={password} placeholder="Password " onChange={this.handleChange} />
                    <input type="password" name="confirmPassword" value={passwordconfirmation} placeholder="Confirm Password" onChange={this.handleChange} />
                   <button type="submit" className="button-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup