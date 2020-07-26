import React, { useContext } from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './content/articles/ArticlesContainer';
import { BooksContainer } from './content/books/BooksContainer';
import { MoviesContainer } from './content/movies/MoviesContainer';
import BooksContext from '../../context/books/booksContext';
import MoviesContext from '../../context/movies/moviesContext';

export const Home = () => {
	const booksContext = useContext(BooksContext);
	const { isBooks } = booksContext;

	const moviesContext = useContext(MoviesContext);
	const { isMovies } = moviesContext;

	return (
		<main>
			<SearchForm />
			{isBooks ? (
				<BooksContainer />
			) : isMovies ? (
				<MoviesContainer />
			) : (
				<ArticlesContainer />
			)}
		</main>
	);
};
