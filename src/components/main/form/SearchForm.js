import React, { useContext } from 'react';
import { KeywordField } from './KeywordField';
import { SourceField } from './SourceField';
import { DateField } from './DateField';
import { useForm } from 'react-hook-form';
import './SearchForm.css';
import AppContext from '../../../context/appContext';

export const SearchForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const appContext = useContext(AppContext);

	const { sources, searchArticle } = appContext;

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
