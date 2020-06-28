import React, { useContext } from 'react';
import AppContext from '../../../context/appContext';

export const SourceField = ({ register }) => {
	const appContext = useContext(AppContext);
	const { sources } = appContext;
	
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
