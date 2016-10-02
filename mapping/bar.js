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
const { Bars } = require('nivo')


module.exports = {
    component:    Bars,
    schema:       Joi.object().keys({
        width:     Joi.number().integer().required(),
        height:    Joi.number().integer().required(),
        data:      Joi.object().required(),
        keys:      Joi.array().sparse(false).min(1).unique().required(),
        identity:  Joi.string().required(),
        colors:    Joi.string(),
        groupMode: Joi.any().valid(['grouped', 'stacked']),
    }),
    runtimeProps: [
        'width',
        'height',
        'colors',
        'groupMode',
    ],
    defaults:     {
        animate: false,
        margin:  { top: 40, right: 50, bottom: 40, left: 50 },
    },
}
