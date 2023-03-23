'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'band',
      'recommendation',
      {
       type: DataTypes.TEXT,
        defaultValue: 'amazing'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'band',
      'recommendation',
      {
        type: DataTypes.STRING,
        defaultValue: null
      }
    )
  }
};
