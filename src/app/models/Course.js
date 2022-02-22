const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxlength: 200, required: true },
        description: { type: String, maxlength: 600 },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Course', Course);
