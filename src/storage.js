import EventAggregator from "./event";

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function writeProjectsToStorage(projects)
{
    localStorage.setItem('projects', JSON.stringify(projects));
}

function initLocalStorageListener()
{
    EventAggregator.subscribe('write storage', writeProjectsToStorage);
}

function loadProjects()
{
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach(project => {
        EventAggregator.publish('add project', project);
    });

    EventAggregator.publish('select project', 0);
}

export {storageAvailable, initLocalStorageListener, loadProjects}