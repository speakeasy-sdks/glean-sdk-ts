// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"io"
)

type File struct {
	FileName string    `multipartForm:"name=fileName"`
	Content  io.Reader `multipartForm:"content"`
}

func (o *File) GetFileName() string {
	if o == nil {
		return ""
	}
	return o.FileName
}

func (o *File) GetContent() io.Reader {
	if o == nil {
		return nil
	}
	return o.Content
}

type UploadChatFilesRequest struct {
	// Raw files to be uploaded for chat in binary format.
	Files []File `multipartForm:"name=files"`
}

func (o *UploadChatFilesRequest) GetFiles() []File {
	if o == nil {
		return []File{}
	}
	return o.Files
}
