const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () =>{
     await   connection.destroy();
    })

    it('shoud be able to createa new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "BOLAS",
            email: "contato@geral.com",
            whatsapp: "244929669755",
            city: "Rio do Sul",
            uf: "SC"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});