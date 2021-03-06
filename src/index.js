import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import { storageAvailable, initLocalStorageListener, loadProjects } from './storage.js';
import './style.css';

DisplayController.initHTML();

if(storageAvailable('localStorage'))
{
    initLocalStorageListener();
    if(!localStorage.getItem('projects'))
    {
        defaultInit();
    }
    else
    {
        loadProjects();
    }
}
else
{
    init();
}

function defaultInit()
{
    EventAggregator.publish('create project', 'Default');
    EventAggregator.publish('select project', 0);
}