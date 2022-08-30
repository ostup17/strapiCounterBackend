'use strict';

/**
 * vendor-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor-counter.vendor-counter');
