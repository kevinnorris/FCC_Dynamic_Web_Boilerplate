import mongoose from 'mongoose';

const User = new mongoose.Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    publicRepos: Number,
  },
  nbrClicks: {
    clicks: Number,
  },
});

module.exports = mongoose.model('User', User);
