const bcryptjs = require('bcryptjs');

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Fred 1',
          email: "fred1@gmail.com",
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Fred 2',
          email: "fred2@gmail.com",
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Fred 3',
          email: "fred3@gmail.com",
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});

  },

  async down () {}
};
