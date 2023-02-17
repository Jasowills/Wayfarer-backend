"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = _interopRequireDefault(require("../config/config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var basename = _path["default"].basename(__filename);
var configEnv;
var sequelize;
var db = {};
if (process.env.NODE_ENV === 'production') {
  configEnv = _config["default"].production;
} else {
  configEnv = process.env.NODE_ENV === 'test' ? _config["default"].test : _config["default"].development;
}
if (configEnv.use_env_variable) {
  sequelize = new _sequelize["default"](process.env[configEnv.use_env_variable], configEnv);
} else {
  sequelize = new _sequelize["default"](configEnv.database, configEnv.username, configEnv.password, configEnv);
}
_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (modelFile) {
  var model = sequelize["import"](_path["default"].join(__dirname, modelFile));
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
module.exports = db;