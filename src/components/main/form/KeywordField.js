import React from 'react';

export const KeywordField = ({ register, errors, placeholder }) => {
	return (
		<div className="keyword form-item">
			<label htmlFor="keyword">Keyword</label>
			<input
				type="text"
				name="keyword"
				placeholder={placeholder}
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
