---
title: Select
ref: https://react-select.com/home
---

## Usage

Example with empty value as default and fixed options.
Use `clearSelection()` to clear the selection programatically.

```ts
import React from 'react';
import Select, { SingleValue } from 'react-select';

import styles from '../styles/myselect.module.css';

const options = [
 { label: 'Option 1', value: '1' },
 { label: 'Option 2', value: '2' },
 { label: 'Option 3', value: '3' },
];
const [selected, setSelected] = React.useState<SingleValue<{label: string; value: string;}>>();

function clearSelection() {
  setSelected(null);
}

return (
  <Select
    intanceId="instance-id"
    placeholder="Please select"
    aria-label="select-1"
    options={options}
    value={selected}
    onChange={ (opt) => {
      setSelected(opt);
    }}
    className={styles.selector}
  />
);
```

### Change height

Reducing the height requires some workaround.

```ts
import Select from 'react-select';
import type { Theme } from 'react-select';

function PulldownSearch({ instanceId, options, setFilterValue }) {
  const theme = (theme: Theme) => ({
    ...theme,
    spacing: { // Change pulldown height to 26px
      ...theme.spacing,
      baseUnit: 2,
      controlHeight: 26,
      menuGutter: 4,
    },
  });
  return (
    <Select
      instanceId={instanceId}
      isSearchable={false}
      isClearable={false}
      defaultValue={options[0]}
      options={options}
      theme={theme}
      styles={{
        option: (base) => ({ // Fix options being too small
          ...base,
          padding: 8,
        }),
      }}
      onChange={(option) => {
        setFilterValue(option?.value);
      }}
    />
  );
}
```
