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
        const newId = getNewUniqueId();
        _projects.push(Project(newId, name));
        console.log(_projects);
        EventAggregator.publish('project created', _projects[_projects.length-1].name, newId);
    }
    EventAggregator.subscribe('add project', name => {addProject(name);});

    const getProject = id =>
    {
        return _projects.find(project => {return project.getId() == id});
    }

    EventAggregator.subscribe('select project', id => {
        const project = getProject(id);
        EventAggregator.publish('view project', project);
    });

    EventAggregator.subscribe('update project', (id, newProject) => {
        const project = getProject(id);
        for(let key in newProject)
        {
            project[key] = newProject[key];
        }
    })

    return {addProject, getProject}
})()

export default ProjectAggregator