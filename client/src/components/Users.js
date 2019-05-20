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
        },
        isFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get('/user').then(res => {
            this.setState({ users: res.data });
        })
    }

    toggleForm = () => {
        this.setState((state, props) => {
            return ({ isFormDisplayed: !state.isFormDisplayed })
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
                    isFormDisplayed:false,
                    users: userList
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {
                    this.state.users.map((user) => {
                        return (
                            <div key={user._id} className="linkTo" >
                                <Link to={`/user/${user._id}`}>
                                    {user.name}
                                </Link>
                            </div>
                        )
                    })
                }

                <button onClick={this.toggleForm} className="buttonClass">New User?</button>
                {
                    this.state.isFormDisplayed
                        ?
                        <AddUser newUser={this.state.newUser} handleChange={this.handleChange} createUser={this.createUser} />
                        : null
                }

            </div>
        )
    }
}

export default Users;