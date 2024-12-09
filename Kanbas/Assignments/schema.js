import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },
  description: String,
  dueDate: String,
  availableFrom: String,
  availableUntil: String,
  points: { type: Number, default: 100 }
}, { collection: "assignments" });

export default assignmentSchema;