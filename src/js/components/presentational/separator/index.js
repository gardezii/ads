import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import parseStylusExport from 'common_utils/parse_stylus_export'

import styles from './styles.styl'

const stylesVariable = parseStylusExport(styles)

export default function Separator({className, size, color}) {
    return <div className={cn(styles[`separator--${size}--${color}`], className)} />
}

Separator.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
}

Separator.defaultProps = {
    size: 'md',
    color: 'lightBlueGrey',
}

Object.keys(stylesVariable.separatorSizes).forEach(separatorSize => {
    Separator[separatorSize] = props => ( // eslint-disable-line react/display-name
        <Separator size={separatorSize} {...props} />
    )
    // display-name for previos component
    Separator[separatorSize].displayName = `Separator.${separatorSize}`

    Object.keys(stylesVariable.separatorColors).forEach(separatorColor => {
        Separator[separatorSize][separatorColor] = props => ( // eslint-disable-line react/display-name
            <Separator size={separatorSize} color={separatorColor} {...props} />
        )
        // display-name for previos component
        Separator[separatorSize][separatorColor].displayName = `Separator.${separatorSize}.${separatorColor}`
    })
})