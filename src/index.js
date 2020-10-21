import React from "react";
import { render } from "react-dom";
import SocialBadge from "./ReactSocialBadge";

const App = () => {
	return (
		<div>
			<div style={{ display: "block" }}>
				<SocialBadge size="small" url="http://github.com/mackiedrew" />
				<SocialBadge url="http://twitter.com/mackiedrew" />
				<SocialBadge size="large" url="http://ca.linkedin.com/in/mackiedrew" />
				<SocialBadge iconColor="gold" size="150" url="http://bitbucket.com/" />
			</div>
			<div style={{ display: "block" }}>
				<SocialBadge
					size="large"
					iconColor="white"
					badgeColor="orange"
					badgeStyle={{ borderRadius: "20px" }}
					url="http://reddit.com/r/ducks"
				/>
				<SocialBadge
					iconScale={1.9}
					size="large"
					iconColor="#3b5998"
					badgeColor="white"
					url="http://facebook.com/mackiedrew"
				/>
				<SocialBadge
					badgeColor="#00aced"
					size="large"
					url="http://twitter.com/mackiedrew"
				/>
				<SocialBadge
					iconScale={1.3}
					badgeColor="rgba(0,0,0,0)"
					iconColor="rgb(187, 0, 0)"
					size="large"
					url="http://youtube.com/"
				/>
			</div>
		</div>
	);
};

render(<App />, document.getElementById("root"));
