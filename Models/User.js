const bcrypt = require('bcryptjs');
const { USER_MESSAGES } = require('../Constants/index');
module.exports = (db, DataTypes) => {
  const User = db.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: USER_MESSAGES.REQUIRED.FIRST_NAME,
          },
          len: {
            args: [2, 32],
            msg: 'first name should be between 2 and 32 characters long',
          },
          isAlpha: {
            msg: 'first name should be letters only',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: USER_MESSAGES.REQUIRED.LAST_NAME,
          },
          len: {
            args: [2, 32],
            msg: 'last name should be between 2 and 32 characters long',
          },
          isAlpha: {
            msg: 'last name should be letters only',
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'The username already exists',
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: USER_MESSAGES.REQUIRED.USERNAME,
          },
          len: {
            args: [6, 32],
            msg: 'username should be between 6 and 32 characters long',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: 'The email already exists',
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: USER_MESSAGES.REQUIRED.EMAIL,
          },
          isEmail: {
            msg: 'Please provide a valid email address',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: USER_MESSAGES.REQUIRED.PASSWORD,
          },
          len: {
            args: [8, 1024],
            msg: 'Password should be between 8 and 1024 characters long',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
      instanceMethods: {
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password);
        },
      },
    }
  );
  return User;
};
