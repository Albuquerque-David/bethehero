const connection = require('../connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response)
    {
        try
        {
            const ongs = await connection('ongs').select('*');
    
            return response.json(ongs);
        }
        catch(err)
        {
            return response.json(err)
        }
    },


    async create (request, response)
    {
    try
    {
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id });
    }
    catch(error)
    {
        console.log(error);
    }
    }
}