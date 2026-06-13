const mongoose = require('mongoose');

const DashboardDataSchema = new mongoose.Schema({
  overview: {
    totalInterviews: Number,
    averageScore: Number,
    recentActivity: [{ type: { type: String }, subject: String, date: String }]
  },
  skills: [{
    name: String,
    score: Number,
    breakdown: [{ name: String, status: String }],
    insight: String
  }],
  dreamCompanies: {
    type: Map,
    of: new mongoose.Schema({
      readiness: Number,
      missing: [String]
    }, { _id: false })
  },
  badges: [{
    id: Number,
    title: String,
    icon: String,
    level: String
  }],
  nextAction: {
    title: String,
    impact: String,
    time: String,
    overallReadiness: Number
  }
});

module.exports = mongoose.model('DashboardData', DashboardDataSchema);
