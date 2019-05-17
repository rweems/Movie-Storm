import React, { Component } from 'react'

class AddMovie extends Component {
    state = {}
    render() {
        return (
            <form onSubmit={this.props.createMovie}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input id='title' type='text'
                        name='title'
                        placeholder='Title'
                        onChange={this.props.handleChange}
                        value={this.props.newMovie.title} />
                </div>
                <div>
                    <label htmlFor='director'>Director: </label>
                    <input id='director' type='text'
                        name='director'
                        placeholder='Director'
                        onChange={this.props.handleChange}
                        value={this.props.newMovie.director} />
                </div>
                <div>
                    <label htmlFor='genre'>Genre: </label>
                    <input id='genre' type='text'
                        name='genre'
                        placeholder='Genre'
                        onChange={this.props.handleChange}
                        value={this.props.newMovie.genre} />
                </div>
                <div>
                    <label htmlFor='releaseDate'>Date: </label>
                    <input id='releaseDate' type='date' name='releaseDate'
                        onChange={this.props.handleChange}
                        value={this.props.newMovie.releaseDate} />
                </div>
                <br />
                <div>
                    <input type='submit' value='Add' />
                </div>
            </form>
        );
    }
}

export default AddMovie;