const mongoose = require('mongoose');
require('dotenv').config()

const mongoURL = "mongodb+srv://ahmadumer9126:umer%40123@cluster0.n1jbpch.mongodb.net/resumebuilder?retryWrites=true&w=majority"

const connections = mongoose.connect(mongoURL);

module.exports = {
    connections
}