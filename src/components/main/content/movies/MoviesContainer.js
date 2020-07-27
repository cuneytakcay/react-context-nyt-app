import React, { useContext, Fragment } from 'react';
import { Movie } from './Movie';
import { Spinner } from '../Spinner';
import MoviesContext from '../../../../context/movies/moviesContext';
import '../Content.css';

export const MoviesContainer = () => {
	const moviesContext = useContext(MoviesContext);
	const { title, movies, loading } = moviesContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<h2>{title}</h2>
				<div className="content-container">
					{movies.map((movie, index) => {
						return <Movie key={index} movie={movie} />;
					})}
				</div>
			</Fragment>
		);
	}
};
