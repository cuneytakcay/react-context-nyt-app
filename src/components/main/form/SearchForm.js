import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RadioField } from './RadioField';
import { KeywordField } from './KeywordField';
import { DateField } from './DateField';
import articlesBackground from '../articles-background.jpg';
import booksBackground from '../books-background.jpg';
import moviesBackground from '../movies-background.jpg';
import './SearchForm.css';
import ArticlesContext from '../../../context/articles/articlesContext';
import BooksContext from '../../../context/books/booksContext';
import MoviesContext from '../../../context/movies/moviesContext';

export const SearchForm = () => {
	const { register, handleSubmit, watch } = useForm();

	const showArticles = watch('articlesPicker');
	const showBooks = watch('booksPicker');
	const showMovies = watch('moviesPicker');

	const articlesContext = useContext(ArticlesContext);
	const { searchArticles } = articlesContext;

	const booksContext = useContext(BooksContext);
	const { searchBooks } = booksContext;

	const moviesContext = useContext(MoviesContext);
	const { searchMovies } = moviesContext;

	// Displays the articles search field at the load of the page.
	let initialState = true;
	if (showBooks || showMovies) initialState = false;

	const onSubmit = (data, e) => {
		e.preventDefault();
		if (initialState || showArticles) {
			searchArticles(data);
		} else if (showBooks) {
			searchBooks(data);
		} else if (showMovies) {
			searchMovies(data);
		}
	};

	const bgImage =
		initialState || showArticles
			? articlesBackground
			: showBooks
			? booksBackground
			: moviesBackground;

	const placeholder =
		initialState || showArticles
			? 'e.g., covid-19...'
			: showBooks
			? 'e.g., Catch 22...'
			: 'e.g., Fight Club...';

	const label =
		initialState || showArticles
			? 'Keyword'
			: 'Title'

	const style = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.80)), url(${bgImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	return (
		<div className="search-form" style={style}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<RadioField register={register} />
				<KeywordField
					register={register}
					label={label}
					placeholder={placeholder}
				/>
				{(initialState || showArticles) && (
					<DateField register={register} />
				)}
				<div className="search-btn form-item">
					<button>
						<span>Search</span>
					</button>
				</div>
			</form>
		</div>
	);
};
