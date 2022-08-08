'use strict';

/**
 * last-order router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::last-order.last-order');
