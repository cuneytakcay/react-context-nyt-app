import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	}

	return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
				type="text"
				placeholder="Keyword..."
				name="keyword"
				ref={register({ required: 'Please enter a keyword!' })}
            />
			{errors.keyword && <span>{errors.keyword.message}</span>}
            <input
				type="date"
				name="fromDate"
				ref={register}
			/>
			<input
				type="date"
				name="toDate"
				ref={register}
			/>
            <button>Search</button>
        </form>
    )
}

export default Form;