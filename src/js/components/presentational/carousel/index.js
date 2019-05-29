import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel';

class Carousel extends Component {
	render() {
		const {children} = this.props
		return (
			<div className="screen-box screen-slider">
				<OwlCarousel
				    loop
		    		margin
		    		responsiveClass
		    		nav
		    		autoplay
		    		autoplayTimeout={4000}
		    		smartSpeed={1000}
		    		items={1}
		    		animateIn='fadeIn'
		    		animateOut='fadeOut'
		    		center
		    		navText={['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>']}
				>
				    {children}
				</OwlCarousel>
			</div>
		)
	}
}

export default Carousel