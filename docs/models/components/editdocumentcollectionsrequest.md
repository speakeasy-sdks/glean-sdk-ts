# EditDocumentCollectionsRequest

## Example Usage

```typescript
import { EditDocumentCollectionsRequest } from "@gleanwork/api-client/models/components";

let value: EditDocumentCollectionsRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `addedCollections`                                                                                        | *number*[]                                                                                                | :heavy_minus_sign:                                                                                        | IDs of Collections to which a document is added.                                                          |
| `removedCollections`                                                                                      | *number*[]                                                                                                | :heavy_minus_sign:                                                                                        | IDs of Collections from which a document is removed.                                                      |
| `documentId`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The Glean Document ID of the item being added to or removed from Collections if it's an indexed document. |
| `url`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The URL of the item being added to or removed from Collections.                                           |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Custom title of the document if adding a non-indexed URL.                                                 |
| `description`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The description of this CollectionItem.                                                                   |