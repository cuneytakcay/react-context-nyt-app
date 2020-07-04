import React from 'react';

export const KeywordField = ({ register, placeholder }) => {
	return (
		<div className="keyword form-item">
			<label htmlFor="keyword">Keyword</label>
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
