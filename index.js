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

// Instead of a function, we will pass an object with next, error, and complete methods
const newSubscription = myObservable.subscribe({
  // On successful emissions
  next: event => console.log(event),
  // On errors
  error: error => console.log(error),
  // Called once on completion
  complete: () => console.log('complete!')
});