const mongoose = require('mongoose');

const QuestionResultSchema = new mongoose.Schema({
  q: String,
  technicalScore: Number,
  termMatchScore: Number,
  relevanceScore: Number,
  transcript: String,
  perceived: String,
  gaps: String,
  commAnalysis: String,
  improve: String
});

const InterviewReportSchema = new mongoose.Schema({
  sessionId: String,
  title: String,
  submittedAt: String,
  overall: {
    technicalScore: Number,
    termMatchScore: Number,
    relevanceScore: Number,
    confidenceScore: Number
  },
  questions: [QuestionResultSchema]
});

module.exports = mongoose.model('InterviewReport', InterviewReportSchema);
