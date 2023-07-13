const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false

      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         // validate: {
         //    isUrl: true
         // }
       },
       status: {
         type: DataTypes.STRING,
         
       },
       origin: {
         type: DataTypes.STRING,
        
       },
       species: {
         type: DataTypes.STRING,
        
       },
       gender: {
         type: DataTypes.STRING,
         // validate:{
         //    isIn: [['Male', 'Female', 'unknown', 'Genderless']],
         // } // ENUM [['Male', 'Female', 'unknown', 'Genderless']]
       },
   }, { timestamps: false });
};

/*
 id,
status,
 name,
 species,
origin,
image,
gender,
*/
