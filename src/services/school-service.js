const SchoolRepository = require('../repository/school-repository');

class SchoolService{
    constructor(){
        this.schoolRepository = new SchoolRepository();
    }

    async createSchool (data){
        try {
            const school = await this.schoolRepository.createSchool(data);
            return school;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SchoolService;