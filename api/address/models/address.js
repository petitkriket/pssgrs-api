'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            const { formattedAddress } = data;

            if (formattedAddress) {
                const geocodedData = await strapi.services.address.geocode({ address: formattedAddress });
                Object.assign(data, geocodedData);
            };
        },
        async beforeUpdate(params, data) {
            const { formattedAddress } = data;

            if (formattedAddress) {
                const geocodedData = await strapi.services.address.geocode({ address: formattedAddress });
                Object.assign(data, geocodedData);
            };
        },
    },
};
