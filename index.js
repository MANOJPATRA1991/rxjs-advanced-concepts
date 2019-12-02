import { map, concatAll } from 'rxjs/operators';
import { interval } from 'rxjs';

const samplePromise$ = val => new Promise(resolve => resolve(val));
const source$ = interval(2000);

const example$ = source$.pipe(
  map(val => samplePromise$(val)),
  concatAll()
);

const subscribe$ = example$.subscribe(val => console.log("Example with Promise:", val))