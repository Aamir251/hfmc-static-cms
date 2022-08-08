'use strict';

/**
 *  last-order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::last-order.last-order');
