'use strict';

/**
 * view-counter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::view-counter.view-counter');
