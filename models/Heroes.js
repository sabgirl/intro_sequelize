'use strict';

//const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Heroes = sequelize.define('Heroes', {
        name: {
            type : DataTypes.STRING
        },
        age: {
            type : DataTypes.INTEGER
        }
    }, {
        timestamps : false
    });

    

    return Heroes;
};