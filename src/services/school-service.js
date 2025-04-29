const SchoolRepository = require('../repository/school-repository');

class SchoolService{
    constructor(){
        this.schoolRepository = new SchoolRepository();
    }
    
    #calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    async createSchool (data){
        try {
            const school = await this.schoolRepository.createSchool(data);
            return school;
        } catch (error) {
            throw error;
        }
    }

    async listSchools (data){
        try {
            const userLatitude = data.latitude;
            const userLongitude = data.longitude;

            const schools = await this.schoolRepository.getAllSchool();
            
            const schoolsWithDistance = schools.map(school => {
                const distance = this.#calculateDistance(userLatitude, userLongitude, school.latitude, school.longitude);
                return {
                  ...school.toJSON(),
                  distance
                };
              });

            schoolsWithDistance.sort((a, b) => a.distance - b.distance);
            return schoolsWithDistance;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SchoolService;