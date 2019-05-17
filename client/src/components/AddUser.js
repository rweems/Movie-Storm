import React, { Component } from 'react';
class AddUser extends Component {
    state = {}
    render() {
        return (
            <form onSubmit={this.props.createUser}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input id='name' type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.props.handleChange}
                        value={this.props.newUser.name} />
                </div>
                <div>
                    <label htmlFor='memberSince'>Date: </label>
                    <input id='memberSince' type='date' name='memberSince'
                        onChange={this.props.handleChange}
                        value={this.props.newUser.memberSince} />
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input id='email' type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.props.handleChange}
                        value={this.props.newUser.email} />
                </div>
                <br />
                <div>
                    <input type='submit' value='Submit' />
                </div>
            </form>
        );
    }
}


export default AddUser;