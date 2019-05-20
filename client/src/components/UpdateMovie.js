import React, { Component } from 'react';

class UpdateMovie extends Component {
    state = {  }
    render() { 
        return ( 
            <form onSubmit={this.props.updateMovie}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input id='name' type='text'
                            name='name' onChange={this.props.handleChange}
                            value={this.props.user.name}
                            placeholder='Name' />
                    </div>
                    <div>
                        <label htmlFor='memberSince'>Date: </label>
                        <input id='memberSince' type='date' name='memberSince'
                            onChange={this.props.handleChange}
                            value={this.props.user.memberSince} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input id='email' type='text'
                            name='email'
                            placeholder='Email'
                            onChange={this.props.handleChange}
                            value={this.props.user.email} />
                    </div>
                    <br />
                    <input type='submit' value='Update' />
                </form>
         );
    }
}
 
export default UpdateMovie;