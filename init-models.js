var DataTypes = require("sequelize").DataTypes;
var _bookingDetails = require("./bookingDetails");
var _mobileVerification = require("./mobileVerification");
var _stationDetails = require("./stationDetails");
var _userDetails = require("./userDetails");
var _vehicleDetails = require("./vehicleDetails");

function initModels(sequelize) {
  var bookingDetails = _bookingDetails(sequelize, DataTypes);
  var mobileVerification = _mobileVerification(sequelize, DataTypes);
  var stationDetails = _stationDetails(sequelize, DataTypes);
  var userDetails = _userDetails(sequelize, DataTypes);
  var vehicleDetails = _vehicleDetails(sequelize, DataTypes);


  return {
    bookingDetails,
    mobileVerification,
    stationDetails,
    userDetails,
    vehicleDetails,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
