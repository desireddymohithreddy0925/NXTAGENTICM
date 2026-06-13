const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
  userId: { type: String, default: 'default_user' },
  gpsTasks: {
    dsa: { type: Boolean, default: false },
    dbms: { type: Boolean, default: false },
    oop: { type: Boolean, default: false }
  },
  completedTopics: {
    type: Map,
    of: Boolean,
    default: {}
  }
});

module.exports = mongoose.model('UserProgress', UserProgressSchema);
