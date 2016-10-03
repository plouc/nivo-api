/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const Joi      = require('joi')
const { Line } = require('nivo')


module.exports = {
    component:    Line,
    schema:               Joi.object().keys({
        width:            Joi.number().integer().required(),
        height:           Joi.number().integer().required(),
        data:             Joi.array().min(1).required(),
        keys:             Joi.array().sparse(false).min(1).unique().required(),
        identity:         Joi.string().required(),
        cumulative:       Joi.boolean(),
        curve:            Joi.string(),
        xAxis:            Joi.boolean(),
        xAxisOrientation: Joi.any().valid(['top', 'bottom']),
        xAxisTickSize:    Joi.number(),
        xAxisTickPadding: Joi.number(),
        yAxis:            Joi.boolean(),
        yAxisOrientation: Joi.any().valid(['left', 'right']),
        yAxisTickSize:    Joi.number(),
        yAxisTickPadding: Joi.number(),
        colors:           Joi.string(),
    }),
    runtimeProps: [
        'width',
        'height',
        'colors',
        'cumulative',
    ],
    defaults:     {
        animate: false,
        margin:  { top: 40, right: 50, bottom: 40, left: 50 }
    },
}
