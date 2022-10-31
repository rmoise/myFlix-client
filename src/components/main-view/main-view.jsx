import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: 'Fight Club',
          Description:
            'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
          Genre: 'Drama',
          Director: 'David Fincher',
          ImagePath:
            'https://www.themoviedb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        },
        {
          _id: 2,
          Title: 'Good Time',
          Description:
            'A crime film is a type of film focusing on the lives of criminals. The stylistic approach ranges from grittily realistic portrayals of real-life criminal figures (crime drama) to the far-fetched evil doings of imaginary arch-villains (master criminal films.) Criminal acts are almost always glorified in these movies.',
          Genre: 'Crime',
          Director: 'Benny Safdie',
          ImagePath:
            'https://www.themoviedb.org/t/p/w1280/s6DJXJU3HzX24Ij3VWg5MfVGHrI.jpg',
        },
        {
          _id: 3,
          Title: 'American Psycho',
          Description:
            'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
          Genre: 'Crime',
          Director: 'Mary Harron',
          ImagePath:
            'https://www.themoviedb.org/t/p/w1280/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg',
        },
      ],
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
