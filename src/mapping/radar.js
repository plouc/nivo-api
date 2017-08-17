/*
 * This file is part of the nivo project.
 *
 * (c) 2016-today Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const Joi = require('joi')
const { Radar } = require('nivo')
const common = require('./common')

module.exports = {
    component: Radar,
    schema: Joi.object().keys(
        Object.assign({}, common.dimensions, {
            // data
            data: Joi.array().min(1).required(),
            facets: Joi.array().sparse(false).min(1).unique().required(),

            curve: Joi.string(),

            borderWidth: Joi.number().min(0),
            borderColor: Joi.string(),

            gridLevels: Joi.number().integer().positive(),
            gridShape: Joi.any().valid(['linear', 'circular']),
            gridLabelOffset: Joi.number(),

            // labels
            enableLabels: Joi.boolean(),
            labelsTextColor: Joi.string(),
            labelsLinkColor: Joi.string(),

            // markers
            enableMarkers: Joi.boolean(),
            markersSize: Joi.number().min(0),
            markersColor: Joi.string(),
            markersBorderWidth: Joi.number().min(0),
            markersBorderColor: Joi.string(),
            enableMarkersLabel: Joi.boolean(),
            markersLabel: Joi.string(),
            markersLabelYOffset: Joi.number(),

            // theming
            colors: Joi.string(),
            colorBy: Joi.string(),
            fillOpacity: Joi.number().min(0).max(1),
        })
    ),
    runtimeProps: ['width', 'height', 'colors'],
    defaults: {
        margin: { top: 40, right: 40, bottom: 40, left: 40 },
    },
}
