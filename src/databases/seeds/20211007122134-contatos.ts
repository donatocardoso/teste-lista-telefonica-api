"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Contatos",
      [
        {
          nome: "John Doe",
          email: "john.doe@gmail.com",
          celular: "",
          telefone: "",
          ativo: true,          
        },
        {
          nome: "David Wilson",
          email: "david.wilson@gmail.com",
          celular: "+55 16 9 63489-6648",
          telefone: "",
          ativo: true,          
        },
        {
          nome: "Mary Jane",
          email: "mary.jane@gmail.com",
          celular: "",
          telefone: "+55 16 9 9024-6196",
          ativo: true,          
        },
        {
          nome: "Peter Parker",
          email: "peter.parker@gmail.com",
          celular: "+55 16 9 4732-3015",
          telefone: "+55 16 9 6348-9839",
          ativo: true,          
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Contatos", null, {});
  },
};
