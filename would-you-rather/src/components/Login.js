import React, { Component } from 'react'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);

    }
    render() {
        return (
            <div className="container">
                <div className=" container col s12 m12 l6">
                    <div className="card-panel">
                        <h4 className="header2">Please Login into your account</h4>
                         <div className="row">
                            <form className="col s12" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="opt1" type="text"></input>
                                        <label htmlFor="opt1" className="">Option 1</label>
                                    </div>
                                </div>
                                <h5>or</h5>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="opt2" type="text"></input>
                                        <label htmlFor="opt2" className="">Option 2</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="center-align input-field col s12">
                                        <button className="btn cyan waves-effect waves-light" type="submit" name="action">Submit
                                <i className="mdi-content-send right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
