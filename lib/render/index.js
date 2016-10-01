const _                  = require('lodash')
const React              = require('react')
const { renderToString } = require('react-dom/server')
const mapping            = require('../../mapping')


exports.chart = ({ type, props }, override) => {
    const chart    = mapping[type]
    const rendered = renderToString(
        React.createElement(chart.component, Object.assign(
            {},
            chart.defaults,
            props,
            _.pick(override, ['width', 'height', 'colors'])
        ))
    )

    return rendered
}