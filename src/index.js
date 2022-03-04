import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import './style.css';

DisplayController.initHTML();

EventAggregator.publish('add project', 'Default');