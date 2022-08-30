'use strict';

/**
 * type-counter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::type-counter.type-counter');
