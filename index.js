import { of, concat } from 'rxjs';

const dataSource1$ = of(1, 2, 3);
const dataSource2$ = of(4, 5, 6);
const dataSource3$ = of(7, 8, 9);

concat(
  dataSource1$,
  dataSource2$,
  dataSource3$
)
// log: 1, 2, 3, 4, 5, 6, 7, 8, 9
.subscribe(console.log);