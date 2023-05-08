const Helper_board = function (Sequelize, DataTypes) {
<<<<<<< HEAD
    const model = Sequelize.define(
        'helper_board',
        {
            helper_board_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            helper_board_writer: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            helper_board_title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            helper_board_content: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            helper_board_place: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            helper_board_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            helper_board_hit: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        { tableName: 'helper_board', freezeTableName: true, timestamps: false }
    );
    return model;
=======
  const model = Sequelize.define(
    'helper_board',
    {
      helper_board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      helper_board_writer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      helper_board_title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      helper_board_content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      helper_board_place: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      helper_board_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      helper_board_hit: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { tableName: 'helper_board', freezeTableName: true, timestamps: false }
  );
  return model;
>>>>>>> bd0deb4b706f77804a987c83399669f76d344ce1
};

module.exports = Helper_board;
