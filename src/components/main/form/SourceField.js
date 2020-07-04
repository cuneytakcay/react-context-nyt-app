import React, { useContext } from 'react';
import ArticlesContext from '../../../context/articles/articlesContext';

export const SourceField = ({ register }) => {
	const articlesContext = useContext(ArticlesContext);
	const { sources } = articlesContext;

	return (
		<div className="source-dd form-item">
			<label htmlFor="source">Source</label>
			<select name="source" id="source" ref={register}>
				{sources.map(source => (
					<option key={source.id} value={source.id}>
						{source.name}
					</option>
				))}
			</select>
		</div>
	);
};
