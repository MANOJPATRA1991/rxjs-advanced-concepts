import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

const intervalCount = interval(1000);

const source$ = intervalCount.pipe(take(2));

// source$.subscribe(v => console.log(v));

const example$ = source$.pipe(
  map(val =>
    intervalCount.pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);

example$.pipe(combineAll())
.subscribe(console.log);