'use strict';

/**
 * view-counter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::view-counter.view-counter');
