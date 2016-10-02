/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const Joi        = require('joi')
const { Bubble } = require('nivo')


module.exports = {
    component: Bubble,
    schema:    Joi.object().keys({
        width:    Joi.number().integer().required(),
        height:   Joi.number().integer().required(),
    }),
    defaults:  {
        animate: false,
        margin:  { top: 0, right: 0, bottom: 0, left: 0 }
    },
}
