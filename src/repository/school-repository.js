const { School } = require('../models/index');

class SchoolRepository{
    async createSchool(data){
        try{
            const school = await School.create({
                name : data.name,
                address : data.address,
                latitude : data.latitude,
                longitude : data.longitude
            })
            return school;
        }catch(error){
            throw error;
        }
    }
}

module.exports = SchoolRepository