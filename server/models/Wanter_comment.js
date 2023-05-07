const Wanter_comment = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "wanter_comment",
    {
      wanter_comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      wanter_comment_board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wanter_comment_writer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      wanter_comment_content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      wanter_comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
<<<<<<< HEAD
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
=======
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
>>>>>>> 4a85c6c155f17b513439e09be1bd2b00e248b44d
      },
    },
    { tableName: "wanter_comment", freezeTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Wanter_comment;
