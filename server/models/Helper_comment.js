const Helper_comment = function (Sequelize, DataTypes) {
<<<<<<< HEAD
    const model = Sequelize.define(
        'helper_comment',
        {
            helper_comment_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            helper_comment_board_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            helper_comment_writer: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            helper_comment_content: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            helper_comment_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        },
        { tableName: 'helper_comment', freezeTableName: true, timestamps: false }
    );
    return model;
=======
  const model = Sequelize.define(
    'helper_comment',
    {
      helper_comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      helper_comment_board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      helper_comment_writer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      helper_comment_content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      helper_comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    { tableName: 'helper_comment', freezeTableName: true, timestamps: false }
  );
  return model;
>>>>>>> bd0deb4b706f77804a987c83399669f76d344ce1
};

module.exports = Helper_comment;
