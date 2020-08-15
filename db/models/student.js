'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

Student.beforeValidate((student) => {
  const capitalFirst = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
  // console.log(capitalFirst)
  student.firstName = capitalFirst;
  student.lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
})

module.exports = Student;
