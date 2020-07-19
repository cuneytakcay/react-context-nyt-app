import React from 'react';

export const KeywordField = ({ register, label, placeholder }) => {
	return (
		<div className="keyword form-item">
			<label htmlFor="keyword">{label}</label>
			<input
				type="text"
				name="keyword"
				placeholder={placeholder}
				id="keyword"
				ref={register}
				required
			/>
		</div>
	);
};
