const Errands = function (Sequelize, DataTypes) {
  const UserInfo = Sequelize.define(
    "userinfo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_pw: { type: DataTypes.STRING, allowNull: false },
      user_name: { type: DataTypes.STRING, allowNull: false },
      user_type: {
        /* T/F ? */
      },
    },
    { tableName: "userinfo", freezeTableName: true }
  );

  const Board = Sequelize.define(
    "board",
    {
      board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      board_title: { type: DataTypes.STRING(200) },
      board_content: {},
      board_date: {},
    },
    { tableName: "board" }
  );

  const Meeting = Sequelize.define(
    "meeting",
    {
      meeting_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      meeting_writer: {},
      meeting_title: {},
      meeting_content: {},
      meeting_place: {},
      meeting_date: {},
      meeting_done: {},
    },
    { tableName: "meeting" }
  );
  const Comment = Sequelize.define(
    "comment",
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_writer: {},
      comment_content: {},
      comment_date: {},
    },
    { tableName: "comment" }
  );

  return { UserInfo, Board, Meeting, Comment };
};

module.exports = Errands;
