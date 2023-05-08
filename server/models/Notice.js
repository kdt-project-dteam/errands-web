const Notice = function (Sequelize, DataTypes) {
<<<<<<< HEAD
    const model = Sequelize.define(
        'notice',
        {
            notice_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            notice_writer: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            notice_title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            notice_content: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            notice_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            notice_hit: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        { tableName: 'notice', freezeTableName: true, timestamps: false }
    );
    return model;
=======
  const model = Sequelize.define(
    "notice",
    {
      notice_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      notice_writer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      notice_title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      notice_content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      notice_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      notice_hit: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { tableName: "notice", freezeTableName: true, timestamps: false }
  );
  return model;
>>>>>>> bd0deb4b706f77804a987c83399669f76d344ce1
};

module.exports = Notice;
