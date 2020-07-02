import React from 'react';
import Moment from 'react-moment';
import noImage from './noImage.png';

export const Article = ({
	article: { url, title, urlToImage, description, publishedAt },
}) => {
	const img = (urlToImage === "null" || urlToImage === null) ? noImage : urlToImage;

	return (
		<article>
			<div className="article-card">
				<div className="img-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={img} alt={title} />
					</a>
				</div>
				<div className="text-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<h3>{title}</h3>
					</a>
					<span className="date">
						<Moment format="MMM DD, YYYY">{publishedAt}</Moment>
					</span>
					<p>{description}</p>
					<div className="card-actions">
						<a
							className="btn read-btn"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								Read
								<i
									className="fab fa-readme"
									aria-hidden="true"
								/>
							</span>
						</a>
					</div>
				</div>
			</div>
		</article>
	);
};
