'use strict';

/**
 * last-order service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-order.last-order');
