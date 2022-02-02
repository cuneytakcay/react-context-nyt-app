import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const DateField = ({ register }) => {
	const [max, setMax] = useState(null)

	useEffect(() => {
		const today = new Date()
		setMax(moment(today).format('YYYY-MM-DD'))
	}, [])

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
					max={max}
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
					max={max}
				/>
			</div>
		</div>
	)
}
