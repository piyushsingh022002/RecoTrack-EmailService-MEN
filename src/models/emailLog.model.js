const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
    sender: {
        email: { type: String, required: true },
        name: { type: String, required: true }
    },
    to: [{
        email: { type: String, required: true }
    }],
    subject: { type: String, required: true },
    htmlContent: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
    status: { type: String, default: 'sent' }
}, {
    timestamps: true,
    collection: 'sentEmailDocs'
});

module.exports = mongoose.model('EmailLog', emailLogSchema);
