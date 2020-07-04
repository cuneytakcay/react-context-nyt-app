import React from 'react';
import Moment from 'react-moment';

export const Article = ({
	article: { web_url, headline, multimedia, lead_paragraph, pub },
}) => {
	const img = `https://static01.nyt.com/${multimedia[0].url}`;

	const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${web_url}&amp;src=sdkpreparse`;
	const twShareLink = `https://twitter.com/intent/tweet?text=${headline.main} - ${web_url}`;

	return (
		<article>
			<div className="article-card">
				<div className="img-container">
					<a href={web_url} target="_blank" rel="noopener noreferrer">
						<img src={img} alt={headline.main} />
					</a>
				</div>
				<div className="text-container">
					<a href={web_url} target="_blank" rel="noopener noreferrer">
						<h3>{headline.main}</h3>
					</a>
					<span className="date">
						<Moment format="MMM DD, YYYY">{pub}</Moment>
					</span>
					<p>{lead_paragraph.substr(0, 200)}...</p>
					<div className="card-actions">
						<a
							className="btn read-btn"
							href={web_url}
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
