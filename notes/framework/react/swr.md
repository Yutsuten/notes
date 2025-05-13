---
title: SWR
ref: https://swr.vercel.app/docs/api
---

## Usage

Install the `swr` package.

```js
import useSWR from 'swr';

const dataQuery = useSWR(key, fetcher, options);
```

`key` can be anything (string, array, dict),
it will be passed as argument to `fetcher`.

`fetcher` is a function or an async function.
It receives `key` as argument.

`options` is a dict of [configuration options](https://swr.vercel.app/docs/api#options):

| Option               | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `keepPreviousData`   | Return the previous key's data until the new data has been loaded. |
| `refreshInterval`    | Polling interval in milliseconds (0 to disable).                   |
| `revalidateOnFocus`  | Automatically revalidate when window gets focused.                 |
| `shouldRetryOnError` | Retry when fetcher has an error.                                   |
| `onError`            | Callback function when a request returns an error.                 |
| `onSuccess`          | Callback function when a request finishes successfully.            |

The result:

```js
const { data, error, isLoading, isValidating, mutate } = dataQuery;
```

### Typescript

Detailed documentation [here](https://swr.vercel.app/docs/typescript).

Explicitly specify the types for key and fetcher's arguments:

```ts
import useSWR, { Fetcher } from 'swr';
 
const uid = 'user_id';
const fetcher: Fetcher<User, string> = (id) => getUserById(id);
      //     data type ^     ^ argument type
 
const { data } = useSWR(uid, fetcher);
// `data` is `User | undefined`
```

Explicitly specify the types of `data` and `error`, respectively:

```ts
const { data, error } = useSWR<User, Error>(uid, fetcher);
// `data` is `User | undefined`
// `error` is `Error | undefined`
```
