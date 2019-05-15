import React, {Component} from 'react'

import styles from './styles.styl'

class Body extends Component {
	render() {
		return (
			<div className="header-area overlay full-height relative v-center">
				<div className="container">
					<div className={`${styles['header-content']} row`}>
						<div className="col-xs-12 col-md-7 header-text">
							<h2>It’s all about Promoting your Business</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ex inventore vel error quibusdam 
								animi fugiat, doloribus dolores consectetur nulla deleniti sint blanditiis quod debitis quis vitae
								officiis tempora numquam.
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Body