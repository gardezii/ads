import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from '../../presentational/header'

// import 'bootstrap/dist/css/bootstrap.css'

class Home extends Component {
	render() {
		return <Header />
	}
}

export default Home

const wrapper = document.getElementById("react-app");
ReactDOM.render(<Home />, wrapper)