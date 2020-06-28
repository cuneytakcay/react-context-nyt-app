import React from 'react';

export const DateField = ({ register }) => {
	return (
		<div className="date form-item">
			<div>
				<label htmlFor="fromDate">From</label>
				<input
					type="date"
					name="firstDate"
					id="fromDate"
					ref={register}
				/>
			</div>
			<div>
				<label htmlFor="toDate">To</label>
				<input type="date" name="lastDate" id="toDate" ref={register} />
			</div>
		</div>
	);
};
