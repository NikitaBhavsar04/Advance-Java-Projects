const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    resume: String
});

module.exports = mongoose.model('Application', ApplicationSchema);
