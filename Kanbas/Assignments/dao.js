import model from "./model.js";

export const findAllAssignments = () => {
  return model.find();
};

export const findAssignmentsForCourse = (courseId) => {
  return model.find({ course: courseId });
};

export const createAssignment = (assignment) => {
  return model.create(assignment);
};

export const deleteAssignment = (assignmentId) => {
  return model.findByIdAndDelete(assignmentId);
};

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  return model.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
};