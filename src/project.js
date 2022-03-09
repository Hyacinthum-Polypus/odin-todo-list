import EventAggregator from "./event";

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
        EventAggregator.publish('project created', _projects[_projects.length-1].name, newId);
        EventAggregator.publish('write storage', _projects);
    }
    EventAggregator.subscribe('create project', createProject);
    const addProject = project =>
    {
        const newId = getNewUniqueId();
        _projects.push(Project(newId, project.name, project));
        EventAggregator.publish('project created', _projects[_projects.length-1].name, newId);
    }
    EventAggregator.subscribe('add project', addProject)

    const getProject = id =>
    {
        return _projects.find(project => {return project.getId() == id});
    }

    const getProjectIndex = id =>
    {
        return  _projects.indexOf(project => {return project.getId() == id});
    }

    EventAggregator.subscribe('select project', id => {
        const project = getProject(id);
        EventAggregator.publish('view project', project.getId(), project.name, project.description, project.todos);
    });

    EventAggregator.subscribe('update project', (id, newProject) => {
        const project = getProject(id);
        
        Object.assign(project, newProject);
        EventAggregator.publish('update nav', project.getId(), project.name);
        EventAggregator.publish('write storage', _projects);
    });

    const deleteProject = id =>
    {
        const projectIndex = getProjectIndex(id);
        _projects.splice(projectIndex - 1, 1);
        EventAggregator.publish('write storage', _projects);    
    }
    EventAggregator.subscribe('delete project', deleteProject);
})()

export default ProjectAggregator