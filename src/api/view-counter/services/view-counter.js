'use strict';

/**
 * view-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::view-counter.view-counter');
