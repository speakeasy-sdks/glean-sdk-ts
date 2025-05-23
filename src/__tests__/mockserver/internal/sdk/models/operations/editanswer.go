// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type EditanswerResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	Answer *components.Answer
}

func (o *EditanswerResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *EditanswerResponse) GetAnswer() *components.Answer {
	if o == nil {
		return nil
	}
	return o.Answer
}
