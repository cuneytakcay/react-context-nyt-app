import React, { useState } from 'react';

export const RadioField = ({ register }) => {
	const [keyword, setKeyword] = useState(true);
	const [category, setCategory] = useState(false);
	const [source, setSource] = useState(false);

	const handleKeyword = e => {
		setKeyword(true);
		setCategory(false);
		setSource(false);
	};

	const handleCategory = e => {
		setKeyword(false);
		setCategory(true);
		setSource(false);
	};

	const handleSource = e => {
		setKeyword(false);
		setCategory(false);
		setSource(true);
	};

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
						value="keyword"
						onChange={handleKeyword}
						checked={keyword}
					/>
				</div>
				<div>
					<label htmlFor="radioCat">Category</label>
					<input
						type="radio"
						name="categoryPicker"
						id="radioCat"
						ref={register}
						value="category"
						onChange={handleCategory}
						checked={category}
					/>
				</div>
				<div>
					<label htmlFor="radioSource">Source</label>
					<input
						type="radio"
						name="sourcePicker"
						id="radioSource"
						ref={register}
						value="source"
						onChange={handleSource}
						checked={source}
					/>
				</div>
			</div>
		</fieldset>
	);
};
