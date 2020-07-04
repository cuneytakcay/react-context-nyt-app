import React, { useContext } from 'react';
import { RadioField } from './RadioField';
import { KeywordField } from './KeywordField';
import { SourceField } from './SourceField';
import { DateField } from './DateField';
import { useForm } from 'react-hook-form';
import formBackground from './form-background.jpg';
import './SearchForm.css';
import ArticlesContext from '../../../context/articles/articlesContext';

export const SearchForm = () => {
	const { register, handleSubmit, watch } = useForm();
	const showKeywordField = watch('keywordPicker');
	const showCategoryField = watch('categoryPicker');
	const showSourcesField = watch('sourcePicker');

	const articlesContext = useContext(ArticlesContext);
	const { sources, searchArticle } = articlesContext;

	// Displays the keyword search field at the load of the page.
	let initialKeyword = true;
	if (watch('categoryPicker') || watch('sourcePicker'))
		initialKeyword = false;

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
				{(initialKeyword || showKeywordField) && (
					<KeywordField
						register={register}
						placeholder="e.g., covid-19..."
					/>
				)}
				{showCategoryField && (
					<KeywordField
						register={register}
						placeholder="e.g., business, technology..."
					/>
				)}
				{showSourcesField && (
					<SourceField sources={sources} register={register} />
				)}
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
