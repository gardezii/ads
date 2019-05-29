import React, {Component} from 'react'
import cn from 'classnames'

import Mobile from '../mobile'
import Separator from '../separator'

import ImageOne from 'images/game-1.png'
import ImageTwo from 'images/game-2.png'
import ImageThird from 'images/game-3.png'

import styles from './styles.styl'

class PlayableAds extends Component {
	render() {
		const playableAdslinks = [
			'https://tarzan-swinger.herokuapp.com/index.html',
			'https://word-bound.herokuapp.com/index.html',
			'https://word-collect.herokuapp.com/index.html'
		]
		return (
			<div className={cn(styles['custom-module'], 'text-center')}>
				<div className="container">
					<div className={cn(styles['container-padding'], 'row')}>
						<div className="module-caption col-md-12 text-center">
							<h2> Our Latest Work</h2>
							<p> Click to Try Our Playables</p>
							<Separator size="sm" color="white"/>
							<div className={styles['spacer']}></div>
						</div>

						<div className={cn(styles['content-box'], 'col-md-12')}>
							<Mobile 
								imageSrc="https://colorlib.com/etc/colid/images/screen-1.jpg" 
								iframelink="https://tarzan-swinger.herokuapp.com/index.html" 
								backgroundImage={ImageOne} 
							/>
							<Mobile 
								imageSrc="https://colorlib.com/etc/colid/images/screen-1.jpg" 
								iframelink="https://word-bound.herokuapp.com/index.html" 
								backgroundImage={ImageTwo} 
							/>
							<Mobile 
								imageSrc="https://colorlib.com/etc/colid/images/screen-1.jpg" 
								iframelink="https://word-collect.herokuapp.com/index.html" 
								backgroundImage={ImageThird} 
							/>
						</div>
					</div>
				</div>		
			</div>
		)
	}
}

export default PlayableAds