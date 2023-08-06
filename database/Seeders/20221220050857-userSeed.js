'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users_test_jeanfranco', [
            {
                id:1,
                name:"Jean",
                second_name:"Franco",
                lastname:"Ponte",
                lastname_mother:"Solis",
                email:"admin@gmail.com",
                birthdate:"2000-11-25",
                phone:972364645,
                state:true,
                created_at:new Date(),
                updated_at:new Date()
            },
        ])
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('users_test_jeanfranco');
    }
};
