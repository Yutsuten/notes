---
title: React Select
ref: https://react-select.com/home
---

## Change height

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
