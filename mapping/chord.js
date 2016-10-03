/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const Joi       = require('joi')
const { Chord } = require('nivo')


module.exports = {
    component:    Chord,
    schema:       Joi.object().keys({
        width:             Joi.number().integer().required(),
        height:            Joi.number().integer().required(),
        data:              Joi.array().required(),
        padAngle:          Joi.number(),
        innerRadiusRatio:  Joi.number().min(0).max(1),
        innerRadiusOffset: Joi.number().min(0).max(1),
        ribbonOpacity:     Joi.number().min(0).max(1),
        ribbonBorderWidth: Joi.number().min(0),
        arcOpacity:        Joi.number().min(0).max(1),
        arcBorderWidth:    Joi.number().min(0),
        colors:            Joi.string(),
    }),
    runtimeProps: [
        'width',
        'height',
        'padAngle',
        'innerRadiusRatio',
        'innerRadiusOffset',
        'ribbonOpacity',
        'arcOpacity',
        'colors',
    ],
    defaults:     {
        animate: false,
        margin:  { top: 0, right: 0, bottom: 0, left: 0 },
    },
}
