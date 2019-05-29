import React, {Component, Fragment} from 'react'

import Head from './components/head'
import Body from './components/body'

import styles from './styles.styl'

class Header extends Component {
	render() {
		return (
			<Fragment>
				<Head/>
				<Body/>
			</Fragment>
		)
	}
}

export default Header