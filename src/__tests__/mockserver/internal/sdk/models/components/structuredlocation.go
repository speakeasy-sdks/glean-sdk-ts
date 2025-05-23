// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// StructuredLocation - Detailed location with information about country, state, city etc.
type StructuredLocation struct {
	// Desk number.
	DeskLocation *string `json:"deskLocation,omitempty"`
	// Location's timezone, e.g. UTC, PST.
	Timezone *string `json:"timezone,omitempty"`
	// Office address or name.
	Address *string `json:"address,omitempty"`
	// Name of the city.
	City *string `json:"city,omitempty"`
	// State code.
	State *string `json:"state,omitempty"`
	// Region information, e.g. NORAM, APAC.
	Region *string `json:"region,omitempty"`
	// ZIP Code for the address.
	ZipCode *string `json:"zipCode,omitempty"`
	// Country name.
	Country *string `json:"country,omitempty"`
	// Alpha-2 or Alpha-3 ISO 3166 country code, e.g. US or USA.
	CountryCode *string `json:"countryCode,omitempty"`
}

func (o *StructuredLocation) GetDeskLocation() *string {
	if o == nil {
		return nil
	}
	return o.DeskLocation
}

func (o *StructuredLocation) GetTimezone() *string {
	if o == nil {
		return nil
	}
	return o.Timezone
}

func (o *StructuredLocation) GetAddress() *string {
	if o == nil {
		return nil
	}
	return o.Address
}

func (o *StructuredLocation) GetCity() *string {
	if o == nil {
		return nil
	}
	return o.City
}

func (o *StructuredLocation) GetState() *string {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *StructuredLocation) GetRegion() *string {
	if o == nil {
		return nil
	}
	return o.Region
}

func (o *StructuredLocation) GetZipCode() *string {
	if o == nil {
		return nil
	}
	return o.ZipCode
}

func (o *StructuredLocation) GetCountry() *string {
	if o == nil {
		return nil
	}
	return o.Country
}

func (o *StructuredLocation) GetCountryCode() *string {
	if o == nil {
		return nil
	}
	return o.CountryCode
}
