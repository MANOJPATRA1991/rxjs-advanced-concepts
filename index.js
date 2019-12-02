import { map, concatAll } from 'rxjs/operators';
import { of, interval } from 'rxjs';

const source$ = interval(1000);
const example$ = source$.pipe(
  map(val => of(val + 10)),
  concatAll()
);

const subscribe$ = example$.subscribe(val => console.log("Example with Basic Observable:", val));