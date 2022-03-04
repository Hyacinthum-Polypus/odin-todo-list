import EventAggregator from "./event";

const Todo = name =>
{    
    return {name, description, dueDate, priority, complete};
}

const Project = name =>
{
    return {name, description: '', todos: []};
}

const ProjectAggregator = (() => {
    const _projects = [];

    const addProject = name =>
    {
        _projects.push(Project(name));
        console.log(_projects);
        EventAggregator.publish('project created', _projects[_projects.length-1]);
    }
    EventAggregator.subscribe('add project', name => {addProject(name);});

    const getProject = index =>
    {
        console.log(_project[index]);
        return _projects[index];
    }

    return {addProject, getProject}
})()

export default ProjectAggregator