import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RadioField } from './RadioField';
import { KeywordField } from './KeywordField';
import { DateField } from './DateField';
import formBackground from './form-background.jpg';
import './SearchForm.css';
import ArticlesContext from '../../../context/articles/articlesContext';

export const SearchForm = () => {
	const { register, handleSubmit } = useForm();

	const articlesContext = useContext(ArticlesContext);
	const { searchArticle } = articlesContext;

	const onSubmit = (data, e) => {
		e.preventDefault();
		searchArticle(data);
	};

	const style = {
		background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 1)), url(${formBackground})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	return (
		<div className="search-form" style={style}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<RadioField register={register} />
				<KeywordField
					register={register}
					placeholder="e.g., covid-19..."
				/>
				<DateField register={register} />
				<div className="search-btn form-item">
					<button>
						<span>Search</span>
					</button>
				</div>
			</form>
		</div>
	);
};
