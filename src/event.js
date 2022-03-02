const Event = name => {
    const _handlers = []

    const proto = {
        fire: () => _handlers.forEach(f => f()),
        addHandler: handler => _handlers.push(handler)
    }

    return Object.assign(Object.create(proto), {name});
}

export {Event};