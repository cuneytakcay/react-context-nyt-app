import React from 'react';
import noImage from '../../movies-background.jpg';

export const Movie = ({ movie }) => {
	const img = movie.movie_image || noImage;
	const url = movie.amazon_product_url || movie.url;
	const title = movie.title || movie.movie_title;
	const description = movie.description || movie.summary;
	const author = movie.author || movie.movie_author;

	const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`;
	const twShareLink = `https://twitter.com/intent/tweet?text=${title} - ${url}`;

	return (
		<article>
			<div className="card">
				<div className="img-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={img} alt={title} />
					</a>
				</div>
				<div className="text-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<h3>{title}</h3>
					</a>
					<span className="date">{author}</span>
					<p>{description}</p>
					<div className="card-actions">
						<a
							className="btn read-btn"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{movie.amazon_product_url && (
								<span>
									Buy
									<i
										className="fas fa-credit-card"
										aria-hidden="true"
									/>
								</span>
							)}
							{movie.url && <span>Learn More</span>}
						</a>
						<div className="btn share-btn">
							<span className="share">
								Share
								<i
									className="fas fa-share"
									aria-hidden="true"
								/>
							</span>
							<div className="fb-tw">
								<a
									className="fb"
									href={fbShareLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fab fa-facebook-f"
										aria-hidden="true"
									></i>
								</a>
								<a
									className="tw"
									href={twShareLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fab fa-twitter"
										aria-hidden="true"
									></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
