const SchoolService =require('../services/school-service');

const schoolService = new SchoolService();

const create = async (req , res) =>{
    try {
        const school = await schoolService.createSchool(req.body);
        return res.status(201).json({
            data : school,
            success : true,
            message : "Successfully added the school",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            message : "Something went wrong",
            err : error,
        });
    }
}

module.exports= {
    create
}