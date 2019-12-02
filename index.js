import { endWith } from 'rxjs/operators';
import { of } from 'rxjs';

const source$ = of('Hello', 'Friend', 'Goodbye');

/**
 * Hello
 * Friend
 * Goodbye
 * Goodbye
 * Friend
 */
source$.pipe(
  // emit on completion
  endWith('Goodbye', 'Friend')
).subscribe(console.log);
