import React, {Component} from 'react'
import cn from 'classnames'

import styles from './styles.styl'

class Journey extends Component {
	render() {
		return (
			<div
				className={cn(styles['numbers-section'], styles['journey-container'])}
				style={{
					paddingBottom: '3rem',
				}}
			>
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-12">
							<h1 className={styles['journey-heading']}>Our Journey so far</h1>
							<div className={styles['journey-description']}>
                    			Since 2007, we have helped a number of start-ups and big brands convert their digital ideas into engaging, feature rich apps and games.
							</div>
							<div className={cn(styles['journey-number'], 'row')}>
								<div className={cn(styles['journey-number-detail'], 'col-sm-12 col-lg-4')}>
									<div className={cn(styles['journey-box'], styles['d-flex'], styles['flex-row'])}>
										<div style={{flex:4}}>
											<h2 className={cn(styles['journey-box-title'])}> 80+</h2>
											<h2 className={cn(styles['journey-box-description'])}>Projects Delivered</h2>
										</div>
										<div style={{flex: 1}} className={styles['flex-vertical-horizontal-center']}>
											<img
												width="60"
												height="60"
												src="https://tintash.com/images/home-page/graphs/project-delivered-icon.svg"
												alt="project-delivered"
											/>
										</div>
									</div>
								</div>

								<div className={cn(styles['journey-number-detail'], 'col-sm-12 col-lg-4')}>
									<div className={cn(styles['journey-box'], styles['d-flex'], styles['flex-row'])}>
										<div style={{flex: 4}}>
											<h2 className={cn(styles['journey-box-title'])}> 100+</h2>
											<h2 className={cn(styles['journey-box-description'])}>Strong Team </h2>
										</div>
										<div style={{flex: 1}} className={styles['flex-vertical-horizontal-center']}>
											<img
												width="60"
												height="60"
												src="https://tintash.com/images/home-page/graphs/strong-team-icon.svg"
												alt="strong team"
											/>
										</div>
									</div>
								</div>

								<div className={cn(styles['journey-number-detail'], 'col-sm-12 col-lg-4')}>
									<div className={cn(styles['journey-box'], styles['d-flex'], styles['flex-row'])}>
										<div style={{flex: 4}}>
											<h2 className={cn(styles['journey-box-title'])}> $750M</h2>
											<h2 className={cn(styles['journey-box-description'])}>
												Raised by Clients
											</h2>
										</div>
										<div style={{flex: 1}} className={styles['flex-vertical-horizontal-center']}>
											<img
												width="60"
												height="60"
												src="https://tintash.com/images/home-page/graphs/raised-by-clients.svg"
												alt="raised-by-clients"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> 
		)
	}
}

export default Journey