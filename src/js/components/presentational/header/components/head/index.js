import React, {Component} from 'react'
import cn from 'classnames'

import styles from './styles.styl'

class Head extends Component {

	constructor(props) {
	    super(props);
	    this.state = {backgroundColor: '', color: '', tintashLogo: ''}
  	}

	listenScrollEvent = e => {
	    if (window.scrollY > 200) {
	      	this.setState({
				backgroundColor: '#ffffff',
	      		color: 'grey',
				tintashLogo: 'https://tintash.com/images/header-footer/Tintash Logo.png'
	      	})
	    } else if (window.scrollY <= 200) {
	    	this.setState({
				backgroundColor: '',
				tintashLogo: 'https://tintash.com/images/header-footer/Tintash-logo-hd.png',
				color: '#ffffff'
	    	})
	    }
  	}

  	componentDidMount() {
    	window.addEventListener('scroll', this.listenScrollEvent)
  	}

	render() {
		return (
			<div
				className={
					cn(
						styles['mainmenu-area'],
						styles['affix']
					)
				}
			 	style={{backgroundColor: this.state.backgroundColor}}
			 	data-spy="affix"
			 	data-offset-top="100"
			>
				<div className="container">
		        	<div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#primary-menu">
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a href="#" className={cn(styles['logo-spacing'],'navbar-brand logo')}>
							<img
								width="140"
								id="logo"
								className="img-fluid navbar-logo show"
							 	src={this.state.tintashLogo}
								alt="Tintash Logo"
							/>
		                </a>
		            </div>
		           
		            <nav className="collapse navbar-collapse" id="primary-menu">
		                <ul className="nav navbar-nav navbar-right">
		                    <li className="active">
								<a href="#home-page" style={{color: this.state.color}}>Home</a>
		                    </li>
		                    <li className="" >
								<a href="#service-page" style={{color: this.state.color}}>Service</a>
		                    </li>
							<li className="" >
								<a href="#ads" style={{color: this.state.color}}>Ads</a>
							</li>
		                </ul>
		            </nav>
	        	</div>
        	</div>
		)
	}
}

export default Head