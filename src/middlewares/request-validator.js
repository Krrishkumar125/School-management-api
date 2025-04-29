const { StatusCodes } = require("http-status-codes");

const validateCreateSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "All fields are required: name, address, latitude, longitude",
      success: false,
      data : {}
    });
  }

  if (typeof name !== "string" || typeof address !== "string") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Name and address must be strings.",
      success: false,
      data : {}
    });
  }

  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Latitude and Longitude must be numbers.",
      success: false,
      data : {}
    });
  }

  if (latitude < -90 || latitude > 90) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Latitude must be between -90 and 90.",
      success: false,
      data : {}
    });
  }

  if (longitude < -180 || longitude > 180) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Longitude must be between -180 and 180.",
      success: false,
      data : {}
    });
  }

  next();
};

const validateListSchool = (req, res, next) => {
  const { longitude, latitude } = req.query;

  if (latitude == null || longitude == null) {
    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User latitude and longitude are required.",
        success: false,
        data : {}
      });
  }

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Latitude and Longitude must be numbers.",
        success: false,
        data : {}
      });
  }

  next();
};

module.exports = {
  validateCreateSchool,
  validateListSchool
};
