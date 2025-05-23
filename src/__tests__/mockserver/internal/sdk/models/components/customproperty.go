// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// CustomProperty - Describes the custom properties of the object.
type CustomProperty struct {
	Name *string `json:"name,omitempty"`
	// Must either be a string or an array of strings. An integer, boolean, etc. is not valid. When OpenAPI Generator supports `oneOf`, we can semantically enforce this.
	Value any `json:"value,omitempty"`
}

func (o *CustomProperty) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *CustomProperty) GetValue() any {
	if o == nil {
		return nil
	}
	return o.Value
}
