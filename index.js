import { endWith } from 'rxjs/operators';
import { of } from 'rxjs';

const source$ = of('Hello', 'Friend', 'Goodbye');

/**
 * Hello
 * Friend
 * Goodbye
 * Friend
 */
source$.pipe(
  endWith('Friend')
).subscribe(console.log);
