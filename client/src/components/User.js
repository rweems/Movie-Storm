import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import Movies from './Movies'
import axios from 'axios'

class User extends Component {
    state = {
        user: {
            name: '',
            memberSince: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const _user = { ...this.state.user }
        _user[e.target.name] = e.target.value
        this.setState({ user: _user })
    }

    updateUser = (e) => {
        e.preventDefault()
        axios.put(`/user/${this.props.match.params.id}`, {
            name: this.state.user.name,
            email: this.state.user.email
        }).then(res => {
            this.setState({ user: res.data })
        })
    }
    deleteUser = () => {
        axios.delete(`/user/${this.props.match.params.id}/delete`).then(res => {
            res.redirect('/')
        })
    }
    render() {
        return (
            <div>
                <h1>User{this.props.name}</h1>
                <Movies />
                <br />
                <br />
                <h2>Update User</h2>
                <form onSubmit={this.updateUser}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input id='name' type='text'
                            name='name' onChange={this.handleChange}
                            value={this.state.user.name}
                            placeholder='Name' />
                    </div>
                    <div>
                        <label htmlFor='memberSince'>Date: </label>
                        <input id='memberSince' type='date' name='memberSince'
                            onChange={this.handleChange}
                            value={this.state.user.memberSince} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input id='email' type='text'
                            name='email'
                            placeholder='Email'
                            onChange={this.handleChange}
                            value={this.state.user.email} />
                    </div>
                    <br />
                    <button>Update</button>
                </form>
                <div className='form'>
                    <div>
                        Name:{this.state.user.name}
                    </div>
                    <div>
                        Date: {this.state.user.memberSince}
                    </div>
                    <div>
                        Email: {this.state.user.email}
                    </div>
                    <br />
                    <button onClick={this.deleteUser}>Delete</button>
                </div>
                <br />
                <br />
                <br />


            </div>
        );
    }
}

export default User;