'use strict';

/**
 * userr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::userr.userr');
