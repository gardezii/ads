import React, {Component, Fragment} from 'react'
import cn from 'classnames'

import styles from './styles.styl'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles['address-section']}>
                    <div className="container">
                        <div
                            className={cn(styles['footer-container'], styles['flex-vertical-horizontal-center'], 'row')}
                        >
                            <div className={cn(styles['footer-container-div'], "col-sm-12 col-md-12 col-lg-12")}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <h1 className={cn(styles['addres-container'], 'latoBold')}>Addresses</h1>
                                        <ul className={styles['address-ul']}>
                                            <li className={styles['city']}>
                                                <a
                                                    href="https://tintash.com/location/lahore-office"
                                                    className={styles['city']}
                                                    target="_blank"
                                                >
                                                    <span className="latoRegular">Lahore,</span>&nbsp;<span
                                                    className="latoBold">Pakistan</span>
                                                </a>
                                            </li>
                                            <li className={styles['city']}>
                                                <a
                                                    href="https://tintash.com/location/islamabad-office"
                                                    className={styles['city']}
                                                    target="_blank"
                                                >
                                                    <span className="latoRegular">Islamabad,</span>&nbsp;<span
                                                    className="latoBold">Pakistan</span>
                                                </a>
                                            </li>
                                            <li className={styles['city']}>
                                                <a
                                                    href="https://tintash.com/location/usa-office"
                                                    className={styles['city']}
                                                    target="_blank"
                                                >
                                                    <span className="latoRegular">Raleigh,</span>&nbsp;<span
                                                    className="latoBold">USA</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tintash.com/location/canada-office"
                                                    className={styles['city']}
                                                    target="_blank"
                                                >
                                                    <span className="latoRegular">Toronto,</span>&nbsp;<span
                                                    className="latoBold">Canada</span>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className={cn(styles['come-work-with-us'], 'col-lg-4 col-md-6  mb-5')}>
                                        <h1 className={cn(styles['addres-container'], 'latoBold')}>
                                            Come work with us!
                                        </h1>
                                        <p className={styles['come-work-with-us-description']}>
                                            We are always looking for great people with talent to join our teams.
                                        </p>
                                        <a className={styles['come-work-with-us-description-careers']}>
                                            <b>Careers</b>
                                        </a>
                                    </div>

                                    <div className={cn(styles['social-links'], "col-lg-4 col-md-6 ")}>
                                        <h1 className={cn(styles['addres-container'], 'latoBold')}>
                                            Social
                                        </h1>
                                        <a href="https://facebook.com/Tintash" target="_blank">
                                            <img
                                                src="https://tintash.com/images/header-footer/social/facebook-icon.svg"
                                                alt="Tintash facebook"
                                            />
                                        </a>
                                        <a
                                            href="https://twitter.com/TintashApps"
                                            target="_blank"
                                            className={styles['social-twitter']}
                                        >
                                            <img
                                                src="https://tintash.com/images/header-footer/social/twitter-Icon.svg"
                                                alt="Tintash twitter"
                                            />
                                        </a>
                                        <a href="https://www.linkedin.com/company/241494" target="_blank">
                                            <img
                                                src="https://tintash.com/images/header-footer/social/linkedin-Icon.svg"
                                                alt="Tintash linkedin"
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={cn(styles['bottom-bar'], 'clearfix')}>
                    <div className={cn(styles['h-100'], 'container')}>
                        <div
                            className={cn(styles['copyright-footer'], styles['flex-vertical-horizontal-center'], 'row')}
                        >
                            <div >
                                <p className={cn(styles['copy-right'], 'latoBold')}>
                                    Copyright 2019 Tintash - All Rights Reserved
                                </p>
                                <div className={styles['break']}>
                                    <br/>
                                </div>

                                <a className={styles['privacy']} href="https://tintash.com/privacy">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Footer