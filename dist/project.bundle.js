"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["project"],{

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
        return _events.findIndex(event => name == event.getName());
    }

    const publish = (name, ...msg) => 
    {
        let eventIndex = _checkForEvent(name);
        if(eventIndex == -1)
        {
            _events.push(Event(name))
            eventIndex = _events.length - 1;
        }

        console.log(_events[eventIndex].getName());
        _events[eventIndex].fire(...msg);
    }

    const subscribe = (name, handler) =>
    {
        let eventIndex = _checkForEvent(name);
        if(eventIndex == -1)
        {
            _events.push(Event(name));
            eventIndex = _events.length - 1;
        }

        console.log(_events[eventIndex].getName());
        _events[eventIndex].addHandler(handler);
    }

    return {publish, subscribe}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventAggregator);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/event.js");


const Project = (id, name, project) =>
{
    const proto = {
        getId: () => {return id},
    }

    return Object.assign(Object.create(proto), {name, description: '', todos: []},  project);
}

const ProjectAggregator = (() => {
    const _projects = [];
    let uniqueId = 0;

    const getNewUniqueId = () =>
    {
        return uniqueId++;
    }

    const createProject = name =>
    {
        const newId = getNewUniqueId();
        _projects.push(Project(newId, name));
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('project created', _projects[_projects.length-1].name, newId);
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('write storage', _projects);
    }
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('create project', createProject);
    const addProject = project =>
    {
        const newId = getNewUniqueId();
        _projects.push(Project(newId, project.name, project));
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('project created', _projects[_projects.length-1].name, newId);
    }
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('add project', addProject)

    const getProject = id =>
    {
        return _projects.find(project => {return project.getId() == id});
    }

    const getProjectIndex = id =>
    {
        return  _projects.indexOf(project => {return project.getId() == id});
    }

    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('select project', id => {
        const project = getProject(id);
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('view project', project.getId(), project.name, project.description, project.todos);
    });

    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('update project', (id, newProject) => {
        const project = getProject(id);
        
        Object.assign(project, newProject);
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('update nav', project.getId(), project.name);
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('write storage', _projects);
    });

    const deleteProject = id =>
    {
        const projectIndex = getProjectIndex(id);
        _projects.splice(projectIndex - 1, 1);
        _event__WEBPACK_IMPORTED_MODULE_0__["default"].publish('write storage', _projects);    
    }
    _event__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('delete project', deleteProject);
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectAggregator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/project.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRROztBQUV0QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQzs7QUFFQSxnREFBZ0QsaUNBQWlDO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXVCO0FBQy9CLFFBQVEsc0RBQXVCO0FBQy9CO0FBQ0EsSUFBSSx3REFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUF1QjtBQUMvQjtBQUNBLElBQUksd0RBQXlCOztBQUU3QjtBQUNBO0FBQ0EsMENBQTBDLDZCQUE2QjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDZCQUE2QjtBQUMzRTs7QUFFQSxJQUFJLHdEQUF5QjtBQUM3QjtBQUNBLFFBQVEsc0RBQXVCO0FBQy9CLEtBQUs7O0FBRUwsSUFBSSx3REFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBdUI7QUFDL0IsUUFBUSxzREFBdUI7QUFDL0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXVCO0FBQy9CO0FBQ0EsSUFBSSx3REFBeUI7QUFDN0IsQ0FBQzs7QUFFRCxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnQgPSBuYW1lID0+IFxue1xuICAgIGNvbnN0IF9oYW5kbGVycyA9IFtdXG5cbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgZmlyZTogKC4uLm1zZykgPT4gX2hhbmRsZXJzLmZvckVhY2goZiA9PiBmKC4uLm1zZykpLFxuICAgICAgICBhZGRIYW5kbGVyOiBoYW5kbGVyID0+IF9oYW5kbGVycy5wdXNoKGhhbmRsZXIpLFxuICAgICAgICBnZXROYW1lOiAoKSA9PiB7cmV0dXJuIG5hbWU7fVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHByb3RvKVxufVxuXG5jb25zdCBFdmVudEFnZ3JlZ2F0b3IgPSAoKCkgPT4gXG57XG4gICAgY29uc3QgX2V2ZW50cyA9IFtdO1xuXG4gICAgY29uc3QgX2NoZWNrRm9yRXZlbnQgPSBuYW1lID0+XG4gICAge1xuICAgICAgICByZXR1cm4gX2V2ZW50cy5maW5kSW5kZXgoZXZlbnQgPT4gbmFtZSA9PSBldmVudC5nZXROYW1lKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHB1Ymxpc2ggPSAobmFtZSwgLi4ubXNnKSA9PiBcbiAgICB7XG4gICAgICAgIGxldCBldmVudEluZGV4ID0gX2NoZWNrRm9yRXZlbnQobmFtZSk7XG4gICAgICAgIGlmKGV2ZW50SW5kZXggPT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9ldmVudHMucHVzaChFdmVudChuYW1lKSlcbiAgICAgICAgICAgIGV2ZW50SW5kZXggPSBfZXZlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50SW5kZXhdLmdldE5hbWUoKSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnRJbmRleF0uZmlyZSguLi5tc2cpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChuYW1lLCBoYW5kbGVyKSA9PlxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudChuYW1lKTtcbiAgICAgICAgaWYoZXZlbnRJbmRleCA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKEV2ZW50KG5hbWUpKTtcbiAgICAgICAgICAgIGV2ZW50SW5kZXggPSBfZXZlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50SW5kZXhdLmdldE5hbWUoKSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnRJbmRleF0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3B1Ymxpc2gsIHN1YnNjcmliZX1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRBZ2dyZWdhdG9yOyIsImltcG9ydCBFdmVudEFnZ3JlZ2F0b3IgZnJvbSBcIi4vZXZlbnRcIjtcblxuY29uc3QgUHJvamVjdCA9IChpZCwgbmFtZSwgcHJvamVjdCkgPT5cbntcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgZ2V0SWQ6ICgpID0+IHtyZXR1cm4gaWR9LFxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7bmFtZSwgZGVzY3JpcHRpb246ICcnLCB0b2RvczogW119LCAgcHJvamVjdCk7XG59XG5cbmNvbnN0IFByb2plY3RBZ2dyZWdhdG9yID0gKCgpID0+IHtcbiAgICBjb25zdCBfcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgdW5pcXVlSWQgPSAwO1xuXG4gICAgY29uc3QgZ2V0TmV3VW5pcXVlSWQgPSAoKSA9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHVuaXF1ZUlkKys7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IG5hbWUgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gZ2V0TmV3VW5pcXVlSWQoKTtcbiAgICAgICAgX3Byb2plY3RzLnB1c2goUHJvamVjdChuZXdJZCwgbmFtZSkpO1xuICAgICAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgncHJvamVjdCBjcmVhdGVkJywgX3Byb2plY3RzW19wcm9qZWN0cy5sZW5ndGgtMV0ubmFtZSwgbmV3SWQpO1xuICAgICAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnd3JpdGUgc3RvcmFnZScsIF9wcm9qZWN0cyk7XG4gICAgfVxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2NyZWF0ZSBwcm9qZWN0JywgY3JlYXRlUHJvamVjdCk7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3QgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gZ2V0TmV3VW5pcXVlSWQoKTtcbiAgICAgICAgX3Byb2plY3RzLnB1c2goUHJvamVjdChuZXdJZCwgcHJvamVjdC5uYW1lLCBwcm9qZWN0KSk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdwcm9qZWN0IGNyZWF0ZWQnLCBfcHJvamVjdHNbX3Byb2plY3RzLmxlbmd0aC0xXS5uYW1lLCBuZXdJZCk7XG4gICAgfVxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2FkZCBwcm9qZWN0JywgYWRkUHJvamVjdClcblxuICAgIGNvbnN0IGdldFByb2plY3QgPSBpZCA9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0cy5maW5kKHByb2plY3QgPT4ge3JldHVybiBwcm9qZWN0LmdldElkKCkgPT0gaWR9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0SW5kZXggPSBpZCA9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuICBfcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0ID0+IHtyZXR1cm4gcHJvamVjdC5nZXRJZCgpID09IGlkfSk7XG4gICAgfVxuXG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnc2VsZWN0IHByb2plY3QnLCBpZCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KGlkKTtcbiAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3ZpZXcgcHJvamVjdCcsIHByb2plY3QuZ2V0SWQoKSwgcHJvamVjdC5uYW1lLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LnRvZG9zKTtcbiAgICB9KTtcblxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3VwZGF0ZSBwcm9qZWN0JywgKGlkLCBuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KGlkKTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdCwgbmV3UHJvamVjdCk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd1cGRhdGUgbmF2JywgcHJvamVjdC5nZXRJZCgpLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnd3JpdGUgc3RvcmFnZScsIF9wcm9qZWN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gaWQgPT5cbiAgICB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGdldFByb2plY3RJbmRleChpZCk7XG4gICAgICAgIF9wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4IC0gMSwgMSk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd3cml0ZSBzdG9yYWdlJywgX3Byb2plY3RzKTsgICAgXG4gICAgfVxuICAgIEV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2RlbGV0ZSBwcm9qZWN0JywgZGVsZXRlUHJvamVjdCk7XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RBZ2dyZWdhdG9yIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9