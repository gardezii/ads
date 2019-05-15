import React, {Component} from 'react'

import Head from './components/head'
import Body from './components/body'

import styles from './styles.styl'

class Header extends Component {
	render() {
		return (
			<div className={`${styles['header-background']} ${styles['header-positioning']}`}>
				<Head/>
			</div>
		)
	}
}

export default Header