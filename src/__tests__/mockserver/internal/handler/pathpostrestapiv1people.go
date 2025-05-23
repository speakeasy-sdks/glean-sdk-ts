// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathPostRestAPIV1People(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "people[0]":
			dir.HandlerFunc("people", testPeoplePeople0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testPeoplePeople0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, false, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.ContentType(req, "application/json", true); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	respBody := &components.PeopleResponse{
		Results: []components.Person{
			components.Person{
				Name:         "George Clooney",
				ObfuscatedID: "abc123",
			},
		},
		RelatedDocuments: []components.RelatedDocuments{
			components.RelatedDocuments{
				QuerySuggestion: &components.QuerySuggestion{
					Query: "app:github type:pull author:mortimer",
					SearchProviderInfo: &components.SearchProviderInfo{
						Name:                  types.String("Google"),
						SearchLinkURLTemplate: types.String("https://www.google.com/search?q={query}&hl=en"),
					},
					Label:      types.String("Mortimer's PRs"),
					Datasource: types.String("github"),
					RequestOptions: &components.SearchRequestOptions{
						DatasourceFilter: types.String("JIRA"),
						DatasourcesFilter: []string{
							"JIRA",
						},
						QueryOverridesFacetFilters: types.Bool(true),
						FacetFilters: []components.FacetFilter{
							components.FacetFilter{
								FieldName: types.String("type"),
								Values: []components.FacetFilterValue{
									components.FacetFilterValue{
										Value:        types.String("Spreadsheet"),
										RelationType: components.RelationTypeEquals.ToPointer(),
									},
									components.FacetFilterValue{
										Value:        types.String("Presentation"),
										RelationType: components.RelationTypeEquals.ToPointer(),
									},
								},
							},
						},
						FacetFilterSets: []components.FacetFilterSet{
							components.FacetFilterSet{
								Filters: []components.FacetFilter{
									components.FacetFilter{
										FieldName: types.String("type"),
										Values: []components.FacetFilterValue{
											components.FacetFilterValue{
												Value:        types.String("Spreadsheet"),
												RelationType: components.RelationTypeEquals.ToPointer(),
											},
											components.FacetFilterValue{
												Value:        types.String("Presentation"),
												RelationType: components.RelationTypeEquals.ToPointer(),
											},
										},
									},
								},
							},
							components.FacetFilterSet{
								Filters: []components.FacetFilter{
									components.FacetFilter{
										FieldName: types.String("type"),
										Values: []components.FacetFilterValue{
											components.FacetFilterValue{
												Value:        types.String("Spreadsheet"),
												RelationType: components.RelationTypeEquals.ToPointer(),
											},
											components.FacetFilterValue{
												Value:        types.String("Presentation"),
												RelationType: components.RelationTypeEquals.ToPointer(),
											},
										},
									},
								},
							},
							components.FacetFilterSet{
								Filters: []components.FacetFilter{
									components.FacetFilter{
										FieldName: types.String("type"),
										Values: []components.FacetFilterValue{
											components.FacetFilterValue{
												Value:        types.String("Spreadsheet"),
												RelationType: components.RelationTypeEquals.ToPointer(),
											},
											components.FacetFilterValue{
												Value:        types.String("Presentation"),
												RelationType: components.RelationTypeEquals.ToPointer(),
											},
										},
									},
								},
							},
						},
						FacetBucketSize: 325985,
						AuthTokens: []components.AuthToken{
							components.AuthToken{
								AccessToken: "123abc",
								Datasource:  "gmail",
								Scope:       types.String("email profile https://www.googleapis.com/auth/gmail.readonly"),
								TokenType:   types.String("Bearer"),
								AuthUser:    types.String("1"),
							},
						},
					},
					Ranges: []components.TextRange{},
					InputDetails: &components.SearchRequestInputDetails{
						HasCopyPaste: types.Bool(true),
					},
				},
				Results: []components.SearchResult{},
			},
		},
	}
	respBodyBytes, err := utils.MarshalJSON(respBody, "", true)

	if err != nil {
		http.Error(
			w,
			"Unable to encode response body as JSON: "+err.Error(),
			http.StatusInternalServerError,
		)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}
