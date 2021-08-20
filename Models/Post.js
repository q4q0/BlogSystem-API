module.exports = (db, type) => {
  return db.define('posts', {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: type.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title post is required',
        },
        len: {
          args: [3, 100],
          msg: 'title post should be between 3 and 100 characters long',
        },
      },
    },
    body: {
      type: type.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title body is required',
        },
        len: {
          args: [30, 1000],
          msg: 'body post should be between 30 and 1000 characters long',
        },
      },
    },
  });
};
