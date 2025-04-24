# OnboardingAdminRecipientData

metadata needed to construct an onboarding invitation email for one recipient

## Example Usage

```typescript
import { OnboardingAdminRecipientData } from "@gleanwork/api-client/models/components";

let value: OnboardingAdminRecipientData = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `recipientEmail`                                                 | *string*                                                         | :heavy_minus_sign:                                               | email address of the intended recipient                          |
| `roleDisplayName`                                                | *string*                                                         | :heavy_minus_sign:                                               | display name of the role that has been assigned to the recipient |