"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User_info = require("./User_info")(sequelize, Sequelize);
db.Wanter_board = require("./Wanter_board")(sequelize, Sequelize);
db.Wanter_comment = require("./Wanter_comment")(sequelize, Sequelize);
db.Helper_board = require("./Helper_board")(sequelize, Sequelize);
db.Helper_comment = require("./Helper_comment")(sequelize, Sequelize);

db.User_info.hasMany(db.Wanter_board, {
  foreignKey: "wanter_board_writer",
  sourceKey: "user_name",
});
db.Wanter_board.belongsTo(db.User_info, {
  foreignKey: "wanter_board_writer",
  targetKey: "user_name",
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.User_info.hasMany(db.Wanter_comment, {
  foreignKey: "wanter_comment_writer",
  sourceKey: "user_name",
});
db.Wanter_comment.belongsTo(db.User_info, {
  foreignKey: "wanter_comment_writer",
  targetKey: "user_name",
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.User_info.hasMany(db.Helper_board, {
  foreignKey: "helper_board_writer",
  sourceKey: "user_name",
});
db.Helper_board.belongsTo(db.User_info, {
  foreignKey: "helper_board_writer",
  targetKey: "user_name",
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.User_info.hasMany(db.Helper_comment, {
  foreignKey: "helper_comment_writer",
  sourceKey: "user_name",
});
db.Helper_comment.belongsTo(db.User_info, {
  foreignKey: "helper_comment_writer",
  targetKey: "user_name",
  onDelete: "cascade",
  onUpdate: "cascade",
});

module.exports = db;
