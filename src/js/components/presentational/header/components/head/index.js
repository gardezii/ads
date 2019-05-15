import React, {Component} from 'react'

import styles from './styles.styl'

class Head extends Component {
	render() {
		return (
			<div className={`${styles['mainmenu-area']} ${styles['affix']}`} data-spy="affix" data-offset-top="100">
				<div className="container">
		        	<div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#primary-menu">
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a href="#" className="navbar-brand logo">
		                    <h2>colid</h2>
		                </a>
		            </div>
		           
		            <nav className="collapse navbar-collapse" id="primary-menu">
		                <ul className="nav navbar-nav navbar-right">
		                    <li className="active"><a href="#home-page">Home</a></li>
		                    <li className=""><a href="#service-page">Service</a></li>
		                    <li className=""><a href="#feature-page">Features</a></li>
		                    <li><a href="#price-page">Pricing</a></li>
		                    <li className=""><a href="#team-page">Team</a></li>
		                    <li><a href="#faq-page">FAQ</a></li>
		                    <li><a href="#blog-page">Blog</a></li>
		                    <li><a href="#contact-page">Contact</a></li>
		                </ul>
		            </nav>
	        	</div>
        	</div>
		)
	}
}

export default Head