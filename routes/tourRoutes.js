const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');

const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkBody,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan
} = require('./../controllers/tourController');

const router = express.Router();

/// top-5
router.route('/top-5-cheap-tours').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

/// Routes
router
  .route('/')
  .get(protect, getAllTours)
  .post(checkBody, createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
