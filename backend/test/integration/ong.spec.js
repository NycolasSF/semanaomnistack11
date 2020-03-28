const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll( async ()=>{
        await connection.destroy();
    })
    it('should be able create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        // .set('Authorization', 'id-valido')
        .send({
            name:' name-test',
            email: 'email-test@email.com',
            whatsapp: '5512345678',
            city: 'city-test',
            uf: 'uf'
        });   
        expect(response.body).toHaveProperty("id");
        expect(response.body.id).toHaveLength(8);
        
    });
})