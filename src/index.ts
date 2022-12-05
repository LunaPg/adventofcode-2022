import { inspect } from 'util';
import { run } from './Dayz/One/one';
import { runTwo } from './Dayz/One/second-Part';
(async () => {
  const text = await run();
  console.log(inspect(text));
  const two = await runTwo();
  console.log('Two is ' + inspect(two));
})().catch((e) => {
  // Deal with the fact the chain failed
  throw new Error(e);
});
