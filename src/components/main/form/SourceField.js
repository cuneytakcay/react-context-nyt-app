import React from 'react';

export const SourceField = ({ sources, register }) => {
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
