import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './components/searchMovies.jsx';
import MovieListing from './components/movieListing.jsx';
import RentedMovies from './components/rentMovie.jsx';
import sorter from './sorting';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            rented: []
        }
        this.rentMovie = this.rentMovie.bind(this);
    }
    getDefaultMovies() {
        fetch('/api/movies/')
            .then(response => response.json())
            .then(movies=>{
                console.log(movies);
                return movies.sort((a,b)=>{
                    if(a.year <b.year) return a;
                    else return b;
                });
            })
            .then(movies => this.setState({ movies: movies }))
            .catch(err => console.log("Unable to retrieve movies: ", err))
    }
    rentMovie(movieId) {
        let rented = this.state.rented;
        let requestedMovie = this.state.movies.reduce((target, cur) => {
            if (cur.id == movieId) return cur;
            else return target;
        });
        this.setState({ rented: rented.push(requestedMovie) });
    }
    componentDidMount() {
        fetch('api/movies/initialize')
        .then(()=>   this.getDefaultMovies());
    }
    render() {
        let { movies, rented } = this.state;
        return (
            <div>
                <nav>
                    <SearchMovies />
                    <RentedMovies moviesRented={rented} />
                </nav>
                <div>
                    {
                        movies.length > 0 ?
                            movies.map(movie => (<MovieListing rentMovie={this.rentMovie} movieData={movie} />))
                            : <h3>Loading Movies</h3>
                    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));