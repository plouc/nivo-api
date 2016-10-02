# nivo-api

Rendering API for [nivo](https://github.com/plouc/nivo) dataviz React/d3 components.

A [demo](https://nivo-api.herokuapp.com/) is available on heroku, but may not respond depending on usage.

## How it works

The API expose some of the [nivo](https://github.com/plouc/nivo) charts by using [React server side environment](https://facebook.github.io/react/docs/environments.html).

First you will have to make a post request on the desired endpoint, for example:

```
POST /charts/line
=> 148e6145-6130-4c70-a21e-bfe91924c612
```

The response is the id of the chart config, then you can fetch it with a regular GET request

```
GET /r/148e6145-6130-4c70-a21e-bfe91924c612
```

## Charts endpoints

```
POST /charts/bar
POST /charts/line
POST /charts/bubble
POST /charts/treemap
POST /charts/chord
```

## Charts samples

- https://nivo-api.herokuapp.com/samples/line
- https://nivo-api.herokuapp.com/samples/bar
- https://nivo-api.herokuapp.com/samples/bubble
- https://nivo-api.herokuapp.com/samples/treemap
- https://nivo-api.herokuapp.com/samples/chord

## Repositories

- [nivo](https://github.com/plouc/nivo) - the nivo library
- [nivo-api](https://github.com/plouc/nivo-api) - the nivo http api
- [nivo-generators](https://github.com/plouc/nivo-generators) - the data generators used for nivo-website and http API samples
- [nivo-website](https://github.com/plouc/nivo-website) - the source for the nivo website
