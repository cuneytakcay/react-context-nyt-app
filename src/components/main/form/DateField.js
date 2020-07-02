import React from 'react';

export const DateField = ({ register }) => {
	return (
		<div className="date form-item">
			<div>
				<label htmlFor="fromDate">From</label>
				<input
					type="date"
					min="2020-06-01"
					name="firstDate"
					id="fromDate"
					ref={register}
				/>
			</div>
			<div>
				<label htmlFor="toDate">To</label>
				<input
					type="date"
					min="2020-06-01"
					name="lastDate"
					id="toDate"
					ref={register}
				/>
			</div>
		</div>
	);
};
