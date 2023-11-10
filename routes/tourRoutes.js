const express = require('express');

const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkBody,
  aliasTopTours
} = require('./../controllers/tourController');

const router = express.Router();

/// top-5
router.route('/top-5-cheap-tours').get(aliasTopTours, getAllTours);

/// Routes
router
  .route('/')
  .get(getAllTours)
  .post(checkBody, createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
