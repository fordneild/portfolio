import React from "react";
import "./About.scss";
import ProfilePhoto from "../../assets/portfolio_image.jpg";

export default function About() {
	return (
		<section className="about--container">
			<a href="about-section" id="about">
				{" "}
			</a>
			<div className="sheered">
				<div className="reverse-sheered">
					<h1>about</h1>
					<div className="about__content">
						<div className="about__content__column">
							<p>
								I'm Ford, a software engineer at Carta, a
								leading fintech firm bringing liquidity to
								private markets. I have a passion for solving
								problems, and coding enables me to develop
								solutions to provide value with
								speed and scale.
							</p>
							<div className="profile-picture--container">
								<img
									src={ProfilePhoto}
									draggable="false"
									alt="Ford Neild"
								/>
							</div>
						</div>
						<div className="about__content__column">
							<p>
								Before graduating from Johns Hopkins in 2021
								with a B.S. in Computer Science, I built
								beautiful single-page applications for the
								Atlantic, a sleek marketing web app for Way2B1,
								a production client onboarding tool at Komodo
								Health, and founded Memehub with my peers.
							</p>
							<p>
								From brainstorming aggressive product road maps,
								to creating a delightful UX and deploying
								scalable backend services, I think each problem
								presents its own unique and exciting challenges
								to solve.
							</p>
							<p>
								Now, I'm interested in growing my technical
								skills at Carta while finding new tedious tasks
								to automate in the investor service domain.
								Outside work, I am also interested in
								entrepreneurship, weight lifting, reading,
								Vipassanā, exploring new restaurants in NYC, and
								painting with Bob Ross.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
