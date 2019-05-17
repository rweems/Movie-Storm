import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import axios from 'axios'
import AddMovie from './AddMovie.js'
class Movies extends Component {
    state = {
        movies: [],
        newMovie: {
            title: '',
            director: '',
            genre: '',
            releaseDate: ''
        },
        isFormDisplayed:false
    }
    componentDidMount = () => {
        axios.get(`/user/${this.key}`).then(res => {
            this.setState({ movies: res.data });
        })
    }

    toggleForm = () => {
        this.setState((state, props) => {
            return ({ isFormDisplayed: !state.isFormDisplayed })
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
                isFormDisplayed:false,
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
                
                <button onClick={this.toggleForm} className="buttonClass">Add Movie</button>
                {
                    this.state.isFormDisplayed
                        ?
                        <AddMovie newMovie={this.state.newMovie} handleChange={this.handleChange} createMovie={this.createMovie} />
                        : null
                }
                <hr/>

            </div>
        )
    }
}

export default Movies;