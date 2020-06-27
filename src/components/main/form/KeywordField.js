import React from 'react';

export const KeywordField = ({ register, errors }) => {
	return (
		<div className="keyword form-item">
			<label htmlFor="keyword">Keyword</label>
			<input
				type="text"
				name="keyword"
				placeholder="e.g., covid-19"
				id="keyword"
				ref={register({ required: '!' })}
			/>
			{errors.keyword && (
				<span className="keyword-error">
					<span className="exc">{errors.keyword.message}</span>
				</span>
			)}
		</div>
	);
};
