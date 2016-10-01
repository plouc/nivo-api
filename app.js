const express            = require('express')
const cors               = require('cors')
const bodyParser         = require('body-parser')
const path               = require('path')
const uuid               = require('node-uuid')
const _                  = require('lodash')
const React              = require('react')
const { renderToString } = require('react-dom/server')
const app                = express()
const validate           = require('./lib/middlewares/validationMiddleware')
const storage            = require('./lib/storage')
const chartsMapping      = require('./chartsMapping')


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.resolve('api.yml'))
})

_.forOwn(chartsMapping, ({ schema }, type) => {
    app.post(`/charts/${type}`, validate(schema), (req, res) => {
        const props = req.payload
        const id    = uuid.v4()
        const url   = `http://localhost:3000/r/${id}`

        storage.set(id, {
            type,
            props,
            url,
        })

        res.status(201).json({ id, url })
    })
})

app.get('/r', (req, res) => {
    res.status(200).json(storage.dump())
})

app.get('/r/:id', (req, res) => {
    const { id } = req.params
    const config = storage.get(req.params.id)

    if (!config) {
        return res.status(404).send(`no chart found for id "${id}"`)
    }

    const chart    = chartsMapping[config.type]
    const rendered = renderToString(
        React.createElement(chart.component, Object.assign(
            {},
            chart.defaults,
            config.props,
            _.pick(req.query, ['width', 'height', 'colors'])
        ))
    )

    res.status(200).send(rendered)
})

app.listen(3000, () => {
    console.log('nivo api listening on port 3000')
})