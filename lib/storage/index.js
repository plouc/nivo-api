const store = {}


exports.set = (key, value) => {
    store[key] = value
}

exports.get = key => {
    return store[key]
}

exports.dump = () => store