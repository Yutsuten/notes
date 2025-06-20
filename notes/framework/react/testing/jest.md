---
title: Jest
ref: https://jestjs.io/docs/api
---

## Command line

Given this configuration in `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

For the full documentation, check [Jest CLI Options](https://jestjs.io/docs/cli).

Run a specific script with:

```shell
pnpm run test __tests__/path/to/test.tsx
```

Run a specific test with (match against the name in `describe` or `test`):

```shell
pnpm run test -t 'open home screen'
```

## Parametrize

Check the full documentation [here](https://jestjs.io/docs/api#testeachtablename-fn-timeout).

Using a list:

```typescript
test.each([
  [1, 'expected output 1'],
  [2, 'expected output 2'],
])('test with param %i', (inputNum, expected) => {
  console.log(`${inputNum} ${expected}`);
})
```

Using a dict:

```typescript
test.each([
  { inputNum: 1, expected: 'expected output 1' },
  { inputNum: 2, expected: 'expected output 2' },
])('test with param $inputNum', ({ inputNum, expected }) => {
  console.log(`${inputNum} ${expected}`);
})
```

## Expect error

If a call is [expected to throw an error](https://jestjs.io/docs/using-matchers#exceptions):

```javascript
expect(() => willThrow()).toThrow();
```

The code changes slightly
[if we are doing things asynchronously](https://jestjs.io/docs/expect#rejects):

```javascript
await expect(() => asyncWillThrow()).rejects.toThrow();
```

## Mocking

List of functions [here](https://jestjs.io/docs/mock-function-api).

| Function | Description |
| --- | --- |
| `mockClear` | Clean up a mocks usage data between two assertions. |
| `mockReset` | Replaces the mock implementation with an empty function. |
| `mockRestore` | Restores the original (non-mocked) implementation. |

### Mock import

Example of mocking `import { useRouter } from 'next/router'`.

To mock the same value for all tests:

```typescript
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/home',
    };
  },
}));
```

To mock different values for each test:

```typescript
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('MyTest', () => {
  test('tests something', () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/home',
    });
  });
});
```

To mock axios ([reference](https://www.csrhymes.com/2022/03/09/mocking-axios-with-jest-and-typescript.html)):

Import:

```typescript
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
```

Without delay:

```typescript
mockedAxios.get.mockResolvedValue({data: []});
```

With delay:

```typescript
mockedAxios.get.mockImplementation(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: []}), 50);
  });
});
```

### Mock builtin

Mocking `window` ([reference](https://stackoverflow.com/questions/41885841/how-can-i-mock-the-javascript-window-object-using-jest)):

Suppose you have `window.open('http://example.com', '_blank').focus()`.
You can use `jest.spyOn` to mock `window`.

```typescript
let windowOpenSpy: jest.Mock;
let windowOpenFocusMock: jest.Mock;

beforeEach(() => {
  windowOpenSpy = jest.spyOn(window, 'open') as jest.Mock;
  windowOpenFocusMock = jest.fn(() => {});
  windowOpenSpy.mockReturnValue({
    focus: windowOpenFocusMock,
  });
});

afterEach(() => {
  windowOpenFocusMock.mockRestore();
  windowOpenSpy.mockRestore();
});
```

Then inside the test:

```typescript
await act(async () => {
  fireEvent.click(screen.getAllByRole('button', { name: 'Open new window' }));
});
expect(windowOpenSpy).toHaveBeenCalledWith('http://example.com', '_blank');
expect(windowOpenFocusMock).toHaveBeenCalled();
```

Mocking `global`:

Some (all?) global variables are not defined inside jest.

```javascript
global.URL.createObjectURL = jest.fn(() => '');
global.URL.revokeObjectURL = jest.fn();
```

Mocking `console`:

Validate logs and (optionally) prevent them from polluting test logs.

```javascript
const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {}); // Skip mockImplementation to keep logs
functionToBeTested();
expect(consoleWarnSpy).toHaveBeenCalledWith('something was not quite as expected');
```

### Mock timers

Mocking `setTimeout`-like native functions ([reference](https://jestjs.io/docs/timer-mocks)):

```typescript
jest.useFakeTimers();

test('my test', () => {
  // ...
  jest.runAllTimers();
  jest.runOnlyPendingTimers();
  jest.advanceTimersByTime(1000);
});
```

## More documentation

- [API for act](https://react.dev/reference/react/act)
