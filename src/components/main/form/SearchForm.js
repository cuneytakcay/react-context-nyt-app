import React from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

export const SearchForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<div className="search-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="keyword">
					<label htmlFor="keyword">Keyword</label>
					<input
						type="text"
						name="keyword"
						placeholder="e.g., covid-19"
						id="keyword"
						ref={register({ required: 'Please enter a keyword!' })}
					/>
					{errors.keyword && <span>{errors.keyword.message}</span>}
				</div>
				<div className="date">
					<div>
						<label htmlFor="fromDate">From</label>
						<input
							type="date"
							name="date"
							id="fromDate"
							ref={register}
						/>
					</div>
					<div>
						<label htmlFor="toDate">To</label>
						<input
							type="date"
							name="date"
							id="toDate"
							ref={register}
						/>
					</div>
				</div>
				<div className="search-btn">
					<button>Search</button>
				</div>
			</form>
		</div>
	)
}