import React, { useState } from 'react';

export const RadioField = ({ register }) => {
	const [articles, setArticles] = useState(true);
	const [books, setBooks] = useState(false);

	const handleArticles = () => {
		setArticles(true);
		setBooks(false);
	};

	const handleBooks = () => {
		setArticles(false);
		setBooks(true);
	};

	return (
		<fieldset>
			<legend>Search for:</legend>
			<div className="radio form-item">
				<div>
					<label htmlFor="radioArticles">Articles</label>
					<input
						type="radio"
						name="articlesPicker"
						id="radioArticles"
						ref={register}
						value="articles"
						onChange={handleArticles}
						checked={articles}
					/>
				</div>
				<div>
					<label htmlFor="radioBooks">Books</label>
					<input
						type="radio"
						name="booksPicker"
						id="radioBooks"
						ref={register}
						value="books"
						onChange={handleBooks}
						checked={books}
					/>
				</div>
			</div>
		</fieldset>
	);
};
