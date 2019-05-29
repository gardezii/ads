import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

import Header from '../../presentational/header'
import PlayableAds from '../../presentational/playable-ads'
import ClientLogoSection from '../../presentational/client-logo-section'
import Journey from '../../presentational/journey'
import Footer from '../../presentational/footer'

import styles from './styles.styl'

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div id="service-page">
					<ClientLogoSection />
					<Journey />
				</div>
				<div id="ads">
					<PlayableAds />
				</div>
				<Footer />
			</Fragment>
		)
	}
}

export default Home

const wrapper = document.getElementById("react-app");
ReactDOM.render(<Home />, wrapper)