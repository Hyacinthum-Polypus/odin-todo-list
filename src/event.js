const Event = name => 
{
    const _handlers = []

    const proto = {
        fire: (...msg) => _handlers.forEach(f => f(...msg)),
        addHandler: handler => _handlers.push(handler),
        getName: () => {return name;}
    }

    return Object.create(proto)
}

const EventAggregator = (() => 
{
    const _events = [];

    const _checkForEvent = name =>
    {
        return _events.findIndex(event => name == event.getName());
    }

    const publish = (name, ...msg) => 
    {
        const eventIndex = _checkForEvent(name);
        if(eventIndex == -1)
        {
            _events.push(Event(name, ...msg))
        }

        _events[eventIndex].fire();
    }

    const subscribe = (name, handler) =>
    {
        let eventIndex = _checkForEvent(name);
        console.log(_events[eventIndex]);
        if(eventIndex == -1)
        {
            _events.push(Event(name));
            eventIndex = _events.length - 1;
        }
        _events[eventIndex].addHandler(handler);
    }

    return {publish, subscribe}
})()

export default EventAggregator;