import EventAggregator from "./event";

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

    const createProject = name =>
    {
        const newId = getNewUniqueId();
        _projects.push(Project(newId, name));
        console.log(_projects);
        EventAggregator.publish('project created', _projects[_projects.length-1].name, newId);
    }
    EventAggregator.subscribe('create project', createProject);
    const addProject = project =>
    {
        _projects.push(project);
    }
    EventAggregator.subscribe('add project', addProject)

    const getProject = id =>
    {
        return _projects.find(project => {return project.getId() == id});
    }

    EventAggregator.subscribe('select project', id => {
        const project = getProject(id);
        EventAggregator.publish('view project', project.getId(), project.name, project.description, project.todos);
    });

    EventAggregator.subscribe('update project', (id, newProject) => {
        const project = getProject(id);
        
        Object.assign(project, newProject);
        EventAggregator.publish('update nav', project.getId(), project.name)
    })
})()

export default ProjectAggregator