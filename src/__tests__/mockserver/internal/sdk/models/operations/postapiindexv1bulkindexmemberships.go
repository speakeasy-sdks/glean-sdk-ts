// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type PostAPIIndexV1BulkindexmembershipsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *PostAPIIndexV1BulkindexmembershipsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
