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
        console.log(_projects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRROztBQUV0QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQzs7QUFFQSxnREFBZ0QsaUNBQWlDO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBdUI7QUFDL0IsUUFBUSxzREFBdUI7QUFDL0I7QUFDQSxJQUFJLHdEQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXVCO0FBQy9CO0FBQ0EsSUFBSSx3REFBeUI7O0FBRTdCO0FBQ0E7QUFDQSwwQ0FBMEMsNkJBQTZCO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsNkJBQTZCO0FBQzNFOztBQUVBLElBQUksd0RBQXlCO0FBQzdCO0FBQ0EsUUFBUSxzREFBdUI7QUFDL0IsS0FBSzs7QUFFTCxJQUFJLHdEQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUF1QjtBQUMvQixRQUFRLHNEQUF1QjtBQUMvQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBdUI7QUFDL0I7QUFDQSxJQUFJLHdEQUF5QjtBQUM3QixDQUFDOztBQUVELGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudCA9IG5hbWUgPT4gXG57XG4gICAgY29uc3QgX2hhbmRsZXJzID0gW11cblxuICAgIGNvbnN0IHByb3RvID0ge1xuICAgICAgICBmaXJlOiAoLi4ubXNnKSA9PiBfaGFuZGxlcnMuZm9yRWFjaChmID0+IGYoLi4ubXNnKSksXG4gICAgICAgIGFkZEhhbmRsZXI6IGhhbmRsZXIgPT4gX2hhbmRsZXJzLnB1c2goaGFuZGxlciksXG4gICAgICAgIGdldE5hbWU6ICgpID0+IHtyZXR1cm4gbmFtZTt9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG8pXG59XG5cbmNvbnN0IEV2ZW50QWdncmVnYXRvciA9ICgoKSA9PiBcbntcbiAgICBjb25zdCBfZXZlbnRzID0gW107XG5cbiAgICBjb25zdCBfY2hlY2tGb3JFdmVudCA9IG5hbWUgPT5cbiAgICB7XG4gICAgICAgIHJldHVybiBfZXZlbnRzLmZpbmRJbmRleChldmVudCA9PiBuYW1lID09IGV2ZW50LmdldE5hbWUoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGlzaCA9IChuYW1lLCAuLi5tc2cpID0+IFxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSBfY2hlY2tGb3JFdmVudChuYW1lKTtcbiAgICAgICAgaWYoZXZlbnRJbmRleCA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKEV2ZW50KG5hbWUpKVxuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnRJbmRleF0uZ2V0TmFtZSgpKTtcbiAgICAgICAgX2V2ZW50c1tldmVudEluZGV4XS5maXJlKC4uLm1zZyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKG5hbWUsIGhhbmRsZXIpID0+XG4gICAge1xuICAgICAgICBsZXQgZXZlbnRJbmRleCA9IF9jaGVja0ZvckV2ZW50KG5hbWUpO1xuICAgICAgICBpZihldmVudEluZGV4ID09IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBfZXZlbnRzLnB1c2goRXZlbnQobmFtZSkpO1xuICAgICAgICAgICAgZXZlbnRJbmRleCA9IF9ldmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnRJbmRleF0uZ2V0TmFtZSgpKTtcbiAgICAgICAgX2V2ZW50c1tldmVudEluZGV4XS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7cHVibGlzaCwgc3Vic2NyaWJlfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEFnZ3JlZ2F0b3I7IiwiaW1wb3J0IEV2ZW50QWdncmVnYXRvciBmcm9tIFwiLi9ldmVudFwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKGlkLCBuYW1lLCBwcm9qZWN0KSA9Plxue1xuICAgIGNvbnN0IHByb3RvID0ge1xuICAgICAgICBnZXRJZDogKCkgPT4ge3JldHVybiBpZH0sXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtuYW1lLCBkZXNjcmlwdGlvbjogJycsIHRvZG9zOiBbXX0sICBwcm9qZWN0KTtcbn1cblxuY29uc3QgUHJvamVjdEFnZ3JlZ2F0b3IgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuICAgIGxldCB1bmlxdWVJZCA9IDA7XG5cbiAgICBjb25zdCBnZXROZXdVbmlxdWVJZCA9ICgpID0+XG4gICAge1xuICAgICAgICByZXR1cm4gdW5pcXVlSWQrKztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gbmFtZSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBnZXROZXdVbmlxdWVJZCgpO1xuICAgICAgICBfcHJvamVjdHMucHVzaChQcm9qZWN0KG5ld0lkLCBuYW1lKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9wcm9qZWN0cyk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdwcm9qZWN0IGNyZWF0ZWQnLCBfcHJvamVjdHNbX3Byb2plY3RzLmxlbmd0aC0xXS5uYW1lLCBuZXdJZCk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd3cml0ZSBzdG9yYWdlJywgX3Byb2plY3RzKTtcbiAgICB9XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnY3JlYXRlIHByb2plY3QnLCBjcmVhdGVQcm9qZWN0KTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBnZXROZXdVbmlxdWVJZCgpO1xuICAgICAgICBfcHJvamVjdHMucHVzaChQcm9qZWN0KG5ld0lkLCBwcm9qZWN0Lm5hbWUsIHByb2plY3QpKTtcbiAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3Byb2plY3QgY3JlYXRlZCcsIF9wcm9qZWN0c1tfcHJvamVjdHMubGVuZ3RoLTFdLm5hbWUsIG5ld0lkKTtcbiAgICB9XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnYWRkIHByb2plY3QnLCBhZGRQcm9qZWN0KVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IGlkID0+XG4gICAge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiB7cmV0dXJuIHByb2plY3QuZ2V0SWQoKSA9PSBpZH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RJbmRleCA9IGlkID0+XG4gICAge1xuICAgICAgICByZXR1cm4gIF9wcm9qZWN0cy5pbmRleE9mKHByb2plY3QgPT4ge3JldHVybiBwcm9qZWN0LmdldElkKCkgPT0gaWR9KTtcbiAgICB9XG5cbiAgICBFdmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdzZWxlY3QgcHJvamVjdCcsIGlkID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoaWQpO1xuICAgICAgICBFdmVudEFnZ3JlZ2F0b3IucHVibGlzaCgndmlldyBwcm9qZWN0JywgcHJvamVjdC5nZXRJZCgpLCBwcm9qZWN0Lm5hbWUsIHByb2plY3QuZGVzY3JpcHRpb24sIHByb2plY3QudG9kb3MpO1xuICAgIH0pO1xuXG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgndXBkYXRlIHByb2plY3QnLCAoaWQsIG5ld1Byb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoaWQpO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3VwZGF0ZSBuYXYnLCBwcm9qZWN0LmdldElkKCksIHByb2plY3QubmFtZSk7XG4gICAgICAgIEV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCd3cml0ZSBzdG9yYWdlJywgX3Byb2plY3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBpZCA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KGlkKTtcbiAgICAgICAgX3Byb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXggLSAxLCAxKTtcbiAgICAgICAgRXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ3dyaXRlIHN0b3JhZ2UnLCBfcHJvamVjdHMpOyAgICBcbiAgICB9XG4gICAgRXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnZGVsZXRlIHByb2plY3QnLCBkZWxldGVQcm9qZWN0KTtcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEFnZ3JlZ2F0b3IiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=