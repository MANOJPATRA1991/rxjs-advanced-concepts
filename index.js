import { endWith, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

const source$ = of('Hello', 'Friend');

/**
 * Hello
 * Friend
 * Goodbye
 * Friend
 * Finally
 */
source$.pipe(
  // emit on completion
  endWith('Goodbye', 'Friend'),
  finalize(() => console.log('Finally'))
).subscribe(console.log);
