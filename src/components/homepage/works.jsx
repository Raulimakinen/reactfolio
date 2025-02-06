import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./soldem_logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Soldem</div>
							<div className="work-subtitle">
								Myynnillinen asiakaspalvelu
							</div>
							<div className="work-duration">2018 - 2020</div>
						</div>

						<div className="work">
							<img
								src="./buffetsisu.png"
								alt="facebook"
								className="work-image"
							/>
							
							<div className="work-title">Sisu Buffet</div>
							<div className="work-subtitle">
								Yrittäjä
							</div>
							<div className="work-duration">2014 - 2017</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
