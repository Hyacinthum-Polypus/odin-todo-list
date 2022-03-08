import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import { storageAvailable } from './storage.js';
import './style.css';

DisplayController.initHTML();

if(storageAvailable('localStorage'))
{
    
    if(!localStorage.getItem('projects'))
    {
        defaultInit();
    }
    else
    {

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