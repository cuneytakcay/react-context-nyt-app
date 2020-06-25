import React from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

export const SearchForm = ({ searchArticle }) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();
		searchArticle(data);
	};

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
						ref={register({ required: '!' })}
					/>
					{/* {errors.keyword && (
						<span className="form-error">
							<span className="trig">&#9650;</span>
							<span className="exc">&#33;</span>
							{errors.keyword.message}
						</span>
					)} */}
					{errors.keyword && (<span className="keyword-error"><span className="exc">{errors.keyword.message}</span></span>)}
				</div>
				<div className="date">
					<div>
						<label htmlFor="fromDate">From</label>
						<input
							type="date"
							name="firstDate"
							id="fromDate"
							ref={register}
						/>
					</div>
					<div>
						<label htmlFor="toDate">To</label>
						<input
							type="date"
							name="lastDate"
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
	);
};
