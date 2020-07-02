import React from 'react';
import Moment from 'react-moment';
import noImage from './noImage.png';

export const Article = ({
	article: { url, title, urlToImage, description, publishedAt },
}) => {
	const img =
		urlToImage === 'null' || urlToImage === null ? noImage : urlToImage;

	const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`;
	const twShareLink = `https://twitter.com/intent/tweet?text=${title} - ${url}`;

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
