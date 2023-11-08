/// Route handlers
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: '',
  });
};

exports.createUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: '',
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: '',
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Update tour here...',
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
