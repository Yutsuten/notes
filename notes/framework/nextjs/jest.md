---
title: Jest
ref: https://stackoverflow.com/a/73830234
---

## Mock import

Example of mocking `import { useRouter } from 'next/router'`.

To mock the same value for all tests:

```ts
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/home',
    };
  },
}));
```

To mock different values for each test:

```ts
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('MyTest', () => {
  it('tests something', () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/home',
    });
  });
});
```

### Mock axios

- [Reference](https://www.csrhymes.com/2022/03/09/mocking-axios-with-jest-and-typescript.html)

Import:

```ts
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
```

Without delay:

```ts
mockedAxios.get.mockResolvedValue({data: []});
```

With delay:

```ts
mockedAxios.get.mockImplementation(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: []}), 50);
  });
});
```
