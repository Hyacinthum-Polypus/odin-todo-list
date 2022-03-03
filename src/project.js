const Tod = name =>
{    
    return {name, description, dueDate, priority, complete};
}

const Project = name =>
{
    return {name, description, todos: []};
}

const ProjectAggregator = (() => {
    const _projects = [];
    let _selectedProject = ;0;

    const addProject = name =>
    {
        _projects.push(Project(name));
    }

    const getProject = index =>
    {
        return _projects[index];
    }

    return {addProject, getProject}
})()