import React, { Component } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading:true,

  };
  componentDidMount() {
    this.setState({loading: true})
    fetch("https://www.omdbapi.com/?apikey=be99c5e7&s=panda")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str,type = 'all') => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=be99c5e7&s=${str === '' ? 'panda' : str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false, }));      
  }


  render() {

    return (
      <>
        <div className="container content">
        <Search searchMovie={this.searchMovies}/>
          {!this.state.loading ? (
            <Movies movies={this.state.movies} />
          ) : (
            <Loader />
          )}
        </div>
      </>
    );
  }
}
