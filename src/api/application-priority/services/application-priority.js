'use strict';

/**
 * application-priority service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-priority.application-priority');
