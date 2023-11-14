const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

/// Route handlers
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  });
});

exports.createUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: ''
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: ''
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Update tour here...'
    }
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
