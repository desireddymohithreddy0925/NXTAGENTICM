const express = require('express');
const router = express.Router();
const DashboardData = require('../models/DashboardData');
const UserProgress = require('../models/UserProgress');

// Helper to get the single mock dashboard data
const getDashboardData = async () => {
  let data = await DashboardData.findOne();
  return data;
};

// Helper to get the single mock user progress
const getUserProgress = async () => {
  let progress = await UserProgress.findOne({ userId: 'default_user' });
  return progress;
};

// @route   GET /api/dashboard/overview
router.get('/overview', async (req, res) => {
  try {
    const data = await getDashboardData();
    res.status(200).json({ message: 'Dashboard data retrieved perfectly', data: data ? data.overview : {} });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   GET /api/dashboard/skills
router.get('/skills', async (req, res) => {
  try {
    const data = await getDashboardData();
    res.status(200).json({ message: 'Skill gaps retrieved perfectly', skills: data ? data.skills : [] });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   GET /api/dashboard/dream-companies
router.get('/dream-companies', async (req, res) => {
  try {
    const data = await getDashboardData();
    res.status(200).json({ message: 'Dream companies retrieved perfectly', companies: data ? data.dreamCompanies : {} });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   GET /api/dashboard/career-gps
router.get('/career-gps', async (req, res) => {
  try {
    const progress = await getUserProgress();
    res.status(200).json({ message: 'Career GPS retrieved perfectly', tasks: progress ? progress.gpsTasks : {} });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   POST /api/dashboard/career-gps/toggle
router.post('/career-gps/toggle', async (req, res) => {
  try {
    const { key } = req.body;
    const progress = await getUserProgress();
    if (!progress) return res.status(404).json({ error: 'User progress not found' });
    
    if (progress.gpsTasks[key] !== undefined) {
      progress.gpsTasks[key] = !progress.gpsTasks[key];
      await progress.save();
      res.status(200).json({ message: 'Task toggled perfectly', tasks: progress.gpsTasks });
    } else {
      res.status(400).json({ error: 'Invalid task key' });
    }
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   GET /api/dashboard/badges
router.get('/badges', async (req, res) => {
  try {
    const data = await getDashboardData();
    res.status(200).json({ message: 'Badges retrieved perfectly', badges: data ? data.badges : [] });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   GET /api/dashboard/next-action
router.get('/next-action', async (req, res) => {
  try {
    const data = await getDashboardData();
    res.status(200).json({ message: 'Next action retrieved perfectly', action: data ? data.nextAction : {} });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// @route   POST /api/dashboard/next-action/complete
router.post('/next-action/complete', async (req, res) => {
  try {
    const data = await getDashboardData();
    if (!data) return res.status(404).json({ error: 'Dashboard data not found' });
    
    // Mock updating to next action
    data.nextAction = {
      title: 'Review System Design Concepts',
      impact: '+5 Readiness',
      time: '45 mins',
      overallReadiness: Math.min(100, data.nextAction.overallReadiness + 4)
    };
    await data.save();
    
    res.status(200).json({ message: 'Action completed perfectly', action: data.nextAction });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
