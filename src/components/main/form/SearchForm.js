import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RadioField } from './RadioField';
import { KeywordField } from './KeywordField';
import { DateField } from './DateField';
import articlesBackground from './articles-background.jpg';
import booksBackground from './books-background.jpg';
import './SearchForm.css';
import ArticlesContext from '../../../context/articles/articlesContext';

export const SearchForm = () => {
	const { register, handleSubmit, watch } = useForm();

	const showArticles = watch('articlesPicker');
	const showBooks = watch('booksPicker');

	const articlesContext = useContext(ArticlesContext);
	const { searchArticles } = articlesContext;

	// Displays the articles search field at the load of the page.
	let initialKeyword = true;
	if (showBooks) initialKeyword = false;

	const onSubmit = (data, e) => {
		e.preventDefault();
		searchArticles(data);
	};

	const bgImage =
		initialKeyword || showArticles
			? articlesBackground
			: showBooks
			? booksBackground
			: undefined;

	const placeholder =
		initialKeyword || showArticles
			? 'e.g., covid-19...'
			: showBooks
			? 'e.g., Catch 22...'
			: undefined;

	const label =
		initialKeyword || showArticles
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
				<KeywordField register={register} label={label} placeholder={placeholder} />
				{showArticles && <DateField register={register} />}
				<div className="search-btn form-item">
					<button>
						<span>Search</span>
					</button>
				</div>
			</form>
		</div>
	);
};
