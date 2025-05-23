// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// BulkIndexUsersRequest - Describes the request body for the /bulkindexusers API call
type BulkIndexUsersRequest struct {
	// Unique id that must be used for this instance of datasource users upload
	UploadID string `json:"uploadId"`
	// true if this is the first page of the upload. Defaults to false
	IsFirstPage *bool `json:"isFirstPage,omitempty"`
	// true if this is the last page of the upload. Defaults to false
	IsLastPage *bool `json:"isLastPage,omitempty"`
	// Flag to discard previous upload attempts and start from scratch. Must be specified with isFirstPage=true
	ForceRestartUpload *bool `json:"forceRestartUpload,omitempty"`
	// datasource of the users
	Datasource string `json:"datasource"`
	// batch of users for the datasource
	Users []DatasourceUserDefinition `json:"users"`
	// True if older user data needs to be force deleted after the upload completes. Defaults to older data being deleted only if the percentage of data being deleted is less than a reasonable threshold. This must only be set when `isLastPage = true`
	DisableStaleDataDeletionCheck *bool `json:"disableStaleDataDeletionCheck,omitempty"`
}

func (o *BulkIndexUsersRequest) GetUploadID() string {
	if o == nil {
		return ""
	}
	return o.UploadID
}

func (o *BulkIndexUsersRequest) GetIsFirstPage() *bool {
	if o == nil {
		return nil
	}
	return o.IsFirstPage
}

func (o *BulkIndexUsersRequest) GetIsLastPage() *bool {
	if o == nil {
		return nil
	}
	return o.IsLastPage
}

func (o *BulkIndexUsersRequest) GetForceRestartUpload() *bool {
	if o == nil {
		return nil
	}
	return o.ForceRestartUpload
}

func (o *BulkIndexUsersRequest) GetDatasource() string {
	if o == nil {
		return ""
	}
	return o.Datasource
}

func (o *BulkIndexUsersRequest) GetUsers() []DatasourceUserDefinition {
	if o == nil {
		return []DatasourceUserDefinition{}
	}
	return o.Users
}

func (o *BulkIndexUsersRequest) GetDisableStaleDataDeletionCheck() *bool {
	if o == nil {
		return nil
	}
	return o.DisableStaleDataDeletionCheck
}
