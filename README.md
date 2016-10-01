# nivo-api

Rendering API for nivo dataviz React/d3 components.

## How it works

The API expose some of the nivo charts by using `react-dom/server`.

First you will have to make a post request on the desired endpoint, for example:

```
POST /charts/line
=> 148e6145-6130-4c70-a21e-bfe91924c612
```

The response is the id of the chart config, then you can fetch it with a regular GET request

```
GET /r/148e6145-6130-4c70-a21e-bfe91924c612
```
