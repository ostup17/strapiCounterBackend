'use strict';

/**
 * type-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-counter.type-counter');
