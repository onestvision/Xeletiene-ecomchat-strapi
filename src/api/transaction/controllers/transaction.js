'use strict';

/**
 * transaction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transaction.transaction', ({ strapi }) => ({
  async processPayment(ctx) {
    console.log(ctx.request.body);
    
    const { event, data } = ctx.request.body;

    if (event == "transaction.updated") {
      await strapi.service('api::transaction.transaction').processPayment(data);
    }
  }
}
));
