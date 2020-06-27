import React from 'react';
import { KeywordField } from './KeywordField';
import { SourceField } from './SourceField';
import { DateField } from './DateField';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

export const SearchForm = ({ sources, searchArticle }) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();
		searchArticle(data);
		// console.log(data)
	};

	return (
		<div className="search-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<KeywordField register={register} errors={errors} />
				<SourceField sources={sources} register={register} />
				<DateField register={register} />
				<div className="search-btn form-item">
					<button>Search</button>
				</div>
			</form>
		</div>
	);
};
