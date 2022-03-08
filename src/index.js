import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import { storageAvailable, initLocalStorageListener, loadProjects } from './storage.js';
import './style.css';

if(storageAvailable('localStorage'))
{
    
    if(!localStorage.getItem('projects'))
    {
        
    }
    else
    {
        init();
    }
}
else
{
    init();
}

function init()
{
    DisplayController.initHTML();

    EventAggregator.publish('add project', 'Default');
    EventAggregator.publish('select project', 0);
}