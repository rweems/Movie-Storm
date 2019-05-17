import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import axios from 'axios'

class Movies extends Component {
    state = {
        movies: [],
        newMovie: {
            title: '',
            director: '',
            genre: '',
            releaseDate: ''
        }
    }
    componentDidMount = () => {
        axios.get(`/user/${this.key}`).then(res => {
            this.setState({ movies: res.data });
        })
    }

    handleChange = (e) => {
        const createdMovie = { ...this.state.newMovie }
        createdMovie[e.target.name] = e.target.value
        this.setState({ newMovie: createdMovie })
        console.log(createdMovie)
    }

    createMovie = (e) => {
        e.preventDefault()
        axios.post(`/user/${this.key}`, { //userId
            title: this.state.newMovie.title,
            director: this.state.newMovie.director,
            genre: this.state.newMovie.genre,
            releaseDate: this.state.newMovie.releaseDate,

        }).then(res => {
            const movieList = [...this.state.movies]
            movieList.push(res.data)
            this.setState({
                newMovie: {
                    title: '',
                    director: '',
                    genre: '',
                    releaseDate: ''
                },
                movies: movieList
            })
        })
    }

    render() {
        return (
            <div>
                <h2>User Movies</h2>
                {
                    this.state.movies.map(movie => {
                        return (
                            <div key={movie._id} >
                                <Link to={`/user/${this.key}/movie/${movie._id}`}>
                                    {movie.name}
                                </Link>
                            </div>
                        )
                    })
                }
                <h3>---------------</h3>
                <h3>Add Movie</h3>
                {
                    <form onSubmit={this.createMovie}>
                        <div>
                            <label htmlFor='title'>Title: </label>
                            <input id='title' type='text'
                                name='title'
                                placeholder='Title'
                                onChange={this.handleChange}
                                value={this.state.newMovie.title} />
                        </div>
                        <div>
                            <label htmlFor='director'>Director: </label>
                            <input id='director' type='text'
                                name='director'
                                placeholder='Director'
                                onChange={this.handleChange}
                                value={this.state.newMovie.director} />
                        </div>
                        <div>
                            <label htmlFor='genre'>Genre: </label>
                            <input id='genre' type='text'
                                name='genre'
                                placeholder='Genre'
                                onChange={this.handleChange}
                                value={this.state.newMovie.genre} />
                        </div>
                        <div>
                            <label htmlFor='releaseDate'>Date: </label>
                            <input id='releaseDate' type='date' name='releaseDate'
                                onChange={this.handleChange}
                                value={this.state.newMovie.releaseDate} />
                        </div>
                        <br />
                        <div>
                            <input type='submit' value='Submit' />
                        </div>
                    </form>
                }
                <h3>--------------</h3>

            </div>
        )
    }
}

export default Movies;