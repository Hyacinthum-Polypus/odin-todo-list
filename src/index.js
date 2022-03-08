import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import { storageAvailable } from './storage.js';
import './style.css';

if(storageAvailable('localStorage'))
{

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