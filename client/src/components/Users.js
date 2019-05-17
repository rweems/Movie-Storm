import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Users extends Component {
    state = {
        users: [],
        newUser: {
            name: '',
            memberSince: '',
            email: ''
        }
    }

    componentDidMount = () => {
        axios.get('/user').then(res => {
            this.setState({ users: res.data });
        })
    }

    handleChange = (e) => {
        const createdUser = { ...this.state.newUser }
        createdUser[e.target.name] = e.target.value
        this.setState({ newUser: createdUser })

    }

    createUser = (e) => {
        e.preventDefault()
        axios
            .post('/user', {
                name: this.state.newUser.name,
                memberSince: this.state.newUser.memberSince,
                email: this.state.newUser.email
            }).then(res => {
                const userList = [...this.state.users]
                userList.push(res.data)
                this.setState({
                    newUser: {
                        name: '',
                        memberSince: '',
                        email: ''
                    },
                    users: userList
                })
            })
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
                            <label htmlFor='memberSince'>Date: </label>
                            <input id='memberSince' type='date' name='memberSince'
                                onChange={this.handleChange}
                                value={this.state.newUser.memberSince} />
                        </div>
                        <div>
                            <label htmlFor='email'>Email: </label>
                            <input id='email' type='text'
                                name='email'
                                placeholder='Email'
                                onChange={this.handleChange}
                                value={this.state.newUser.email} />
                        </div>
                        <br />
                        <div>
                            <input type='submit' value='Submit' />
                        </div>
                    </form>
                    
                }
            </div>
        )
    }
}

export default Users;