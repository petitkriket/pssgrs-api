'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async geocode(locationDetails, additionalOptions = {}) {
    const NodeGeocoder = require('node-geocoder');
    const geocoderSettings = {
      provider: 'google',
      apiKey: process.env.GOOGLE_GEOCODER_API_KEY,
      formatter: null,
      minConfidence: 0.8,
      limit: 1,
      ...additionalOptions,
    };

    const geocoder = NodeGeocoder(geocoderSettings);
    const [match] = await geocoder.geocode({ ...locationDetails })
    if (!match) throw new Error('Unable to geocode address');
    
    const normalizedAddress = {
      formattedAddress: match.formattedAddress,
      streetName: match.streetName,
      streetNumber: match.streetNumber,
      zipCode: match.zipcode,
      city: match.city,
      country: match.countryCode,
      state: match.administrativeLevels.level1long,
      latitude: match.latitude,
      longitude: match.longitude,
    };

    return normalizedAddress;
  }
};
