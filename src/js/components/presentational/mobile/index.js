import React, {Component, Fragment} from 'react'
import Spinner from 'react-spinkit'
import cn from 'classnames'

// import ImageOne from 'images/game-1.png'

import styles from './styles.styl'

class Mobile extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	showIframe: false,
	    	startGame: false,
	    }
  	}

	// state = {
	// 	showIframe: false
	// }

	showIframe = () => {
		if (this.props.iframelink) {
			this.setState({
				showIframe: true
			})
		}
	}

	startGame = () => {
		this.setState({
			startGame: true
		})
	}

	render() {
		const {
			imageSrc,
			iframelink,
			backgroundImage,
		} = this.props

		const {
			showIframe,
			startGame
		} = this.state


		return (
			!iframelink 
				? (
					<div className={styles['item']}>
						<img src={imageSrc} />
					</div>
				)
				: (
					<div className={styles['mobile-iframe-container']}>
						<br/>
						<img 
							src="https://image.ibb.co/ntDx5f/telefonsifir.png" 
							className={styles['iframe-mobile-image']} 
						/>

						{
							!startGame && (
								<div onClick={this.startGame}>
									<img src={backgroundImage} className={cn(styles['iframe-try-me-image'], styles['background-image-opacity'])} />
									<img className={cn(styles["grow-anim"], styles['iframe-try-me-image'])} src="https://playablefactory.com/assets/images/kirmizi.png" />
								</div>
							)
						}

						<br/>
						{
							startGame && !showIframe && (
								<div className={cn(styles['mobile-iframe'], styles['mobile-spinner'])}>
									<Spinner name='Loading'/>
								</div>
							)
						}
						<br/>
						{
							startGame && (
								<iframe
									className={styles['mobile-iframe']}
									src={iframelink}
									width="280"
									height="500"
									scrolling="none"
									frameborder="0"
									onLoad={this.showIframe}
								/>
							)
						}
					</div>
				)
		)
	}
}

export default Mobile