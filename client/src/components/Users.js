import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddUser from './AddUser'
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
                            <div key={user._id} className="linkTo" >
                                <Link to={`/user/${user._id}`}>
                                    {user.name}
                                </Link>
                            </div>
                        )
                    })
                }
                <h3>Add User</h3>
                <AddUser newUser={this.state.newUser} handleChange={this.handleChange} createUser ={this.createUser}g/>
            </div>
        )
    }
}

export default Users;