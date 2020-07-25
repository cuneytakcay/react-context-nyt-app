import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RadioField } from './RadioField';
import { KeywordField } from './KeywordField';
import { DateField } from './DateField';
import articlesBackground from '../articles-background.jpg';
import booksBackground from '../books-background.jpg';
import './SearchForm.css';
import ArticlesContext from '../../../context/articles/articlesContext';
import BooksContext from '../../../context/books/booksContext';

export const SearchForm = () => {
	const { register, handleSubmit, watch } = useForm();

	const showArticles = watch('articlesPicker');
	const showBooks = watch('booksPicker');

	const articlesContext = useContext(ArticlesContext);
	const { searchArticles } = articlesContext;

	const booksContext = useContext(BooksContext);
	const { searchBooks } = booksContext;

	// Displays the articles search field at the load of the page.
	let initialState = true;
	if (showBooks) initialState = false;

	const onSubmit = (data, e) => {
		e.preventDefault();
		if (initialState || showArticles) {
			searchArticles(data);
		} else if (showBooks) {
			searchBooks(data);
		}
	};

	const bgImage =
		initialState || showArticles
			? articlesBackground
			: showBooks
			? booksBackground
			: undefined;

	const placeholder =
		initialState || showArticles
			? 'e.g., covid-19...'
			: showBooks
			? 'e.g., Catch 22...'
			: undefined;

	const label =
		initialState || showArticles
			? 'Keyword'
			: showBooks
			? 'Title'
			: undefined;

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
				{(initialState || showArticles) && <DateField register={register} />}
				<div className="search-btn form-item">
					<button>
						<span>Search</span>
					</button>
				</div>
			</form>
		</div>
	);
};
