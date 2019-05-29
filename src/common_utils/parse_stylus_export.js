export default styles => {
    const newStyles = {...styles}
    const valRegExp = /^val\((.*)\)$/g

    Object.keys(newStyles).forEach(key => {
        if (valRegExp.test(newStyles[key])) {
            newStyles[key] = parseJson(newStyles[key].replace(valRegExp, '$1').replace(/[()]/g, ''))
        }
    })

    return newStyles
}

function parseJson(obj) {
    try {
        const parseObj = JSON.parse(obj)

        if (typeof parseObj == 'object') {
            Object.keys(parseObj).forEach(key => {
                parseObj[key] = parseJson(parseObj[key])
            })
        }

        return parseObj
    }
    catch (error) {
        return obj
    }
}
