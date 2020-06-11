import React from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

function Form() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<div className="search-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="keyword">
					<label for="keyword">Keyword</label>
					<input
						type="text"
						placeholder="e.g., covid-19"
						id="keyword"
						ref={register({ required: 'Please enter a keyword!' })}
					/>
					{errors.keyword && <span>{errors.keyword.message}</span>}
				</div>
				<div className="date">
					<div>
						<label for="fromDate">From</label>
						<input
							type="date"
							id="fromDate"
							ref={register}
						/>
					</div>
					<div>
						<label for="toDate">To</label>
						<input
							type="date"
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

export default Form;