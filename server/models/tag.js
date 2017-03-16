'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Tag.belongsToMany(models.Resource, {through: models.ResourceTag});
    title: DataTypes.STRING,
    ResourceId: DataTypes.INTEGER
  });
  return Tag;
};
