import EventAggregator from "./event";

const Todo = name =>
{    
    return {name, description, dueDate, priority, complete};
}

const Project = (id, name) =>
{
    const proto = {
        getId: () => {return id},
    }

    return Object.assign(Object.create(proto), {name, description: '', todos: []});
}

const ProjectAggregator = (() => {
    const _projects = [];
    let uniqueId = 0;

    const getNewUniqueId = () =>
    {
        return uniqueId++;
    }

    const addProject = name =>
    {
        _projects.push(Project(getNewUniqueId(), name));
        console.log(_projects);
        EventAggregator.publish('project created', _projects[_projects.length-1].name);
    }
    EventAggregator.subscribe('add project', name => {addProject(name);});

    const getProject = id =>
    {
        return _projects.find(project => {project.getId() == id});
    }

    return {addProject, getProject}
})()

export default ProjectAggregator