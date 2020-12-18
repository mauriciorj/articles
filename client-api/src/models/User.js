import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  User.findByLogin = async (login) => {
    let user = await User.findOne({
      where: { name: login },
    });
    return user;
  };

  User.beforeCreate(async (user) => {
    if (user.password) {
      user.password = await user.generatePasswordHash();
    }
  });

  User.prototype.updatePasswordHash = async function (password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };

  User.prototype.generatePasswordHash = async function () {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
  };

  User.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
