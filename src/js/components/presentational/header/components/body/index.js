import React, {Component} from 'react'
import cn from 'classnames'

import Carousel from '../../../carousel'
import Mobile from '../../../mobile'

import styles from './styles.styl'

class Body extends Component {
	render() {
		return (
			<div
				className={cn(
					styles['header-area'],
					styles['overlay'],
					styles['full-height'], 
					styles['v-center'],
					styles['header-content']
				)}
				id="home-page"
			>
				<div className="container">
					<div className={cn(styles['v-center'], styles['text-white'], 'row')}>
						<div className="col-xs-12 col-md-7 header-text">
							<h2>It’s all about Promoting your Business</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ex inventore vel error quibusdam 
								animi fugiat, doloribus dolores consectetur nulla deleniti sint blanditiis quod debitis quis vitae
								officiis tempora numquam.
							</p>
						</div>
						<div className="hidden-xs hidden-sm col-md-5 text-right">
							<Carousel>
								<Mobile imageSrc="https://colorlib.com/etc/colid/images/screen-1.jpg" key={1}/>
								<Mobile imageSrc="https://colorlib.com/etc/colid/images/screen-2.jpg" key={2}/>
								<Mobile imageSrc="https://colorlib.com/etc/colid/images/screen-3.jpg" key={3}/>
								<Mobile imageSrc="https://colorlib.com/etc/colid/images/screen-4.jpg" key={4}/>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Body