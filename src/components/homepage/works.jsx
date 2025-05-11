import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Viimeaikaiset kuulumiset"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./tamko.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Tamko - nettisivujen uudistusprojekti</div>
							<div className="work-subtitle">
								Kevätlukukaudella 2025 aloitimme kolmen hengen tiimin voimin opiskelijakunta Tamko:n nettisivujen uudistusprojektin.
							</div>
							
						</div>

						<div className="work">
							<img
								src="./fullstack.jpg"
								alt="facebook"
								className="work-image"
							/>
							
							<div className="work-subtitle">
  Tsekkaa <a
    href="https://public-tests.onrender.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-link"
  >täältä</a> keväällä 2025 aloittamani fullstack-projekti!
</div>
							<div className="work-duration"></div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
