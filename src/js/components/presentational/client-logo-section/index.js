/* global require, module */

import React, {Component} from 'react'

import ShowMoreOrLess from '../show-more-or-less'

const reqSvgs = require.context( './client-logos/', false, /\.png$/ )

import styles from './styles.styl'

class ClientLogoSection extends Component {
	render() {

		const paths = reqSvgs.keys ()
		const svgs = paths.map( path => reqSvgs ( path ) )

		return (
			<div className={styles['client-logos']}>
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-12">
							<ShowMoreOrLess items={svgs} perRowElements={4} row={2}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ClientLogoSection