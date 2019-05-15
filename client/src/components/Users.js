import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Users extends Component {
    state = {
        users: [],
        newUser: {
            name: '',
            memberSince: '',
            email: ''
        }

    }

    handleChange =(e) => {
        const createdUser = {...this.state.newUser}
        createdUser[e.target.name] = e.target.value
        this.setState({newUser:createdUser})
        console.log(createdUser)
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {
                    this.state.users.map(user => {
                        return (
                            <div key={user._id}>
                                <Link to={`/${user._id}`}>
                                    {user.name}
                                </Link>
                            </div>
                        )
                    })
                }
                <h3>Add User</h3>
                {
                    <form onSubmit={this.createUser}>
                        <div>
                            <label htmlFor='name'>Name: </label>
                            <input id='name' type='text'
                                name='name'
                                placeholder='Name'
                                onChange={this.handleChange}
                                value={this.state.newUser.name} />
                        </div>
                        <div>
                            <label htmlFor='name'>Email: </label>
                            <input id='email' type='text'
                                name='email'
                                placeholder='Email'
                                onChange={this.handleChange}
                                value={this.state.newUser.email} />
                        </div>
                        <div>
                            <input type='submit' value='Submit' />
                        </div>
                    </form>
                }
            </div>
        );
    }
}

export default Users;