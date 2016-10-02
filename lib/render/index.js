/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const _                  = require('lodash')
const React              = require('react')
const { renderToString } = require('react-dom/server')
const mapping            = require('../../mapping')


exports.chart = ({ type, props }, override) => {
    const chart       = mapping[type]
    const overridable = chart.runtimeProps || []
    const rendered    = renderToString(
        React.createElement(chart.component, Object.assign(
            {},
            chart.defaults,
            props,
            _.pick(override, overridable)
        ))
    )

    return rendered
}