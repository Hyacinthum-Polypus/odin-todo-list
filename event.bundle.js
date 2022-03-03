"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["event"],{

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventAggregator": () => (/* binding */ EventAggregator)
/* harmony export */ });
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
        return _events.findIndex(event => name == event.name);
    }

    const publish = (name, ...msg) => 
    {
        const eventIndex = _checkForEvent();
        if(eventIndex == -1)
        {
            _events.push(Event(name, ...msg))
        }

        _events[eventIndex].fire();
    }

    const subscribe = (name, handler) =>
    {
        let eventIndex = _checkForEvent();
        if(eventIndex == -1)
        {
            _events.push(Event(name));
            eventIndex = _events.length - 1;
        }
        _events[eventIndex].addHandler(handler);
    }

    return {publish, subscribe}
})()



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/event.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ldmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudCA9IG5hbWUgPT4gXG57XG4gICAgY29uc3QgX2hhbmRsZXJzID0gW11cblxuICAgIGNvbnN0IHByb3RvID0ge1xuICAgICAgICBmaXJlOiAoLi4ubXNnKSA9PiBfaGFuZGxlcnMuZm9yRWFjaChmID0+IGYoLi4ubXNnKSksXG4gICAgICAgIGFkZEhhbmRsZXI6IGhhbmRsZXIgPT4gX2hhbmRsZXJzLnB1c2goaGFuZGxlciksXG4gICAgICAgIGdldE5hbWU6ICgpID0+IHtyZXR1cm4gbmFtZTt9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG8pXG59XG5cbmNvbnN0IEV2ZW50QWdncmVnYXRvciA9ICgoKSA9PiBcbntcbiAgICBjb25zdCBfZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBfY2hlY2tGb3JFdmVudCA9IG5hbWUgPT5cbiAgICB7XG4gICAgICAgIHJldHVybiBfZXZlbnRzLmZpbmRJbmRleChldmVudCA9PiBuYW1lID09IGV2ZW50Lm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHB1Ymxpc2ggPSAobmFtZSwgLi4ubXNnKSA9PiBcbiAgICB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudCgpO1xuICAgICAgICBpZihldmVudEluZGV4ID09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBfZXZlbnRzLnB1c2goRXZlbnQobmFtZSwgLi4ubXNnKSlcbiAgICAgICAgfVxuXG4gICAgICAgIF9ldmVudHNbZXZlbnRJbmRleF0uZmlyZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChuYW1lLCBoYW5kbGVyKSA9PlxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudCgpO1xuICAgICAgICBpZihldmVudEluZGV4ID09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBfZXZlbnRzLnB1c2goRXZlbnQobmFtZSkpO1xuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50SW5kZXhdLmFkZEhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtwdWJsaXNoLCBzdWJzY3JpYmV9XG59KSgpXG5cbmV4cG9ydCB7RXZlbnRBZ2dyZWdhdG9yfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=