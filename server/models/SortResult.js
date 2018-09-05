const mongoose = require('mongoose');

const SortResult = mongoose.model('SortResult', {
  sortType: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  stats: {
    type: Object,
    required: true,
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = { SortResult };
