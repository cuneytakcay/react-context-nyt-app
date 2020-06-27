import React from 'react';
import Moment from 'react-moment';

export const Article = ({
	article: { url, title, urlToImage, description, publishedAt },
}) => {
	return (
		<article>
			<div className="article-card">
				<div className="img-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt={title} />
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
							Read
							<i className="fab fa-readme" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</article>
	);
};
