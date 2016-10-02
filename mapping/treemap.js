/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const Joi         = require('joi')
const { TreeMap } = require('nivo')


module.exports = {
    component:    TreeMap,
    schema:       Joi.object().keys({
        width:         Joi.number().required(),
        height:        Joi.number().required(),
        root:          Joi.object().required(),
        keys:          Joi.array().sparse(false).min(1).unique().required(),
        identity:      Joi.string().required(),
        value:         Joi.string().required(),
        leavesOnly:    Joi.boolean(),
        tile:          Joi.string(),
        enableLabels:  Joi.boolean(),
        orientLabels:  Joi.boolean(),
        label:         Joi.string(),
        labelFormat:   Joi.string(),
        labelSkipSize: Joi.number(),
        innerPadding:  Joi.number(),
        outerPadding:  Joi.number(),
        colors:        Joi.string(),
        borderWidth:   Joi.number(),
        borderColor:   Joi.string(),
    }),
    runtimeProps: [
        'width',
        'height',
        'colors',
        'leavesOnly',
        'tile',
        'enableLabels',
        'orientLabels',
        'label',
        'labelSkipSize',
        'innerPadding',
        'outerPadding',
        'colors',
        'borderWidth',
        'borderColor',
    ],
    defaults:     {
        animate: false,
        margin:  { top: 0, right: 0, bottom: 0, left: 0 },
    },
}
