const _             = require('lodash')
const chartsMapping = require('../chartsMapping')

const data = {
    endpoints: [],
}

_.forOwn(chartsMapping, (config, type) => {
    data.endpoints.push(`/charts/${type}`)
})


console.log(JSON.stringify(data))
