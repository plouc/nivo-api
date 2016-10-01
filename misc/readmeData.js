const _       = require('lodash')
const mapping = require('../mapping')
const samples = require('../samples')

const data = {
    endpoints: [],
    samples:   [],
}

_.forOwn(mapping, (config, type) => {
    data.endpoints.push(`/charts/${type}`)
})

_.forOwn(samples, (config, id) => {
    data.samples.push(id)
})


console.log(JSON.stringify(data))
