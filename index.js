import { concat, empty } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

const userMessage = document.getElementById('message');

const delayedMessage = (message, delayedTime = 1000) => {
  return empty().pipe(
    startWith(message),
    // delays the emission of items from the source
    delay(delayedTime)
  );
};

concat(
  delayedMessage('Get Ready!'),
  delayedMessage(3, 3000),
  delayedMessage(2, 3000),
  delayedMessage(1, 3000),
  delayedMessage('Go!'),
  delayedMessage('', 2000)
).subscribe((message) => (userMessage.innerHTML = message));