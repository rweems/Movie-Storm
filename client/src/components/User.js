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
                
                <button onClick={this.toggleForm} className="buttonClass">Update User</button>
                {
                    this.state.isFormDisplayed
                        ?
                        <UpdateUser user={this.state.user} handleChange={this.handleChange} updateUser={this.state.updateUser} />
                        : null
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