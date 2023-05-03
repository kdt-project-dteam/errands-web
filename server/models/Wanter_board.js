const Wanter_board = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "wanter_board",
    {
      wanter_board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      wanter_board_writer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      wanter_board_title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      wanter_board_content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      wanter_board_place: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      wanter_board_date: {
        type: TIMESTAMP,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
      wanter_board_hit: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { tableName: "wanter_board", freezeTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Wanter_board;
