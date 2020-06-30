import React from 'react';

export const RadioField = ({ register }) => {
	return (
		<fieldset>
			<legend>Search By:</legend>
			<div className="radio form-item">
				<div>
					<label htmlFor="radioKey">Keyword</label>
					<input
						type="radio"
						name="keywordPicker"
						id="radioKey"
						ref={register}
						defaultChecked
					/>
				</div>
				<div>
					<label htmlFor="radioCat">Category</label>
					<input
						type="radio"
						name="categoryPicker"
						id="radioCat"
						ref={register}
					/>
				</div>
				<div>
					<label htmlFor="radioSource">Source</label>
					<input
						type="radio"
						name="sourcePicker"
						id="radioSource"
						ref={register}
					/>
				</div>
			</div>
		</fieldset>
	);
};
