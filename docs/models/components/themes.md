# Themes

A set of Theme objects to make available to the user based on their chosen preference. If a theme variant is not supplied, the default theme will be used.

## Example Usage

```typescript
import { Themes } from "@gleanwork/api-client/models/components";

let value: Themes = {
  light: {
    "background": "#fafafa",
    "textPrimary": "#1e1e1e",
  },
  dark: {
    "background": "#1e1e1e",
    "textPrimary": "#fafafa",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              | Example                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `light`                                                                                                                                                                                                                  | Record<string, *string*>                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | A map of {string, string} pairs where the key represents a known theme option and the value is the CSS color to apply. Supported options are documented in https://dev.glean.com/meta/browser_api/interfaces/Theme.html. | {<br/>"background": "#fafafa",<br/>"textPrimary": "#1e1e1e"<br/>}                                                                                                                                                        |
| `dark`                                                                                                                                                                                                                   | Record<string, *string*>                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | A map of {string, string} pairs where the key represents a known theme option and the value is the CSS color to apply. Supported options are documented in https://dev.glean.com/meta/browser_api/interfaces/Theme.html. | {<br/>"background": "#fafafa",<br/>"textPrimary": "#1e1e1e"<br/>}                                                                                                                                                        |