// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/utils"
)

type Author string

const (
	AuthorUser    Author = "USER"
	AuthorGleanAi Author = "GLEAN_AI"
)

func (e Author) ToPointer() *Author {
	return &e
}
func (e *Author) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "USER":
		fallthrough
	case "GLEAN_AI":
		*e = Author(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Author: %v", v)
	}
}

// MessageType - Semantically groups content of a certain type. It can be used for purposes such as differential UI treatment. USER authored messages should be of type CONTENT and do not need `messageType` specified.
type MessageType string

const (
	MessageTypeUpdate        MessageType = "UPDATE"
	MessageTypeContent       MessageType = "CONTENT"
	MessageTypeContext       MessageType = "CONTEXT"
	MessageTypeDebug         MessageType = "DEBUG"
	MessageTypeDebugExternal MessageType = "DEBUG_EXTERNAL"
	MessageTypeError         MessageType = "ERROR"
	MessageTypeHeading       MessageType = "HEADING"
	MessageTypeWarning       MessageType = "WARNING"
)

func (e MessageType) ToPointer() *MessageType {
	return &e
}
func (e *MessageType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "UPDATE":
		fallthrough
	case "CONTENT":
		fallthrough
	case "CONTEXT":
		fallthrough
	case "DEBUG":
		fallthrough
	case "DEBUG_EXTERNAL":
		fallthrough
	case "ERROR":
		fallthrough
	case "HEADING":
		fallthrough
	case "WARNING":
		*e = MessageType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for MessageType: %v", v)
	}
}

// ChatMessage - A message that is rendered as one coherent unit with one given sender.
type ChatMessage struct {
	// Describes the agent that executes the request.
	AgentConfig *AgentConfig `json:"agentConfig,omitempty"`
	Author      *Author      `default:"USER" json:"author"`
	// A list of Citations that were used to generate the response.
	Citations []ChatMessageCitation `json:"citations,omitempty"`
	// IDs of files uploaded in the message that are referenced to generate the answer.
	UploadedFileIds []string `json:"uploadedFileIds,omitempty"`
	// A list of rich data used to represent the response or formulate a request. These are linearly stitched together to support richer data formats beyond simple text.
	Fragments []ChatMessageFragment `json:"fragments,omitempty"`
	// Response timestamp of the message.
	Ts *string `json:"ts,omitempty"`
	// A unique server-side generated ID used to identify a message, automatically populated for any USER authored messages.
	MessageID *string `json:"messageId,omitempty"`
	// Opaque tracking token generated server-side.
	MessageTrackingToken *string `json:"messageTrackingToken,omitempty"`
	// Semantically groups content of a certain type. It can be used for purposes such as differential UI treatment. USER authored messages should be of type CONTENT and do not need `messageType` specified.
	MessageType *MessageType `default:"CONTENT" json:"messageType"`
	// Signals there are additional response fragments incoming.
	//
	// Deprecated: This will be removed in a future release, please migrate away from it as soon as possible.
	HasMoreFragments *bool `json:"hasMoreFragments,omitempty"`
}

func (c ChatMessage) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *ChatMessage) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *ChatMessage) GetAgentConfig() *AgentConfig {
	if o == nil {
		return nil
	}
	return o.AgentConfig
}

func (o *ChatMessage) GetAuthor() *Author {
	if o == nil {
		return nil
	}
	return o.Author
}

func (o *ChatMessage) GetCitations() []ChatMessageCitation {
	if o == nil {
		return nil
	}
	return o.Citations
}

func (o *ChatMessage) GetUploadedFileIds() []string {
	if o == nil {
		return nil
	}
	return o.UploadedFileIds
}

func (o *ChatMessage) GetFragments() []ChatMessageFragment {
	if o == nil {
		return nil
	}
	return o.Fragments
}

func (o *ChatMessage) GetTs() *string {
	if o == nil {
		return nil
	}
	return o.Ts
}

func (o *ChatMessage) GetMessageID() *string {
	if o == nil {
		return nil
	}
	return o.MessageID
}

func (o *ChatMessage) GetMessageTrackingToken() *string {
	if o == nil {
		return nil
	}
	return o.MessageTrackingToken
}

func (o *ChatMessage) GetMessageType() *MessageType {
	if o == nil {
		return nil
	}
	return o.MessageType
}

func (o *ChatMessage) GetHasMoreFragments() *bool {
	if o == nil {
		return nil
	}
	return o.HasMoreFragments
}
