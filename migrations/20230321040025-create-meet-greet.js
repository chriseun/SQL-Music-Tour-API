'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greet', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meet_greet_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      event_id: {
        type: Sequelize.INTEGER,
         allowNull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
         allowNull: false
      },
      meet_start_time: {
        type: Sequelize.DATE,
         allowNull: false
      },
      meet_end_time: {
        type: Sequelize.DATE,
         allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greet');
  }
};
