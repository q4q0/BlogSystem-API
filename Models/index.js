const Sequelize = require('sequelize');
const db = require('../Config/db');
const UserModel = require('./User');
const PostModel = require('./Post');
const TagModel = require('./Tag');
const CategoryModel = require('./Category');

const User = UserModel(db, Sequelize);
const Post = PostModel(db, Sequelize);
const Tag = TagModel(db, Sequelize);
const Category = CategoryModel(db, Sequelize);
const PostTag = db.define('post_tag');

Category.hasMany(Post);
Post.belongsTo(Category);

User.hasMany(Post);
Post.belongsTo(User);

Post.belongsToMany(Tag, { through: PostTag });
Tag.belongsToMany(Post, { through: PostTag });

db.sync({ force: false });
module.exports = {
  User,
  Post,
  Tag,
  Category,
};
