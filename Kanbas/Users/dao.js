import model from "./model.js";
import courseModel from "../Courses/model.js";
import enrollmentModel from "../Enrollments/model.js";
export const createUser = (user) => {
  delete user._id
  return model.create(user);
}
export async function findCoursesForUser(userId) {
  
  const user = await model.findById(userId);
  if (user.role === "FACULTY") {
    return courseModel.find();
  }

  const enrollments = await enrollmentModel.find({ user: userId });
  const coursesPromises = enrollments.map(enrollment => 
    courseModel.findById(enrollment.course)
  );
  const courses = await Promise.all(coursesPromises);
  
  return courses.map(course => ({
    ...course.toObject(),
    enrolled: true
  }));
}

export function findCoursesForEnrolledUser(userId) {
  return model.find({ _id: { $in: enrollments } });
}

export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const findUsersByRole = (role) => model.find({ role: role });
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });