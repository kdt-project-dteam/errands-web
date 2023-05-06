const User_info = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'user_info',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,
      },
      user_type: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
    },
    { tableName: 'user_info', freezeTableName: true, timestamps: false }
  );
  return model;
};

module.exports = User_info;
