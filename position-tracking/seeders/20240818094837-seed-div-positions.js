'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('div_positions', [
      {
        div_id: 'div1',
        position: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        div_id: 'div2',
        position: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        div_id: 'div3',
        position: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        div_id: 'div4',
        position: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        div_id: 'div5',
        position: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        div_id: 'div6',
        position: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('div_positions', null, {});
  }
};
