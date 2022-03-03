import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import './style.css';

DisplayController.initHTML();

EventAggregator.subscribe('alert', () => console.log('alert!'));
EventAggregator.publish('alert');

