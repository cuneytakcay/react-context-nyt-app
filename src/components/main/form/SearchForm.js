import React, { useContext } from 'react';
import { RadioField } from './RadioField';
import { KeywordField } from './KeywordField';
import { SourceField } from './SourceField';
import { DateField } from './DateField';
import { useForm } from 'react-hook-form';
import './SearchForm.css';
import AppContext from '../../../context/appContext';

export const SearchForm = () => {
	const { register, handleSubmit, errors, watch } = useForm();
	const showKeywordField = watch('keywordPicker');
	const showCategoryField = watch('categoryPicker');
	const showSourcesField = watch('sourcePicker');

	const appContext = useContext(AppContext);
	const { sources, searchArticle } = appContext;

	// Displays the keyword search field at the load of the page.
	let initialKeyword = true;
	if (watch('categoryPicker') || watch('sourcePicker'))
		initialKeyword = false;

	const onSubmit = (data, e) => {
		e.preventDefault();
		searchArticle(data);
	};

	return (
		<div className="search-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<RadioField register={register} />
				{(initialKeyword || showKeywordField) && (
					<KeywordField
						register={register}
						errors={errors}
						placeholder="e.g., covid-19..."
					/>
				)}
				{showCategoryField && (
					<KeywordField
						register={register}
						errors={errors}
						placeholder="e.g., business, technology..."
					/>
				)}
				{showSourcesField && (
					<SourceField
						sources={sources}
						register={register}
					/>
				)}
				<DateField register={register} />
				<div className="search-btn form-item">
					<button><span>Search</span></button>
				</div>
			</form>
		</div>
	);
};
