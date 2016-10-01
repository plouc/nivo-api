'use strict'

const _   = require('lodash')
const Joi = require('joi')


module.exports = (schema, options = {}) => {
    const { omit } = options

    return (req, res, next) => {
        let data = req.body
        if (omit) {
            data = _.omit(data, omit)
        }

        Joi.validate(data, schema, { abortEarly: false }, (err, value) => {
            if (err) {
                return res.status(400).json({ errors: err.details })
            }

            req.payload = value
            next()
        })
    }
}
