const generate = require('../../src/utils/generateId')

describe('Generate Unique Id', ()=>{
    it('shoudl generate an unique ID', ()=>{
        const id = generate();

        expect(id).toHaveLength(8);
    })
})