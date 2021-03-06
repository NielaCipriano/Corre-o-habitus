'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('conteudo_Perfil', { 
      id:{ //não pode mudar o nome da variável?
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, //consultar depois como criar um padrao de incrementar id
        allowNull: false,
      },
      conteudo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'conteudos', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      perfil_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'perfils', key: 'id'},
        onUptade: 'CASCADE',
        onDelete: 'CASCADE', //set null, restrict
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('conteudo_Perfil');
    
  }
};