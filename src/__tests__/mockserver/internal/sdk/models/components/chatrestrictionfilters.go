// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type ChatRestrictionFilters struct {
	// Specifications for containers that should be used as part of the restriction (include/exclude). Memberships are recursively defined for a subset of datasources (currently: SharePoint, OneDrive, Google Drive, and Confluence). Please contact the Glean team to enable this for more datasources. Recursive memberships do not apply for Collections.
	ContainerSpecs      []DocumentSpecUnion `json:"containerSpecs,omitempty"`
	DocumentSpecs       []DocumentSpecUnion `json:"documentSpecs,omitempty"`
	DatasourceInstances []string            `json:"datasourceInstances,omitempty"`
}

func (o *ChatRestrictionFilters) GetContainerSpecs() []DocumentSpecUnion {
	if o == nil {
		return nil
	}
	return o.ContainerSpecs
}

func (o *ChatRestrictionFilters) GetDocumentSpecs() []DocumentSpecUnion {
	if o == nil {
		return nil
	}
	return o.DocumentSpecs
}

func (o *ChatRestrictionFilters) GetDatasourceInstances() []string {
	if o == nil {
		return nil
	}
	return o.DatasourceInstances
}
