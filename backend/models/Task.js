import mongoose from 'mongoose';

// title (String, required)
// description (String)
// completed (Boolean, default: false)
// createdAt (Date, default: current date)

// Define the schema
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the model

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
