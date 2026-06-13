const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String,
  minutes: Number
});

const ChapterSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String,
  topicsCount: Number,
  minutes: Number,
  views: Number,
  topics: [TopicSchema]
});

const SubjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String,
  chaptersCount: Number,
  topicsCount: Number,
  minutes: Number,
  views: Number,
  icon: String,
  chapters: [ChapterSchema]
});

module.exports = mongoose.model('Subject', SubjectSchema);
