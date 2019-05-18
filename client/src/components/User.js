import React, { Component } from 'react';

import Movies from './Movies'
import UpdateUser from './UpdateUser.js'
import axios from 'axios'

class User extends Component {
    state = {
        user: {
            name: '',
            memberSince: '',
            email: ''
        },
        isFormDisplayed: false
    }

    toggleForm = () => {
        this.setState((state, props) => {
            return ({ isFormDisplayed: !state.isFormDisplayed })
        })
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
            memberSince: this.state.user.memberSince,
            email: this.state.user.email
        }).then(res => {
            this.setState({ user: res.data })
        })
    }
    deleteUser = () => {
        axios.delete(`/user/${this.props.match.params.id}/delete`).then(res => {
            res.locaction('back')
        })
    }
    render() {
        return (
            <div>

                <Movies />

                <br />

                <button onClick={this.toggleForm} className="buttonClass">Update User?</button>
                {
                    this.state.isFormDisplayed
                        ?
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
                            <input type='submit' value='Update' />
                        </form> : null
                }

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