import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddMovie from './AddMovie'

class Movies extends Component {
    state = {
        movies: [],
        newMovie: {
            title: '',
            director: '',
            genre: '',
            releaseDate: ''
        },
        isFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get('/movie').then(res => {
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
        axios
            .post('/movie', {
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
                    isFormDisplayed: false,
                    movies: movieList
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                {
                    this.state.movies.map((movie) => {
                        return (
                            <div key={movie._id} className="linkTo">
                                <Link to={`/movie/${movie._id}`} style={{paddingTop:'5px'}}>
                                    {movie.title}
                                </Link>
                            </div>
                        )
                    })
                }

                <button onClick={this.toggleForm} className="buttonClass">Add Movie?</button>
                {
                    this.state.isFormDisplayed
                        ?
                        <AddMovie newMovie={this.state.newMovie} handleChange={this.handleChange} createMovie={this.createMovie} />
                        : null
                }
            </div>
        )
    }
}

export default Movies;