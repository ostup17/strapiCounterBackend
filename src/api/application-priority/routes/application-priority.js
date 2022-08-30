'use strict';

/**
 * application-priority router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::application-priority.application-priority');
