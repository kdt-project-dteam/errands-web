const Wanter_comment = function (Sequelize, DataTypes) {
<<<<<<< HEAD
    const model = Sequelize.define(
        'wanter_comment',
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
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        },
        { tableName: 'wanter_comment', freezeTableName: true, timestamps: false }
    );
    return model;
=======
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
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    { tableName: "wanter_comment", freezeTableName: true, timestamps: false }
  );
  return model;
>>>>>>> bd0deb4b706f77804a987c83399669f76d344ce1
};

module.exports = Wanter_comment;
