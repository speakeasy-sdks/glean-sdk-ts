# WriteActionType

Valid only for write actions. Represents the type of write action. REDIRECT - The client renders the URL which contains information for carrying out the action. EXECUTION - Send a request to an external server and execute the action.

## Example Usage

```typescript
import { WriteActionType } from "@gleanwork/api-client/models/components";

let value: WriteActionType = "EXECUTION";
```

## Values

```typescript
"REDIRECT" | "EXECUTION"
```