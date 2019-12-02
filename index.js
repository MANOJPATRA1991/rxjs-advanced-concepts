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

// Clean up with unsubscribe
subscription.unsubscribe();
newSubscription.unsubscribe();

// ---------------------------------------------------------------- //

import { of } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
console.log("Mapping");
const subscription = dataSource
  .pipe(
    // add 1 to each emitted value
    map(value => value + 1)
  )
  // log: 2 3 4 5 6
  .subscribe(value => console.log(value));

console.log("Filtering");
const secondSubscription = dataSource
  .pipe(
    filter(value => value >= 2)
  )
  // log: 2 3 4 5
  .subscribe(value => console.log(value));

console.log("Chaining of operators");
// observable of values from a text box, pipe chains operators together
dataSource
  .pipe(
    // wait for a 200ms pause
    debounceTime(200),
    // if the value is the same, ignore
    distinctUntilChanged(),
    // if an updated value comes through while request is still active cancel previous request and 'switch' to new observable
    switchMap(searchTerm => console.log(searchTerm))
  )
  // create a subscription
  .subscribe(results => {
    // update the dom
  });

// ---------------------------------------------------------------- //