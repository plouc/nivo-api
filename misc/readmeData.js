const _       = require('lodash')
const mapping = require('../mapping')

const data = {
    endpoints: [],
}

_.forOwn(mapping, (config, type) => {
    data.endpoints.push(`/charts/${type}`)
})


console.log(JSON.stringify(data))
