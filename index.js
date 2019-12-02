// Import stylesheets
import './style.css';

// import the fromEvent operator
import { fromEvent } from 'rxjs';

// Grab button reference
const button = document.getElementById('myButton');

// Create an observable of button clicks
const myObservable = fromEvent(button, 'click');

// For now, let's just log the event on each click
const subscription = myObservable.subscribe(event => console.log(event));
