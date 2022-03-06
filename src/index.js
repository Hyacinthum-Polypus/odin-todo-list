import DisplayController from './displayController.js';
import EventAggregator from './event.js';
import './style.css';

DisplayController.initHTML();

EventAggregator.publish('add project', 'Default');
EventAggregator.publish('select project', 0);
EventAggregator.publish('add project', 'Trip to Rome');
EventAggregator.publish('add project', 'Todo list project');

EventAggregator.publish('update project', 1, {name: 'New Default', description: "This is the default todo list if you have no other todo lists."})