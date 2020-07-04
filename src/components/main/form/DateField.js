import React from 'react';

export const DateField = ({ register }) => {
	return (
		<div className="date form-item">
			<div>
				<label htmlFor="beginDate">From</label>
				<input
					type="date"
					name="beginDate"
					id="beginDate"
					ref={register}
					required
				/>
			</div>
			<div>
				<label htmlFor="endDate">To</label>
				<input
					type="date"
					name="endDate"
					id="endDate"
					ref={register}
					required
				/>
			</div>
		</div>
	);
};
