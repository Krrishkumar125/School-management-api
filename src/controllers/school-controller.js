const {StatusCodes} = require('http-status-codes')

const SchoolService =require('../services/school-service');

const schoolService = new SchoolService();

const create = async (req , res) =>{
    try {
        const school = await schoolService.createSchool(req.body);
        return res.status(StatusCodes.CREATED).json({
            data : school,
            success : true,
            message : "Successfully added the school",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success : false,
            message : "Something went wrong",
            err : error,
        });
    }
}

const listSchools = async (req , res) =>{
    try {
        const schools = await schoolService.listSchools(req.query);
        return res.status(StatusCodes.OK).json({
            data : schools,
            success : true,
            message : "Successfully fetched the schools and sorted them by proximity",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success : false,
            message : "Something went wrong",
            err : error,
        });
    }
}

module.exports= {
    create,
    listSchools
}