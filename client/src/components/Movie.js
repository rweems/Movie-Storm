import React, { Component } from 'react';

import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class Movie extends Component {
    state = { 
        movie: {
            title: '',
            director: '',
            genre: '',
            releaseDate:''
        },
        isFormDisplayed: false
     }

     toggleForm = () => {
        this.setState((state, props) => {
            return ({ isFormDisplayed: !state.isFormDisplayed })
        })
    }

    handleChange = (e) => {
        const _movie = { ...this.state.movie }
        _movie[e.target.name] = e.target.value
        this.setState({ movie: _movie })
    }
     
    updateMovie = (e) => {
        e.preventDefault()
        axios.put(`/movie/${this.props.match.params.id}`, {
            title: this.state.movie.title,
            director: this.state.movie.director,
            genre: this.state.movie.genre,
            releaseDate: this.state.movie.releaseDate
        }).then(res => {
            this.setState({ movie: res.data })
        })
    }

    deleteMovie = () => {
        axios.delete(`/movie/${this.props.match.params.id}/delete`).then(res => {
            res.locaction('back')
        })
    }

    render() { 
        return ( 
            <div>
                <br />
                
                <button onClick={this.toggleForm} className="buttonClass">Update movie?</button>
                {
                    this.state.isFormDisplayed
                        ?
                        <form onSubmit={this.updateMovie}>
                            <div>
                                <label htmlFor='title'>Title: </label>
                                <input id='title' type='text'
                                    name='title' onChange={this.handleChange}
                                    value={this.state.movie.title}
                                    placeholder='Title' />
                            </div>
                            <div>
                                <label htmlFor='director'>Director: </label>
                                <input id='director' type='text'
                                    name='director'
                                    placeholder='Director'
                                    onChange={this.handleChange}
                                    value={this.state.movie.director} />
                            </div>
                            <div>
                                <label htmlFor='genre'>Genre: </label>
                                <input id='genre' type='text'
                                    name='genre'
                                    placeholder='Genre'
                                    onChange={this.handleChange}
                                    value={this.state.movie.genre} />
                            </div>
                            <div>
                                <label htmlFor='releaseDate'>Release Date: </label>
                                <input id='releaseDate' type='date' name='releaseDate'
                                    onChange={this.handleChange}
                                    value={this.state.movie.releaseDate} />
                            </div>
                            <br />
                            <input type='submit' value='Update' />
                        </form> : null
                }

                <div className='form'>
                    <div>
                        Title: {this.state.movie.title}
                    </div>
                    <div>
                        Director: {this.state.movie.director}
                    </div>
                    <div>
                        Genre: {this.state.movie.genre}
                    </div>
                    <div>
                        Release Date: {this.state.movie.releaseDate}
                    </div>
                    <br />
                    <button onClick={this.deleteMovie}>Delete</button>
                </div>
                <br />
                <br />
                <br />


            </div>
         );
    }
}
 
export default Movie;